import React from 'react';

function Layout(props) {
    const classNames = ['md-layout'];
    if (props['class']) {
        classNames.push(props['class']);
    }
    if (props.hasSider) {
        classNames.push('md-layout--has-sider');
    }

    return (
        <section className={classNames.join(' ')}>
            {props.children}
        </section>
    );
}

Layout.defaultProps = {
    className: '',
    hasSider: false,
};

export default Layout;
