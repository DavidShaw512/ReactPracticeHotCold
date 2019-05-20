import React from 'react'

export default function GuessForm(props) {
    return (
        <form>
            <label htmlFor="guess">Your Guess:</label>
            <input id="guess" name="guess" type="number" min={1} max={100} 
                onChange={e => props.onChange(e.target.value)}/>
        </form>

    )
}