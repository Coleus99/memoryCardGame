import './App.css';
import { useState, useEffect } from "react";
import Score from './components/score';

function App(){
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardData, setCardData] = useState(null);
  const [clicked, setClicked] = useState([])

  useEffect(() => {
      fetch('https://api.scryfall.com/cards/search?q=cmc%3D10', {mode: 'cors'})
      .then(results => results.json())
      .then(data => {
        setCardData(data);
      })
  }, []);

  let selected
  function pickCard(range){
    let choices=[];
    while(choices.length<3){
      let pick = parseInt(Math.random()*range)
      if(choices.indexOf(pick)<0){
        choices.push(pick);
      }
    }
    selected = choices.map(choice => {   
      return (
        <div className="col-sm-4" key={choice}>
           <img onClick={cardClick} id={choice} src={!cardData ? 'Loading...' : `${cardData.data[choice].image_uris.normal}`} alt={!cardData ? 'Loading...' : `${cardData.data[choice].name}`}/>
          {/* <Card data={!cardData ? 'Loading...' :cardData.data[choice]} /> */}
        </div>
      )
    })
  }

  pickCard(35)

  function cardClick(e){
    if(clicked.indexOf(e.target.id)<0){
      setClicked(clicked => [...clicked, e.target.id]);
      setCurrentScore(currentScore +1)
    }
    else {
      if(currentScore>bestScore){
        setBestScore(currentScore);
      }
      setCurrentScore(0)
      setClicked(clicked => [])
    }
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <p>Click a unique card each time. How many can you click in a row?</p>
      <Score current={currentScore} best={bestScore} />
      <div className="row">
      {selected}
      </div>
    </div>
  );
}

export default App;
