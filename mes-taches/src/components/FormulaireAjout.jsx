import { useState } from 'react'

function FormulaireAjout({ onAjouter }) {
  const [titre, setTitre] = useState('')

  function gererSoumission(event) {
    event.preventDefault()
    // À compléter :
    const titreNettoye = titre.trim()
    if(titreNettoye.length===0) return
    onAjouter(titreNettoye)
    setTitre('')
  }

  return (
    <form className="formulaire" onSubmit={gererSoumission}>
      <input
        type="text"
        value={titre}
        onChange={(event) => setTitre(event.target.value)}
        placeholder="Ex. : Réviser les hooks"
      />
      <button disabled={titre.trim().length===0} type="submit" className="principal">Ajouter</button>
    </form>
  )
}

export default FormulaireAjout