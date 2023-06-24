Bonjour, dans ce projet j'ai réalisé un site ecommerce. La liste des produits du site ecommerce sont appelée depuis le compte de Stripe dont j'ai auparavant injecter tout la liste des produits du site ecommerce à laide de la ligne de commande et des fichiers que j'ai créer.
J'ai créer un context à l'aide du hook "useContext" de React, pour pouvoir gérer l'ajout et suppression du panier.
J'aai mis en place un système de paiement, avec Stripe, renvoyant vers une page de succès, affichant l'ID du numéro de commande mais également le récapitulatif de la commande et de l'adresse de livraison.




* ******************* PROCÉDURE : *******************
// Call products
Call products from Stripe but not from MongoDB
// Gestion de panier (ajout/suppression produits)
With "UseContext"
// Paiement
Stripe avec redirection Page "Succès"


***
***
***

Listes d'autres Applications Ecommerce avec Next JS, réalisé :

1. (Folder Github Private)<br/>
   CRUD - Avec la gestion d'ajout/suppression au panier sans "useContext" mais via un "use-shopping-cart" & sans "MongoDB" & paiement via Stripe.<br/>
   Link Website :
   Link Github :
2. (Folder Github Private)
   CRUD - Avec la gestion d'ajout/suppression au panier via un "useContext" & avec "MongoDB".
   Link Website :
   Link Github :
