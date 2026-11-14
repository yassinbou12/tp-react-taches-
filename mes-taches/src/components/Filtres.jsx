function Filtre({filtre,onChanger}){
   const options = [{ valeur: 'toutes', libelle: 'Toutes' },
                    { valeur: 'actives', libelle: 'Actives' },
                    {valeur: 'terminees', libelle: 'Terminées' }]
    return(
        <div className="filtres">
            {options.map(option =>(
                <button onClick={()=>onChanger(option.valeur)}
                        key={option.valeur}
                        className={option.valeur===filtre ? "actif" : ""}

                >
                            {option.libelle}
                </button>
            ))}
        </div>
    )
    
}

export default Filtre