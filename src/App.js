import './App.css';
import Jatekter from './components/Jatekter';
import { useState } from 'react'

function App() {
  const [boolList, lampaValt] = useState(randomList(9));

  function katt(adat){
    const ujBoolList = [...boolList] // a ... által ÚJ másolatot készít a memóriában!
    
    if(ujBoolList[adat] === true){
      ujBoolList[adat] = false
    }else{
      ujBoolList[adat] = true
    }
    console.log(ujBoolList[adat])
    lampaValt(ujBoolList)
}

  function randomList(mennyiseg){
    let lista = []
    for (let index = 0; index < mennyiseg; index++) {
      const randomSzam = Math.floor(Math.random() * 2 - 1) + 2;
      if(randomSzam % 2 === 0){
        lista[index] = true
      }else{
        lista[index] = false
      }
    }
    
    return lista
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>LightOn</h1>
      </header>
      <main>
        <article>
          <Jatekter lista = {boolList} katt = {katt}/>
        </article>
      </main>
    </div>
  );
}

export default App;
