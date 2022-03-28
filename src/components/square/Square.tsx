import Player from "../../models/PlayerT"

function Square({ value, onClick, winner }: 
    {
        winner: Player
        value: Player
        onClick: () => void
    }) {

        if(!value) {
            return <button className="square" onClick={onClick} disabled={Boolean(winner)}/>
        }

        return <button className="square" disabled>{value}</button>
}

export default Square