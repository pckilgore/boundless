import UIButton from '../../UIButton';
import UIProgress from '../index';
import UIView from '../../UIView';
import React from 'react';
import {each} from 'lodash';
import transformProp from '../../UIUtils/transform';

export default class UIProgressDemo extends UIView {
    initialState() {
        return {
            barProgress: 0,
            meterProgress: 0,
            forestProgress: 0,
            trees: this.generateTrees(),
        };
    }

    componentDidMount() {
        each(this.refs, (value, key) => this.updateProgress(key));
    }

    render() {
        return (
            <div className='ui-spread-even ui-align-end ui-center'>
                <figure>
                    <UIProgress ref='bar'
                                className='progress-bar'
                                label={`${this.state.barProgress}%`}
                                progress={`${this.state.barProgress}%`} />
                    <UIButton onClick={this.resetProgress.bind(this, 'bar')}
                              style={{marginTop: '1rem'}}>
                        Reset
                    </UIButton>
                </figure>
                <figure>
                    <UIProgress ref='meter'
                                className='progress-meter'
                                label={`${this.state.meterProgress}%`}
                                progress={`${this.state.meterProgress}%`}
                                tweenProperty='height' />
                    <UIButton onClick={this.resetProgress.bind(this, 'meter')}
                              style={{marginTop: '1rem'}}>
                        Reset
                    </UIButton>
                </figure>
                <figure>
                    <UIProgress ref='forest'
                                className='progress-forest'
                                label={this.state.trees}
                                progress={100 - this.state.forestProgress}
                                tweenProperty='zIndex' />
                    <UIButton onClick={this.resetProgress.bind(this, 'forest')}
                              style={{marginTop: '1rem'}}>
                        Reset
                    </UIButton>
                </figure>
            </div>
        );
    }

    randomNumberControlled(seed) {
        return (Math.random() * seed * (Math.random() > 0.5 ? -1 : 1)).toFixed(2);
    }

    randomPosition(seed1, seed2) {
        return [this.randomNumberControlled(seed1 || 5) + 'em', this.randomNumberControlled(seed2 || 3) + 'em'].join(',');
    }

    generateTrees() {
        let trees = [];
        let i = 0;

        while (++i <= 100) {
            trees.push(
                <div key={i}
                     className='progress-forest-tree'
                     style={{
                        borderBottomColor: `hsl(97.8, 35.5%, ${(Math.random() * (55 - 25) + 25).toFixed(4)}%)`,
                        [transformProp]: `scale(${(Math.random() * 0.3 + 0.9).toFixed(3)}) translate(${this.randomPosition(...(i < 70 ? [3, 2] : []))})`,
                        zIndex: i,
                     }}>
                    |
                </div>
            );
        }

        return trees;
    }

    updateProgress(type) {
        if (this.state[`${type}Progress`] < 100) {
            this[`${type}timerHandle`] = window.setTimeout(() => {
                this.setState({ [`${type}Progress`]: this.state[`${type}Progress`] + 1 }, () => {
                    this.updateProgress(type);
                });
            }, 35);
        }
    }

    resetProgress(type) {
        window.clearTimeout(this[`${type}timerHandle`]);

        if (type === 'forest') {
            this.setState({ trees: this.generateTrees() });
        }

        this.setState({ [`${type}Progress`]: 0 }, () => { this.updateProgress(type); });
    }
}