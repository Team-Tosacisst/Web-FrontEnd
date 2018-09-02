import React, { Component } from 'react';
import classNames from 'classnames/bind'
import styles from './CssModule.css'

console.log(styles)

const cx = classNames.bind(styles)

class CssModule extends Component {
    render() {
        return (
            <div className = {cx('box', 'blue')}>

            </div>
        );
    }
}

export default CssModule;