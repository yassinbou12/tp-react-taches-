import Entete from "./components/Entete";
import ListeTaches from "./components/ListeTaches";
import Pied from "./components/Pied";
import Carte from "./components/Carte";
import Compteur from "./components/Compteur";
import FormulaireAjout from "./components/FormulaireAjout";
import Filtres from "./components/Filtres";
import Statistiques from "./components/Statistiques";
import Horloge from "./components/Horloge";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [taches, setTaches] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [filtre, setFiltre] = useState("toutes");
  const tachesVisibles = taches.filter((tache) => {
    if (filtre === "actives") return !tache.terminee; // Garde les non terminées
    if (filtre === "terminees") return tache.terminee; // Garde les terminées
    return true; // 'toutes' : garde tout
  });
  const tachesRestants = taches.filter((tache)=> !tache.terminee).length

  useEffect(()=>{
    document.title = `(${tachesRestants}) Mes tâches`
  },[tachesRestants])

  useEffect(() => {
    let annule = false;

    fetch("/taches.json")
      .then((reponse) => {
        if (!reponse.ok) throw new Error(`Erreur HTTP ${reponse.status}`);
        return reponse.json();
      })
      .then((donnees) => {
        if (!annule) setTaches(donnees);
      })
      .catch((err) => {
        if (!annule) setErreur(err.message);
      })
      .finally(() => {
        if (!annule) setChargement(false);
      });

    return () => {
      annule = true;
    };
  }, []);
  function basculerTache(id) {
    setTaches(
      taches.map((tache) =>
        tache.id === id ? { ...tache, terminee: !tache.terminee } : tache,
      ),
    );
  }

  function supprimerTache(id) {
    setTaches(taches.filter((tache) => id !== tache.id));
  }
  function ajouterTache(titre) {
    const NouvelleTache = { id: Date.now(), titre: titre, terminee: false };
    setTaches([...taches, NouvelleTache]);
  }
  return (
    <div className="app">
      <Entete titre="Mes tâches" sousTitre="Mon premier projet React" />
      <Carte titre="Ma liste">
        {chargement && <p className="vide" >Chargement des tâches…</p>}
        {erreur && <p className="erreur" >{erreur}</p>}
        
        <Filtres filtre={filtre} onChanger={setFiltre} />
        <ListeTaches
          taches={tachesVisibles}
          onBasculer={basculerTache}
          onSupprimer={supprimerTache}
        />
      </Carte>
      <Carte titre="Nouvelle tâche">
        <FormulaireAjout onAjouter={ajouterTache} />
      </Carte>
      <Carte titre="Heure actuelle">
        <Horloge />
      </Carte>
      <Carte titre="Statistiques">
        <Statistiques taches={taches} />
      </Carte>
      <Carte titre="Compteur">
        <Compteur />
      </Carte>
      <Pied auteur="yassin bouougrou" />
    </div>
  );
}

export default App;
