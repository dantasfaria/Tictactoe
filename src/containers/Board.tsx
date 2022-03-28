import { useState, useEffect } from 'react'
import Square from "../components/square/Square"
import Player from "../models/PlayerT"
import determineWinner from "../components/determineWinner/determineWinner"

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState<Player>(null)
    const [player, setPlayer] = useState("X");
    
    function reset() {
        setSquares(Array(9).fill(null))
        setWinner(null)
        setPlayer("X")
    }

    function setSquareValue(index: number) {
        const newData = squares.map((value, i) => {
            if (i === index) {
                return player
            }
            return value;
        })

        setSquares(newData)
        setPlayer(player === 'X' ? 'O' : 'X')
    }

    useEffect(() => {
        const winner = determineWinner(squares)

        if(winner) {
            setWinner(winner)
        }

        if(!winner && !squares.filter((square) => !square).length) {
            setWinner("tie")
        }
    })

    return (
        <div>
            <h1>RARO'S TIC-TAC-TOE</h1>

            {winner && winner != 'tie' && <h2>Congratulations, {winner}! You won!</h2>} 
            {winner === 'tie' && <h2>It's a tie...</h2>} 
            {!winner && <h2>{player}'s turn</h2>}
            
            <div className="grid">        
                {Array(9).fill(null).map((_, i) => {
                    return <Square 
                        winner={winner}
                        key={i}
                        onClick={() => setSquareValue(i) }
                        value={squares[i]}
                        />
                })}
            </div>
            <button onClick={reset} className="reset">RESET</button>
        </div>
    );
}

export default Board