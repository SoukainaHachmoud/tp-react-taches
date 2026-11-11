const ANNEE = new Date().getFullYear()

function Pied({ auteur }) {
  return (
    <footer className="pied">
      <p>TP React – réalisé par {auteur} – {ANNEE}</p>
    </footer>
  )
}

export default Pied