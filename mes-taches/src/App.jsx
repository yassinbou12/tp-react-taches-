import Entete from "./components/Entete"
import ListeTaches from "./components/ListeTaches"
import Pied from "./components/Pied"
import Carte from "./components/Carte"

const TACHES = [
  { id: 1, titre: 'Installer Node.js et Vite', terminee: true },
  { id: 2, titre: 'Comprendre les composants', terminee: true },
  { id: 3, titre: 'Passer des données avec les props', terminee: false },
  { id: 4, titre: "Gérer l'état avec useState", terminee: false },
]

function App() {
  return (
    <div className="app">
      <Entete titre="Mes tâches" sousTitre="Mon premier projet React"/>
      <Carte titre="Ma liste">
        <ListeTaches taches={TACHES}/>
      </Carte>
      <Pied auteur="yassin bouougrou"/>
    </div>
  )
}

export default App