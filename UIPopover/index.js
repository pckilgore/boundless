/**
 * A non-blocking container positioned to a specific anchor element.
 * @class UIPopover
 */

/*
    A nuance about this component: since it only renders a simple <div>, the main render() function
    never changes. Therefore, we need to manually call `componentDidUpdate` after `setState` to trigger
    a full re-render of the child dialog.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import UIDialog from '../UIDialog';
import UIView from '../UIView';
import transformProp from '../UIUtils/transformProperty';
import cx from 'classnames';

class UIPopover extends UIView {
    initialState() {
        return {
            anchorXAlign: this.props.anchorXAlign,
            anchorYAlign: this.props.anchorYAlign,
            selfXAlign: this.props.selfXAlign,
            selfYAlign: this.props.selfYAlign,
        };
    }

    componentWillMount() {
        document.body.appendChild((this.container = document.createElement('div')));

        // this is bad, don't do this anywhere else :-x.
        this.refs = {};
        this.refs.dialog = this.renderDialog();
        this.node = ReactDOM.findDOMNode(this.refs.dialog);

        this.align = this.align.bind(this);
        this.align();

        window.addEventListener('resize', this.align, true);
    }

    componentDidUpdate() {
        this.renderDialog();
        this.align();
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.container);
        document.body.removeChild(this.container);

        window.removeEventListener('resize', this.align, true);
    }

    getNextXPosition(anchor, dialog) {
        const state = this.state;
        const position = UIPopover.position;

        let nextX = anchor.getBoundingClientRect().left + document.body.scrollLeft;

        switch (state.anchorXAlign) {
        case position.MIDDLE:
            nextX += anchor.offsetWidth / 2;
            break;

        case position.END:
            nextX += anchor.offsetWidth;
            break;
        }

        switch (state.selfXAlign) {
        case position.MIDDLE:
            nextX -= dialog.clientWidth / 2;
            break;

        case position.END:
            nextX -= dialog.clientWidth;
            break;
        }

        return nextX;
    }

    getNextYPosition(anchor, dialog) {
        const state = this.state;
        const position = UIPopover.position;
        const anchorY = anchor.getBoundingClientRect().top + document.body.scrollTop;
        const anchorHeight = anchor.offsetHeight;

        let nextY = anchorY + anchorHeight;

        switch (state.anchorYAlign) {
        case position.START:
            nextY = anchorY;
            break;

        case position.MIDDLE:
            nextY = anchorY + anchorHeight / 2;
            break;
        }

        switch (state.selfYAlign) {
        case position.MIDDLE:
            nextY -= dialog.clientHeight / 2;
            break;

        case position.END:
            nextY -= dialog.clientHeight;
            break;
        }

        return nextY;
    }

    getAlignmentCorrectionIfOverflowing(node, x, y) {
        if (!this.props.autoReposition) {
            return false;
        }

        const corrections = {};

        const width = node.clientWidth;
        const height = node.clientHeight;
        const xMax = document.body.scrollWidth;
        const yMax = document.body.scrollHeight;

        if (x + width > xMax) { // overflowing off to the right
            corrections.anchorXAlign = UIPopover.position.END;
            corrections.selfXAlign = UIPopover.position.END;
        } else if (x < 0) { // overflowing off to the left
            corrections.anchorXAlign = UIPopover.position.START;
            corrections.selfXAlign = UIPopover.position.START;
        } else if (y + height > yMax) { // overflowing below
            corrections.anchorYAlign = UIPopover.position.START;
            corrections.selfYAlign = UIPopover.position.END;
        } else if (y < 0) { // overflowing above
            corrections.anchorYAlign = UIPopover.position.END;
            corrections.anchorXAlign = UIPopover.position.MIDDLE;
            corrections.selfYAlign = UIPopover.position.START;
            corrections.selfXAlign = UIPopover.position.MIDDLE;
        }

        return corrections;
    }

    applyTranslation(node, x, y) {
        if (transformProp) {
            node.style[transformProp] = `translate(${x}px, ${y}px)`;
        } else {
            node.style.left = x + 'px';
            node.style.top = y + 'px';
        }
    }

    align() {
        const anchor =   this.props.anchor instanceof HTMLElement
                       ? this.props.anchor
                       : ReactDOM.findDOMNode(this.props.anchor);

        const x = this.getNextXPosition(anchor, this.node);
        const y = this.getNextYPosition(anchor, this.node);

        const alignmentCorrection = this.getAlignmentCorrectionIfOverflowing(this.node, x, y);

        if (alignmentCorrection && Object.keys(alignmentCorrection).length) {
            return this.setState(alignmentCorrection, () => this.componentDidUpdate());
        }

        this.applyTranslation(this.node, x, y);
    }

    getClassAlignmentFragment(constant) {
        const position = UIPopover.position;

        switch (constant) {
        case position.START:
            return 'start';

        case position.MIDDLE:
            return 'middle';

        case position.END:
            return 'end';
        }
    }

    renderDialog() {
        const state = this.state;
        const getFrag = this.getClassAlignmentFragment;

        return ReactDOM.render(
            <UIDialog {...this.props}
                      captureFocus={false}
                      className={cx({
                        'ui-popover': true,
                        [`ui-popover-anchor-x-${getFrag(state.anchorXAlign)}`]: true,
                        [`ui-popover-anchor-y-${getFrag(state.anchorYAlign)}`]: true,
                        [`ui-popover-self-x-${getFrag(state.selfXAlign)}`]: true,
                        [`ui-popover-self-y-${getFrag(state.selfYAlign)}`]: true,
                        [this.props.className]: !!this.props.className,
                      })}
                      style={{
                          ...this.props.style,
                          position: 'absolute',
                          top: '0px',
                          left: '0px',
                      }} />
        , this.container);
    }

    render() {
        return (
            <div />
        );
    }
}

UIPopover.position = {
    START: 'START',
    MIDDLE: 'MIDDLE',
    END: 'END',
};

UIPopover.propTypes = {
    ...UIDialog.propTypes,
    anchor: React.PropTypes.oneOfType([
        React.PropTypes.instanceOf(HTMLElement),
        React.PropTypes.shape({
            props: React.PropTypes.object,
            state: React.PropTypes.object,
        }), // a react element of some fashion, React.PropTypes.element wasn't working
    ]).isRequired,
    anchorXAlign: React.PropTypes.oneOf([
        UIPopover.position.START,
        UIPopover.position.MIDDLE,
        UIPopover.position.END,
    ]),
    anchorYAlign: React.PropTypes.oneOf([
        UIPopover.position.START,
        UIPopover.position.MIDDLE,
        UIPopover.position.END,
    ]),
    autoReposition: React.PropTypes.bool,
    selfXAlign: React.PropTypes.oneOf([
        UIPopover.position.START,
        UIPopover.position.MIDDLE,
        UIPopover.position.END,
    ]),
    selfYAlign: React.PropTypes.oneOf([
        UIPopover.position.START,
        UIPopover.position.MIDDLE,
        UIPopover.position.END,
    ]),
};

UIPopover.defaultProps = {
    ...UIDialog.defaultProps,
    anchorXAlign: UIPopover.position.START,
    anchorYAlign: UIPopover.position.END,
    autoReposition: true,
    selfXAlign: UIPopover.position.START,
    selfYAlign: UIPopover.position.START,
};

export default UIPopover;
