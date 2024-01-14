import { Component } from "react";
import { Button } from "./Button.jsx";

export class ResultVote extends Component {
    render () {
        const { setWinner, winner, resetVote } = this.props;
        return (
            <div className="result_wrapper">
                <Button className="btn-primary" onClick={setWinner}>Show Result</Button>
                    <div>
                        <h2>Result of the vote</h2>
                        {winner.map((win) => (
                            <div key={win.id} className="smiley__item">
                                <img src={win.src} alt="Smiley"/>
                                <span>Vote: {win.vote}</span>
                            </div>
                        ))}
                    </div>
                <Button className="btn-primary" onClick={resetVote}>Reset Vote</Button>
            </div>
        )
    }
}
