import React from 'react'

import GuessForm from './GuessForm'
import Feedback from './Feedback'



export default class HotColdGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetNumber: 50,
            currentGuess: '',
            message: 'Feedback'
        }
    }

    setMessage(guess) {
        if (guess === this.state.targetNumber) {
            this.setState({
                message: "You got it! Try again?"
            })
        }
        else if (guess - 10 < this.state.targetNumber && guess + 10 > this.state.targetNumber) {
            this.setState({
                message: "Hot"
            })
        }
        else {
            console.log(guess)
            this.setState({
                message: guess + " is Cold"
            })
        }
    }

    render() {
        // const message = function() {
        //     if (this.state.currentGuess === this.state.targetNumber) {
        //         return ("You got it! Try again?")
        //     }
        //     else if (this.state.currentGuess - 10 < this.state.targetNumber && this.state.currentGuess + 10 > this.state.targetNumber) {
        //         return ("Hot")
        //     }
        //     else {
        //         return ("Cold")
        //     }
        // }
        
        return (
            <div className="HotColdGame">
                <h1>Hot or Cold?</h1>
                <p>Guess the target number!</p>
                <GuessForm className="gameInput" onChange={currentGuess => {
                    this.setState(currentGuess);
                    this.setMessage(currentGuess);
                    }} />
                <Feedback message={this.state.message}/>

            </div>
        )
    }
}