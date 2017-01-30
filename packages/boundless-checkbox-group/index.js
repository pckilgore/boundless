import React, {PropTypes} from 'react';
import cx from 'classnames';

import Checkbox from 'boundless-checkbox';
import omit from 'boundless-utils-omit-keys';
import uuid from 'boundless-utils-uuid';

const noop = () => {};

/**
__A controller view for managing the aggregate state of multiple, related checkboxes.__

The most common use case for `CheckboxGroup` is a "select all" / children scenario. This particular
configuration is built-in and is activated by passing the `selectAll` prop.
 */
export default class CheckboxGroup extends React.PureComponent {
    static selectAllPosition = {
        BEFORE: uuid(),
        AFTER: uuid(),
    }

    static propTypes = {
        /**
         * the data wished to be rendered, each item must conform to the [Checkbox prop spec](./Checkbox#props)
         */
        items: PropTypes.arrayOf(Checkbox.propTypes.inputProps).isRequired,

        /**
         * called when all children become checked (not fired on first render), no return
         */
        onAllChecked: PropTypes.func,

        /**
         * called when all children become unchecked (not fired on first render), no return
         */
        onAllUnchecked: PropTypes.func,

        /**
         * called when a specific child has become checked, returns the child definition
         */
        onChildChecked: PropTypes.func,

        /**
         * called when a specific child has become checked, returns the child definition
         */
        onChildUnchecked: PropTypes.func,

        /**
         * renders a master checkbox that can manipulate the values of all children simultaneously
         */
        selectAll: PropTypes.bool,

        /**
         * must conform to the [Checkbox prop spec](./Checkbox#props)
         */
        selectAllProps: PropTypes.shape({
            /**
             * the text or renderable node to display next to the checkbox
             */
            label: PropTypes.string,
            inputProps: PropTypes.object,
        }),

        selectAllPosition: PropTypes.oneOf([
            CheckboxGroup.selectAllPosition.BEFORE,
            CheckboxGroup.selectAllPosition.AFTER,
        ]),
    }

    static defaultProps = {
        items: [],
        onAllChecked: noop,
        onAllUnchecked: noop,
        onChildChecked: noop,
        onChildUnchecked: noop,
        selectAll: false,
        selectAllProps: {},
        selectAllPosition: CheckboxGroup.selectAllPosition.BEFORE,
    }

    static internalKeys = Object.keys(CheckboxGroup.defaultProps)

    allItemsChecked() {
        return this.props.items.every((item) => item.inputProps.checked === true);
    }

    anyItemsChecked() {
        return this.props.items.some((item) => item.inputProps.checked === true);
    }

    renderSelectAll() {
        if (this.props.selectAll) {
            const allChecked = this.allItemsChecked();
            const {inputProps} = this.props.selectAllProps;

            return (
                <Checkbox
                    {...this.props.selectAllProps}
                    ref='select_all'
                    key='cb_select_all'
                    className={cx('b-checkbox-group-selectall', this.props.selectAllProps.className)}
                    inputProps={{
                        ...inputProps,
                        checked: allChecked,
                        indeterminate: !allChecked && this.anyItemsChecked(),
                        name: inputProps && inputProps.name
                              ? inputProps.name
                              : 'cb_select_all',
                    }}
                    label={this.props.selectAllProps.label || 'Select All'}
                    onChecked={this.props.onAllChecked}
                    onUnchecked={this.props.onAllUnchecked} />
            );
        }
    }

    renderCheckboxes() {
        return this.props.items.map((item) => {
            return (
                <Checkbox
                    {...item}
                    key={item.inputProps.name}
                    onChecked={this.props.onChildChecked}
                    onUnchecked={this.props.onChildUnchecked} />
            );
        });
    }

    renderChildren() {
        const toBeRendered = [this.renderCheckboxes()];

        if (this.props.selectAll && this.props.selectAllPosition) {
            switch (this.props.selectAllPosition) {
            case CheckboxGroup.selectAllPosition.BEFORE:
                toBeRendered.unshift(this.renderSelectAll());
                break;

            case CheckboxGroup.selectAllPosition.AFTER:
                toBeRendered.push(this.renderSelectAll());
                break;
            }
        }

        return toBeRendered;
    }

    render() {
        return (
            <div
                {...omit(this.props, CheckboxGroup.internalKeys)}
                ref='group'
                className={cx('b-checkbox-group', this.props.className)}>
                {this.renderChildren()}
            </div>
        );
    }
}
