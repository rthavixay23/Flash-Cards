import React, {Component} from 'react';
import './App.css';
import Card from './Card/Card';


import logo from './logo.svg';
import './App.css';


// extends -> extends a class(indicates class is inherited from another class)
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      cards: [
        {id: 1, eng: "English", han: "Hanzi", pin: "Pinyin"},
        {id: 2, eng: "English_2", han: "Hanzi_2", pin: "Pinyin_2"},"}
      ],
      currentCard: {}
    }
  }

  componentWillMount(){
  }

  render() {
    return(
      <div className='App'>
        <Card />

      </div>
    )
  }
}


export default App;
