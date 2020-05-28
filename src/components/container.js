
import React, { Component } from 'react';
import QuoteButton from './new-quote';
import Quote from './quote';
import Author from './author';
import TweetButton from './tweet-quote';

class ContainerQuote extends Component {
    constructor(props){
        super(props);
        this.state = {
            citas: [],
           quote : '' ,
           autor: '',
           indice: 0
        }
    }
    componentDidMount = () =>{
        fetch('https://type.fit/api/quotes')
        .then(response=> response.json())
        .then(data=> {
            
            this.setState({
                citas:data,
                quote:data[0].text,
                autor:data[0].author
                
            })
           
        });
    }
    prueba = () => {
             this.setState({
                 indice: this.state.indice + 1, 
                quote: this.state.citas[this.state.indice].text,
                autor: this.state.citas[this.state.indice].author
             })
    }
     render () {
        return (
            <div id="quote-box">
                  <Quote frase= {this.state.quote}>
                  </Quote>
  
                  <Author autor = {this.state.autor}></Author>
  
                  <QuoteButton text={this.prueba}></QuoteButton>
  
                  <TweetButton></TweetButton>
                  
            </div>
              
     )}
  
     }
   


export default ContainerQuote; 