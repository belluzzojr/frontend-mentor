import React, { useContext } from 'react';
import { PointsContext } from '../../Database/PointsContext';
import DualView from '../Duel/DuelView';

const DuelController = () => {

    const context = useContext(PointsContext);

    const buttonPlayAgain = () => {
        window.location.href="http://localhost:3000"
    }

    const buttonDev = () => {
        alert("System in development")
    }

    return (
        <DualView
        points={context.points}
        buttonDev={buttonDev}
        buttonPlayAgain={buttonPlayAgain}
        />
    )
}

export default DuelController;