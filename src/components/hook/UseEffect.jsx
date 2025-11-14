import { useState, useEffect } from "react"

export default function UseEffect() {
   const [count, setCount] = useState(0)

   const addOne = () => { setCount(count + 1) }

   // Afficher dans la console "Bienvenue" 
   useEffect(() => {
      console.log('Salut les gens');
   }, []) // Tableau vide = l"effet est slmt appliquer au chargement de la page!! 1fois

   // Suivre un compteur
   // Ici, à chaque clic, React met à jour count,et le useEffect détecte ce changement → exécute le console.log
   useEffect(() => {
      console.log(`Vous avez clické ${count}`)

      // Netoyage
      return () => console.log("🧹 Nettoyage avant le prochain rendu ou démontage")
   }, [count]) // l"effet est exécuter à chaque fois que le state "count" change

  return (
   <>
      <p> {count} </p>
      <button onClick={addOne} >Click +1</button>
   </>
  )
}
