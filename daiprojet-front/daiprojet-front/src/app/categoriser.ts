import { Categories } from "./categories";
import { Produits } from "./produits";

export class Categoriser {
    id_produit: number = 0;
    id_categorie: number = 0;
    produits: Produits = new Produits();
    categories: Categories = new Categories();
}
