import React, {useState} from 'react';
import { calculateWinner } from '../helper';
import Board from './Board'

const style = {
    width: '200px',
    margin: '20px auto',

};

const Game = ()=> {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);
    

    const handleClick = (i) => {
        const boardKey = [...board];
        if(winner || boardKey[i]) return;
        boardKey[i] = xIsNext ? 'X' : 'O';
        setBoard(boardKey);
        setXisNext(!xIsNext);
    }

    const renderMoves = () => (
         <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>

    )

    return (
        <>
            <Board squares = {board} onClick = {handleClick} />
            <div style = {style}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    )
}


export default Game