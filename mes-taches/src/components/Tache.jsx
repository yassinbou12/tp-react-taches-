function Tache({id,titre,terminee,onBasculer,onSupprimer}){
    return(
        <li className={terminee ? "tache terminee":"tache"}>
            <label className="titre">
                <input 
                    type="checkbox" 
                    checked={terminee} 
                    onChange={() => onBasculer(id)} 
                />
                <span>{titre}</span>
            </label>
            <button 
                className="danger" 
                onClick={() => onSupprimer(id)}
            >
                Supprimer
            </button>
        </li>
    )
}
export default Tache