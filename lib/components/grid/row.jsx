import React from 'react';

import { noop } from '../../utils';

import RowContext from './context';
import { genJustifyClassName, isArray } from './tool';

function Row(props) {
    const { gutter, justify, wrap, style = {}, onClick = noop } = props;

    const [horizontalGutter = 0, verticalGutter = 0] = isArray(gutter) ? gutter : [gutter, 0];

    const classNames = ['md-row'];
    classNames.push(genJustifyClassName(justify));
    if (wrap) {
        classNames.push('md-wrap')
    }
    if (props['class']) {
        classNames.push(props['class']);
    }

    return (
        <RowContext.Provider value={{ horizontalGutter, verticalGutter }}>
            <div className={classNames.join(' ')} style={{
                    ...style,
                    marginLeft: `${-horizontalGutter / 2}px`,
                    marginRight: `${-horizontalGutter / 2}px`,
                    marginTop: `${-verticalGutter / 2}px`,
                    marginBottom: `${-verticalGutter / 2}px`,
                }}
                onClick={onClick}
            >
                {props.children}
            </div>
        </RowContext.Provider>
    )
}

Row.defaultProps = {
    gutter: 0,
    wrap: false,
    justify: 'start',
};

export default Row;
