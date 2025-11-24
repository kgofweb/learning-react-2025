# Les Hooks

| Étape          | État du composant    | Effets exécutés                                       |
| -------------- | -------------------- | ----------------------------------------------------- |
| 🟢 Montage     | Rendu initial        | `useEffect(..., [])` exécuté                          |
| 🟡 Mise à jour | State/props changent | Nettoyage de l’effet précédent → nouvel effet exécuté |
| 🔴 Démontage   | Retrait du DOM       | Nettoyage final exécuté                               |



