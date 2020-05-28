import React, { Fragment, useContext } from 'react';

import { noop } from '../../utils';
import RowContext from './context';

function Col(props) {
    const context = useContext(RowContext);
    const { horizontalGutter, verticalGutter } = context;
    const { span, children, style, onClick = noop } = props;
    const containerClassName = `md-col ${ span > 0 ? `md-col-${span}` : '' }`;
    const elementClassName = props['class'] || '';

    let compositeStyle = null;
    if (horizontalGutter > 0 || verticalGutter > 0) {
        compositeStyle = {
            paddingLeft: `${horizontalGutter / 2}px`,
            paddingRight: `${horizontalGutter / 2}px`,
            paddingTop: `${verticalGutter / 2}px`,
            paddingBottom: `${verticalGutter / 2}px`,
            boxSizing: 'border-box',
        }
    }

    const renderChildren = ({ horizontalGutter, verticalGutter } = {}) => {
        if (horizontalGutter > 0 || verticalGutter > 0) {
            const style = {
                paddingLeft: `${horizontalGutter / 2}px`,
                paddingRight: `${horizontalGutter / 2}px`,
                paddingTop: `${verticalGutter / 2}px`,
                paddingBottom: `${verticalGutter / 2}px`,
            };
            return (
                <div style={style}>{children}</div>
            );
        }
        return children;
    }

    return (
        <Fragment>
            {
                compositeStyle
                    ? (
                        <div style={compositeStyle} className={containerClassName} onClick={onClick}>
                            <div style={style} className={elementClassName}>{children}</div>
                        </div>
                    )
                    : (<div style={style} className={`${containerClassName} ${elementClassName}`} onClick={onClick}>{children}</div>)
            }
        </Fragment>
    );
}

export default Col;
