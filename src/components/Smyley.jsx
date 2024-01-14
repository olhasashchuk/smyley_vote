import { Component } from "react";

export class Smyley extends Component {
    render() {
        const { smiley, setVote } = this.props;

        return (
            <li className="smiley__item">
                <img src={smiley.src} alt="Smiley" onClick={() => setVote(smiley.id)} />
                <span>Vote: {smiley.vote}</span>
            </li>
        );
    }
}

