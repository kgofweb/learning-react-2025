# Les Hooks
    1. Phase de Montage du composant : Rendu initial = useEffect(..., []) exécuté
    2. Phase de Mise à jour du composant : State/props changent = Nettoyage de l’effet précédent → nouvel effet exécuté
    2. Phase de démontage du composant : Retrait du DOM = Nettoyage final exécuté


| Étape          | État du composant    | Effets exécutés                                       |
| -------------- | -------------------- | ----------------------------------------------------- |
| 🟢 Montage     | Rendu initial        | `useEffect(..., [])` exécuté                          |
| 🟡 Mise à jour | State/props changent | Nettoyage de l’effet précédent → nouvel effet exécuté |
| 🔴 Démontage   | Retrait du DOM       | Nettoyage final exécuté                               |



