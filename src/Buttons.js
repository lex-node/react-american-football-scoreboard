import React, {useState} from 'react';

const Buttons = (props) => {
    return (
        <section className="buttons">
            <div className="homeButtons">
                <button className="homeButtons__touchdown" onClick={props.clickHandler}>Home Touchdown</button>
                <button className="homeButtons__fieldGoal" onClick={props.clickHandler}>Home Field Goal</button>
            </div>
            <div className="awayButtons">
                <button className="awayButtons__touchdown" onClick={props.clickHandler}>Away Touchdown</button>
                <button className="awayButtons__fieldGoal" onClick={props.clickHandler}>Away Field Goal</button>
            </div>
            <div className="quarterButtonContainer" style={{display: "flex"}}>
                <button className="quarterButton" onClick={props.clickHandler} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '10%',
                    maxHeight: '87%'
                }}>Quarter
                </button>
            </div>
        </section>
    )
}
export default Buttons;
