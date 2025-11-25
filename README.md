# Les Hooks

| Étape          | État du composant    | Effets exécutés                                       |
| -------------- | -------------------- | ----------------------------------------------------- |
| 🟢 Montage     | Rendu initial        | `useEffect(..., [])` exécuté                          |
| 🟡 Mise à jour | State/props changent | Nettoyage de l’effet précédent → nouvel effet exécuté |
| 🔴 Démontage   | Retrait du DOM       | Nettoyage final exécuté                               |


# 🧪 3. Trois cas possibles de dépendances

🟢 Cas 1 – Sans dépendances → exécution à chaque rendu
➡️ Ce code s’exécutera à chaque fois que le composant est rendu,
c’est-à-dire : au montage et à chaque changement d’état.

⚠️ Peu utilisé seul — il peut créer des boucles infinies si tu modifies un state dedans.

🟡 Cas 2 – Tableau vide [] → exécution une seule fois (au montage)
S’exécute une seule fois, quand le composant est ajouté au DOM.
C’est parfait pour :

  Appeler une API au chargement
  Démarrer un timer
  Lire une donnée du localStorage

🔵 Cas 3 – Avec dépendances [variable]
➡️ L’effet s’exécute :

au montage
puis à chaque fois que compteur change
