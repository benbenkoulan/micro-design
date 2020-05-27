import React from 'react';

function Layout(props) {
    const { style, hasSider } = props;

    const classNames = ['md-layout'];
    if (props['class']) {
        classNames.push(props['class']);
    }
    if (hasSider) {
        classNames.push('md-layout--has-sider');
    }

    return (
        <section style={style} className={classNames.join(' ')}>
            {props.children}
        </section>
    );
}

Layout.defaultProps = {
    className: '',
    hasSider: false,
};

export default Layout;
