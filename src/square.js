import react from 'react';

class Square extends react.Component {
    render() {
        return (
            <button className="square">
             {this.props.value}
         </button>
        )
    }
}

export default Square;