import React from 'react';

function Sider(props) {
    const { width = 0, style = {}, } = props;

    const newStyle = { ...style, width };

    return (
        <aside style={newStyle} className={'md-sider ' + props['class']}>
            {props.children}
        </aside>
    )
}

Sider.defaultProps = {
    width: 'auto',
    className: '',
}

export default Sider;
