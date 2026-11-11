import { useState } from 'react'

function FormulaireAjout({ onAjouter }) {
  const [titre, setTitre] = useState('')

  function gererSoumission(event) {
    event.preventDefault()
    if (titre.trim() === '') return
    onAjouter(titre.trim())
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
      <button
        type="submit"
        className="principal"
        disabled={titre.trim() === ''}
      >
        Ajouter
      </button>
    </form>
  )
}

export default FormulaireAjout