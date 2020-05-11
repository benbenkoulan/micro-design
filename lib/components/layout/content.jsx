import React from 'react';

function Content(props) {
    return (
        <main onClick={props.onClick} className={'md-content ' + props['class']}>
            {props.children}
        </main>
    );
}

Content.defaultProps = {
    className: '',
    onClick: () => {}
};

export default Content;
