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
        </section>
    )
}
export default Buttons;
