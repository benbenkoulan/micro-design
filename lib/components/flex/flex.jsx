import React from 'react';

const getDirectionClassName = (direction) => ({
    row: 'md-row',
    column: 'md-column',
})[direction] || '';

const getJustifyContentClassName = (justifyContent) => ({
    start: 'justify-content-start',
    end: 'justify-content-end',
    center: 'justify-content-center',
    'space-between': 'justify-content-space-between',
    'space-around': 'justify-content-space-around',
    'space-evenly': 'justify-content-space-evenly',
})[justifyContent] || '';

const getAlignItems = (alignItems) => ({
    start: 'align-items-start',
    end: 'align-items-end',
    center: 'align-items-center',
    stretch: 'align-items-stretch',
})[alignItems] || '';

const noop = () => {};

function Flex(props) {
    const {
        style,
        direction = 'row',
        justifyContent = 'start',
        alignItems = 'stretch',
        children,
        onClick = noop,
    } = props;

    const classNames = [
        'md-flex',
        getDirectionClassName(direction),
        getJustifyContentClassName(justifyContent),
        getAlignItems(alignItems),
    ];
    if (props['class']) classNames.push(props['class']);

    return (
        <div style={style} className={classNames.join(' ')} onClick={onClick}>
            {children}
        </div>
    );
}

export default Flex;