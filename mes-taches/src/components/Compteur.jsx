import { useState } from 'react'

function Compteur() {
  const [valeur, setValeur] = useState(0)

  return (
    <>
      <p className="valeur-compteur">{valeur}</p>
      <div className="ligne">
        <button
          disabled={valeur === 0}
          onClick={() => setValeur(valeur - 1)}
        >
          −1
        </button>
        <button
          className="principal"
          onClick={() => setValeur(valeur + 1)}
        >
          +1
        </button>
        <button onClick={() => setValeur(0)}>
          Remettre à 0
        </button>
      </div>
    </>
  )
}

export default Compteur