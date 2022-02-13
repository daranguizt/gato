import { useState } from "react"
import { Row } from "../row/Row"
import './board.css'


export const Board = ({ handlePlayerTurn, setIsGameOver, setWinner, setIsTie }) => {

    const [matrix, setMatrix] = useState([[], [], []])

    const handleAddSquareToMatrix = (rowNumber, player) => {
        let newMatrix = matrix;
        newMatrix[rowNumber].push(player);
        setMatrix(newMatrix);
        if (hasPlayerWon(newMatrix)) {
            setIsGameOver(true);
            setWinner(player);
        } else if (isTie(newMatrix)) {
            setIsTie(true);
        }
    }

    const hasPlayerWon = (matrix) => {
        return areAllElementsInRowEqual(matrix[0]) ||
            areAllElementsInRowEqual(matrix[1]) ||
            areAllElementsInRowEqual(matrix[2]) ||
            areAllElementsInColumnEqual(matrix[0], matrix[1], matrix[2], 0) ||
            areAllElementsInColumnEqual(matrix[0], matrix[1], matrix[2], 1) ||
            areAllElementsInColumnEqual(matrix[0], matrix[1], matrix[2], 2) ||
            areAllElementsInDiagonalsEqual(matrix[0], matrix[1], matrix[2])
    }

    const areAllElementsInRowEqual = (row) => {
        return row.length === 3 && row[0] === row[1] && row[1] === row[2];
    }

    const areAllElementsInColumnEqual = (row1, row2, row3, columnNumber) => {
        return (row1.length >= 1 && row2.length >= 1 && row3.length >= 1) && row1[columnNumber] !== undefined &&
            (row1[columnNumber] === row2[columnNumber] && row2[columnNumber] === row3[columnNumber]);
    }

    const areAllElementsInDiagonalsEqual = (row1, row2, row3) => {
        return (row1.length >= 1 && row2.length >= 1 && row3.length >= 1) && row1[0] !== undefined &&
            ((row1[0] === row2[1] && row2[1] === row3[2]) || (row1[2] === row2[1] && row2[1] === row3[0]));

    }

    const isTie = (matrix) => {
        return matrix[0].length === 3 && matrix[1].length === 3 && matrix[2].length === 3 
    }

    return (
        <div className="board">
            <Row rowNumber={0} handlePlayerTurn={handlePlayerTurn} handleAddSquareToMatrix={handleAddSquareToMatrix} />
            <hr />
            <Row rowNumber={1} handlePlayerTurn={handlePlayerTurn} handleAddSquareToMatrix={handleAddSquareToMatrix} />
            <hr />
            <Row rowNumber={2} handlePlayerTurn={handlePlayerTurn} handleAddSquareToMatrix={handleAddSquareToMatrix} />
        </div>
    )
}