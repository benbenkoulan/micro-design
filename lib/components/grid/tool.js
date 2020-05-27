export const genJustifyClassName = (justify) => {
    switch (justify) {
        case 'start': return 'md-row--start';
        case 'center': return 'md-row--center';
        case 'end': return 'md-row--end';
        case 'space-around': return 'md-row--space-around';
        case 'space-between': return 'md-row--space-between';
        case 'space-evenly': return 'md-row--space-evenly';
        default: return 'md-rwo--start';
    }
}

export const isArray = (arrayLike) => Object.prototype.toString.call(arrayLike).slice(8, -1).toLowerCase() === 'array';
