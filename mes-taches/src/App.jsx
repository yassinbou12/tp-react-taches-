import Entete from "./components/Entete"
import ListeTaches from "./components/ListeTaches"
import Pied from "./components/Pied"
function App() {
  return (
    <div className="app">
      <Entete/>
      <section className="carte">
        <h2>Ma liste</h2>
        <ListeTaches />
      </section>
      <Pied/>
    </div>
  )
}

export default App