function ListeTaches(){
    return(
        <ul className="liste-taches">
            <li className="tache">
                <span className="titre">Comprendre les composants</span>
            </li>
            <li className="tache terminee">
                <span className="titre">Installer Node.js et Vite</span>
            </li>
            <li className="tache">
                <span className="titre">Découvrir les props et l'état</span>
            </li>
        </ul>
    )
}

export default ListeTaches