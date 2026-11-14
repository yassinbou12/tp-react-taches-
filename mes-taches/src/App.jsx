import Entete from "./components/Entete"
import ListeTaches from "./components/ListeTaches"
import Pied from "./components/Pied"
import Carte from "./components/Carte"
import Compteur from "./components/Compteur"
import FormulaireAjout from "./components/FormulaireAjout"
import Filtres from "./components/Filtres"
import Statistiques from "./components/Statistiques"

import { useState } from "react"

const TACHES_INITIALES = [
  { id: 1, titre: 'Installer Node.js et Vite', terminee: true },
  { id: 2, titre: 'Comprendre les composants', terminee: true },
  { id: 3, titre: 'Passer des données avec les props', terminee: false },
  { id: 4, titre: "Gérer l'état avec useState", terminee: false },
]

function App() {
  const [taches, setTaches] = useState(TACHES_INITIALES)
  const [filtre,setFiltre] = useState("toutes")
  const tachesVisibles = taches.filter((tache) => {
    if (filtre === 'actives') return !tache.terminee     // Garde les non terminées
    if (filtre === 'terminees') return tache.terminee   // Garde les terminées
    return true                                         // 'toutes' : garde tout
  })
  function basculerTache(id) {
    setTaches(
      taches.map((tache) =>
        tache.id === id ? { ...tache, terminee: !tache.terminee } : tache,
      ),
    )
  }

  function supprimerTache(id) {
    setTaches(taches.filter((tache) =>
      id !== tache.id
    )
    )
  }
  function ajouterTache(titre) {
    const NouvelleTache = { id: Date.now(),
                            titre : titre,
                            terminee: false }
    setTaches([...taches, NouvelleTache])
  }
  return (
    <div className="app">
      <Entete titre="Mes tâches" sousTitre="Mon premier projet React" />
      <Carte titre="Ma liste">
        <Filtres filtre={filtre} onChanger={setFiltre} />
        <ListeTaches taches={tachesVisibles} onBasculer={basculerTache} onSupprimer={supprimerTache} />
      </Carte>
      <Carte titre="Nouvelle tâche">
        <FormulaireAjout onAjouter={ajouterTache} />
      </Carte>
      <Carte titre="Statistiques">
        <Statistiques taches={taches} />
      </Carte>
      <Carte titre="Compteur">
        <Compteur />
      </Carte>
      <Pied auteur="yassin bouougrou" />

    </div>
  )
}

export default App