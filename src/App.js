import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";
import Buttons from './Buttons';

function App() {

    const [homeScore, setHomeScore] = useState(0);

    const [awayScore, setAwayScore] = useState(0);

    const [quarter, setQuarter] = useState(0);

    const clickHandler = (event) => {
        switch (event.target.getAttribute('class')) {
            case 'homeButtons__touchdown':
                setHomeScore(homeScore + 6);
                break;
            case 'homeButtons__fieldGoal':
                setHomeScore(homeScore + 3);
                break;
            case 'awayButtons__touchdown':
                setAwayScore(awayScore + 6);
                break;
            case 'awayButtons__fieldGoal':
                setAwayScore(awayScore + 3);
                break;
            case 'quarterButton':
                setQuarter(quarter + 1);
                break;
            default:
                break;
        }
    }

    return (
        <div className="container">
            <section className="scoreboard">
                <div className="topRow">
                    <div className="home">
                        <h2 className="home__name">Lions</h2>
                        <div className="home__score">{homeScore}</div>
                    </div>
                    <div className="timer">00:03</div>
                    <div className="away">
                        <h2 className="away__name">Tigers</h2>
                        <div className="away__score">{awayScore}</div>
                    </div>
                </div>
                <BottomRow quarter={quarter}/>
            </section>
            <Buttons clickHandler={clickHandler}/>
        </div>
    );
}

export default App;
