import { render } from '@testing-library/react';
import react from 'react';
import Square from './square';

class Board extends react.Component {
    renderSquare(i) {
        return <Square value={i}/>;
    }

    render() {
        const status='Next player: x';

        return (
            <div>
                <div className="status"></div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;