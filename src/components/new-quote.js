import React from 'react';

const QuoteButton = (props) =>{
   return (
        <button id="new-quote" name="quote-button" onClick={props.text}>New Quote</button>
   )}

export default QuoteButton; 