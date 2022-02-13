import { Square } from "../square/Square"
import './row.css'

export const Row = ({ handlePlayerTurn, handleAddSquareToMatrix, rowNumber }) => {
    return (
        <div className="row">
            <Square rowNumber={rowNumber}  handlePlayerTurn={handlePlayerTurn} handleAddSquareToMatrix={handleAddSquareToMatrix}/>
            <hr />
            <Square rowNumber={rowNumber} handlePlayerTurn={handlePlayerTurn} handleAddSquareToMatrix={handleAddSquareToMatrix}/>
            <hr />
            <Square rowNumber={rowNumber} handlePlayerTurn={handlePlayerTurn} handleAddSquareToMatrix={handleAddSquareToMatrix}/>
        </div>
    )
}