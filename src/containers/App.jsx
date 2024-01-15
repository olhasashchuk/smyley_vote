import { Component } from "react";
import { Smyley } from "../components/Smyley.jsx";
import { ResultVote } from "../components/ResultVote.jsx";
import smyley1 from '../assets/smyley1.jpg';
import smyley2 from '../assets/smyley2.jpg';
import smyley3 from '../assets/smyley3.jpg';
import smyley4 from '../assets/smyley4.jpg';
import smyley5 from '../assets/smyley5.jpg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smileys: [
                { id: 1, src: smyley1, vote: 0 },
                { id: 2, src: smyley2, vote: 0 },
                { id: 3, src: smyley3, vote: 0 },
                { id: 4, src: smyley4, vote: 0 },
                { id: 5, src: smyley5, vote: 0 },
            ],
            winner: [],
        }
    }
    componentDidMount() {
        const currentWinner = localStorage.getItem('winner');
        this.setState({
            winner: currentWinner === null ? [] : JSON.parse(currentWinner),
        })
    }

    setVote = (smileyId) => {
        this.setState((prevState) => {
            const updatedSmileys = prevState.smileys.map((smiley) => {
                if (smiley.id === smileyId) {
                    return {
                        id: smiley.id,
                        src: smiley.src,
                        vote: smiley.vote + 1,
                    };
                } else {
                    return smiley;
                }
            });
            return {
                smileys: updatedSmileys,
            };
        });
    };

    setWinner = () => {
        const { smileys } = this.state;
        const maxVote = Math.max(...smileys.map((smiley) => smiley.vote));
        if (maxVote === 0) {
            alert('None of the smileys received vote');
            return;
        }
        const winner = smileys.filter((smiley) => smiley.vote === maxVote);
        localStorage.setItem('winner', JSON.stringify (winner))
        this.setState({ winner });
    };

    resetVote = () => {
        localStorage.removeItem('winner');
        this.setState({ winner: [] });
        this.setState((prevState) => {
            prevState.smileys.map((smiley) => smiley.vote=0) });

    };

    render() {
        const { smileys, winner } = this.state;

        return (
            <div className="container">
                <h1>Vote for the best smiley face</h1>
                <ul className="smiley__list">
                    {smileys.map((smiley) => (
                        <Smyley
                            key={smiley.id}
                            setVote={() => this.setVote(smiley.id)}
                            smiley={smiley}
                            src={smiley.src}
                        />
                    ))}
                </ul>
                <ResultVote
                    winner={winner}
                    setWinner={this.setWinner}
                    resetVote={this.resetVote}
                />
            </div>
        );
    }
}
export default App;
