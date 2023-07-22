import { Categoriser } from "./categoriser";
import { Univers } from "./univers";

export class Produits {
    id: number = 0;
    titre: string = "";
    prix: number = 0;
    lien_img: string = "";
    stock: number = 0;
    actif: boolean = true;
    description: string = "";
    auteur: string = "";
    editeur: string = "";
    nb_pge: number = 0;
    id_univers: number = 0;
    listCategoriser: Categoriser[] = [];
    univers: Univers = new Univers();
}
