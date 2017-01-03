import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import cx from 'classnames';

import Button from '../boundless-button/index';
import isFunction from '../boundless-utils-is-function/index';
import noop from '../boundless-utils-noop/index';
import omit from '../boundless-utils-omit-keys/index';

export default class SegmentedControl extends React.PureComponent {
    static propTypes = {
        /**
         * called when a child element becomes selected; backing data must be updated to persist the state change
         */
        onOptionSelected: PropTypes.func,

        /**
         * the backing data for the segments of the rendered control

         * > __Validation Criteria:__
         * >
         * > 1. There must be at least two `options` (a segmented control with one button is not allowed)
         * > 1. There must only be one `option` whose `selected` attribute is `true` (multiple selections are not allowed)
         * > 1. Each `value` attribute must be unique across the set of `options`

         * - __options[].selected__ `Boolean`
         * - __options[].value__ `String`
         * - __options[].content__ `*`
           * the content to go inside the button
         */
        options: function validateOptions(props) {
            if (props.options.length < 2) {
                throw new Error('Must provide at least two options.');
            }

            const missingSelected = props.options.some((option) => {
                if (!('selected' in option)) {
                    return true;
                }
            });

            if (missingSelected) {
                throw new Error('Must provide a `selected` prop for each option.');
            }

            let seenSelected = false;
            const multipleSelected = props.options.some((option) => {
                if (option.selected) {
                    if (seenSelected) {
                        return true;
                    }

                    seenSelected = true;
                }
            });

            if (multipleSelected) {
                throw new Error('Encountered multiple options with `selected: true`. There can be only one.');
            }

            if (props.options.some((option) => typeof option.value === 'undefined')) {
                throw new Error('Must provide a `value` prop for each option.');
            }
        },
    }

    static defaultProps = {
        onOptionSelected: noop,
        options: [],
    }

    static internalKeys = Object.keys(SegmentedControl.defaultProps)
    static internalChildKeys = [
        'content',
        'value',
        'selected',
    ]

    state = {
        indexOfOptionInFocus: null,
    }

    currentValue() {
        let value;

        this.props.options.some((option) => {
            if (option.selected) {
                value = option.value;

                return true;
            }
        });

        return value;
    }

    setFocus(index) {
        findDOMNode(this.refs['option_$' + index]).focus();
    }

    getNextOptionIndex(currentOptionIndex) {
        let next = currentOptionIndex + 1;

        return next < this.props.options.length ? next : 0;
    }

    getPreviousOptionIndex(currentOptionIndex) {
        let previous = currentOptionIndex - 1;

        return previous < 0 ? this.props.options.length - 1 : previous;
    }

    handleOptionBlur(option, event) {
        if (this.state.indexOfOptionInFocus === this.props.options.indexOf(option)) {
            this.setState({indexOfOptionInFocus: null});
        }

        if (isFunction(option.onBlur)) {
            option.onBlur(event);
        }
    }

    handleOptionClick(option, event) {
        this.props.onOptionSelected(option.value);

        if (isFunction(option.onClick)) {
            option.onClick(event);
        }
    }

    handleOptionFocus(option, event) {
        this.setState({indexOfOptionInFocus: this.props.options.indexOf(option)});

        if (isFunction(option.onFocus)) {
            option.onFocus(event);
        }
    }

    handleKeyDown = (event) => {
        const key = event.key;
        const activeItemIndex = this.state.indexOfOptionInFocus;

        if (key === 'ArrowLeft') {
            this.setFocus(this.getPreviousOptionIndex(activeItemIndex));
            event.preventDefault();
        } else if (key === 'ArrowRight') {
            this.setFocus(this.getNextOptionIndex(activeItemIndex));
            event.preventDefault();
        } else if (key === 'Enter') {
            this.handleOptionClick(this.props.options[activeItemIndex]);
            event.preventDefault();
        }

        if (isFunction(this.props.onKeyDown)) {
            this.props.onKeyDown(event);
        }
    }

    renderOptions() {
        return this.props.options.map((definition, index) => {
            return (
                <Button
                    {...omit(definition, SegmentedControl.internalChildKeys)}
                    role='radio'
                    aria-checked={String(definition.selected)}
                    ref={'option_$' + index}
                    key={definition.value}
                    className={cx('b-segmented-control-option', definition.className, {
                        'b-segmented-control-option-selected': definition.selected,
                    })}
                    tabIndex={definition.selected ? '0' : '-1'}
                    onBlur={this.handleOptionBlur.bind(this, definition)}
                    onPressed={this.handleOptionClick.bind(this, definition)}
                    onFocus={this.handleOptionFocus.bind(this, definition)}>
                    {definition.content}
                </Button>
            );
        });
    }

    render() {
        return (
            <div
                {...omit(this.props, SegmentedControl.internalKeys)}
                ref='wrapper'
                role='radiogroup'
                className={cx('b-segmented-control', this.props.className)}
                onKeyDown={this.handleKeyDown}>
                {this.renderOptions()}
            </div>
        );
    }
}
