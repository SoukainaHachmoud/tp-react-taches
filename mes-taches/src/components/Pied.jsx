const ANNEE = new Date().getFullYear()

function Pied() {
  return (
    <footer className="pied">
      <p>TP React – {ANNEE}</p>
    </footer>
  )
}

export default Pied