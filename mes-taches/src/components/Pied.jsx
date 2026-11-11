const ANNEE = new Date().getFullYear()
function Pied({auteur }){
    return (
        <footer className="pied">
            <p> « TP React – realise par {auteur} - {ANNEE} »</p>
        </footer>
    )
}
export default Pied