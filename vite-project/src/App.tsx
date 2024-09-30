import './App.css'
import Header from './components/Header'
import { Recipe } from './components/Recipe'
import {MyFooter} from './components/MyFooter'

function App() {
  return (
    <>
    <div>
      <Header></Header>
    </div>

    <div>
      <Recipe num={2}>
      </Recipe>
      <Recipe num={4}></Recipe>
      </div>
      
      <div>
        <MyFooter
          name={"Vida Margaréta"}
          date={"2024.09.30"}
          timeWasted={60}>
        </MyFooter>
    </div>
   </>
  )
}
  

export default App
