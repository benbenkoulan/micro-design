import React from 'react';

function Header(props) {
    return (
        <header className="md--header">{props.children}</header>
    );
}

export default Header;
