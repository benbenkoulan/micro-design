import React from 'react';

function Sider(props) {
    const { width = 0, } = props;

    const style = { width };

    return (
        <aside style={style} className={'md-sider ' + props['class']}>
            {props.children}
        </aside>
    )
}

Sider.defaultProps = {
    width: 0,
    className: '',
}

export default Sider;
