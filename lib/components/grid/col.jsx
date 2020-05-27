import React, { useContext } from 'react';

import RowContext from './context';

function Col(props) {
    const context = useContext(RowContext);
    const { span, children } = props;
    const classNames = ['md-col', `md-col-${span}`];
    if (props['class']) {
        classNames.push(props['class']);
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
            )
        }
        return children;
    }

    return (
        <div className={classNames.join(' ')}>
            {
                renderChildren(context)
            }
        </div>
    );
}


// class Col extends React.Component {

//     static contextType = RowContext;
//     static defaultProps = {
//         span: '',
//     };

//     renderChildren = ({ horizontalGutter, verticalGutter } = {}) => {
//         if (horizontalGutter > 0 || verticalGutter > 0) {
//             const style = {
//                 paddingLeft: `${horizontalGutter / 2}px`,
//                 paddingRight: `${horizontalGutter / 2}px`,
//                 paddingTop: `${verticalGutter / 2}px`,
//                 paddingBottom: `${verticalGutter / 2}px`,
//             };

//             return (
//                 <div style={style}>{this.props.children}</div>
//             )
//         }
//         return this.props.children;
//     }

//     render() {
//         const { span } = this.props;
//         const classNames = ['md-col', `md-col-${span}`];
//         if (this.props['class']) {
//             classNames.push(this.props['class']);
//         }

//         return (
//             <RowContext.Consumer>
//                 {(gutter) => (
//                     <div className={classNames.join(' ')}>
//                         {
//                             this.renderChildren(gutter)
//                         }
//                     </div>
//                 )}
//             </RowContext.Consumer>
//         );     
//     }
// }

export default Col;
