// Exemple 3 – Ajouter un minuteur (timer)
import { useEffect } from 'react'

export default function Timer() {

   // setInterval() crée un timer au montage du composant
   // clearInterval() l’arrête quand le composant est retiré du DOM
   // ➡️ Ce mécanisme de “nettoyage” est crucial pour éviter les fuites mémoire.
   useEffect(() => {
      const timer = setInterval(() => {
         console.log("⏱ Une seconde s’est écoulée !");
      }, 1000)

      // Nettoyage pour éviter que le timer ne continue de tourner apres le montage du component
      return () => {
         clearInterval(timer)
         console.log("🧹 Timer nettoyé !");
      } 
   }, []) // Tableau vide === On indique que l"effet se declanche slmt au chargement de notre composant

  return (
   <>
      <p>  </p>
   </>
  )
}
