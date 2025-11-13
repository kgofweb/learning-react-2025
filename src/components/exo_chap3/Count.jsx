// Import useState de React
import { useState } from "react"

export default function Count() {
   // Init state to 0
   const [count, setCount] = useState(0)

   // Incrémentation
   const increment = () => {setCount(count + 1)} 

   // On vas verifier avant de décrémenter
   const decrement = () => {
      count > 0 ? setCount(count - 1) : ''
   }
   // Réinitialiser
   const reinitialiser = () => {setCount(0)}

  return (
    <div style={styles.container}>
      <h2>Compteur React </h2>

      <div style={styles.buttons}>
         <button onClick={increment}>Incrémenter +1</button> 
         <button onClick={decrement} disabled={count === 0}>
            Décrémenter -1
         </button> 
         <button onClick={reinitialiser} disabled={count === 0}>
            Réinitialiser 🔄
         </button>
      </div>
      
      Count : {count}
    </div>
  )
}

// Style CSS
const styles = {
   container : {
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
   },
   buttons : {
      display: "flex",
      justifyContent: "center",
      gap: '10px'
   }
}
