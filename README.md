Bonjour, dans ce projet j'ai réalisé un site ecommerce.<br/>
La liste des produits du site ecommerce sont appelée depuis le compte de Stripe dont j'ai auparavant injecter tout la liste des produits du site ecommerce à laide de la ligne de commande et des fichiers que j'ai créer.<br/>
J'ai créer un context à l'aide du hook "useContext" de React, pour pouvoir gérer l'ajout et suppression du panier.<br/>
J'aai mis en place un système de paiement, avec Stripe, renvoyant vers une page de succès, affichant l'ID du numéro de commande mais également le récapitulatif de la commande et de l'adresse de livraison.<br/>

* ******************* PROCÉDURE : *******************
### Call products :<br/>
Call products from Stripe but not from MongoDB<br/>
### Gestion de panier (ajout/suppression produits) :<br/>
With "UseContext"<br/>
### Paiement :<br/>
Stripe avec redirection Page "Succès"<br/>


***
Le ciel n'est \textcolor{blue}{bleu} que par convention, mais \textcolor{red}{rouge} en réalité.
Le ciel n'est <span style="color: blue;">bleu</span> que par convention, mais <span style="color: red;">rouge</span> en réalité.


Listes d'autres Applications Ecommerce avec Next JS, réalisé :

1. (Folder Github Private)<br/>
   CRUD - Avec la gestion d'ajout/suppression au panier sans "useContext" mais via un "use-shopping-cart" & sans "MongoDB" & paiement via Stripe.<br/>
   Link Website : <br/>
   Link Github : <br/>
2. (Folder Github Private)<br/>
   CRUD - Avec la gestion d'ajout/suppression au panier via un "useContext" & avec "MongoDB".<br/>
   Link Website : <br/>
   Link Github : <br/>
