import './square.css'
import Circle from '../../assets/img/circle.png'
import X from '../../assets/img/x.png'
import { useState } from 'react';

export const Square = ({ handlePlayerTurn, handleAddSquareToMatrix, rowNumber }) => {
    const [image, setImage] = useState(false);

    const handleAddImage = () => {
        if (!image) {
            const lastPlayer = handlePlayerTurn();
            lastPlayer === 1 ? setImage(X) : setImage(Circle);
            handleAddSquareToMatrix(rowNumber, lastPlayer);
            
        }
    }

    return (
        <button className="square" onClick={handleAddImage}>
            {image && <img src={image}></img>}
        </button>
    )
}