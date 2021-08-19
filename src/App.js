import React, { useState } from 'react'
import { question } from './data.js'
import './style.css';
import twitter from './twitter.png';

export const App = () => {

  const [randomQuotes, setRandomQuotes] = useState("");
  const [color, setColor] = useState("ffdf00")


  console.log(color)
  const getNewQuote = () => {

    const colorsArr = ['#4FC1FF', "#E8B9AB", '#CB769E', '#69995D', '#D2D7DF', '#3AA7A3', '#ECA400', '#006992', '#AFECE7', '#81F499', '#890620', '#B6465F', '#8ACDEA']

    let randColor = Math.round(Math.random() * colorsArr.length);
    setColor(colorsArr[randColor]);
    //console.log(colorsArr[randColor])

    let randIndex = Math.round(Math.random() * question.length);
    setRandomQuotes(question[randIndex]);
    //console.log(question[randIndex])
  }


  return (

    <div id="main-contenedor" style={{ background: color, minHeight: "100vh" }}>
      <div id="quote-box">
        {randomQuotes ? (
          <>

            <h1 id="text" style={{ color: color}}>{randomQuotes.quote}</h1>
            <p id="author"  style={{ color: color}}>- {randomQuotes.author}</p>
          </>
        ) : (
          <h2>Loading....</h2>
        )}

        <div id="new-quote">
          <button onClick={getNewQuote} style={{ background: color}}>New quote</button>
            
          {
            randomQuotes ? (
              <>
              <a style={{ background: color}} href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
               randomQuotes.quote + "-" + randomQuotes.author)}`} id="tweet-quote"><img src={twitter}/></a>
              </>

            ):(
              <>
              <a style={{ background: color}} href='https://twitter.com' id="tweet-quote"><img src={twitter}/></a>
              </>
            )}
          
          

        </div>


      </div>

    </div>
  )
}


