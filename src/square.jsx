import React from 'react';

// export default class Square extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     // }
//     render() {
//         return (
//             <div className="square" onClick={() => this.props.onClick()}>
//                 {this.props.value}
//             </div >
//         )
//     }
// }

export default function Square(props) {
    return (
        <div className="square" onClick={props.onClick}>
            {props.value}
        </div >
    )
}