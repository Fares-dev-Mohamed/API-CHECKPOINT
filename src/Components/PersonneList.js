import Personne from "./Personne"


const PersonneList = ({personnes}) => {
    return (
        <div className='List'>
        <h1>THIS IS THE LIST OF PERSSONNES</h1>
        <div className='personneList'>
            {personnes.map((el,i)=> <Personne personne={el} key={i}/>)}
        </div>
        </div>
    )
}
export default PersonneList