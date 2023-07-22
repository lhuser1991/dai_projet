package com.example.daiprojetback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.daiprojetback.model.Produit;

import java.lang.Integer;
import java.util.List;

public interface ProduitRepository extends JpaRepository<Produit, Integer>{
    @Query(value = "SELECT produits.id, titre, prix, lien_img, stock, actif, description, auteur, editeur, nb_pge, id_univers FROM produits WHERE actif = 1;", nativeQuery = true)
    public List<Produit> findProduitsActive();

    @Query(value = "SELECT produits.id, titre, prix, lien_img, stock, actif, description, auteur, editeur, nb_pge, id_univers FROM produits LEFT JOIN univers ON produits.id_univers = univers.id WHERE univers.id = :idUnivers AND actif = 1;", nativeQuery = true)
    public List<Produit> findProduitsByLicence(@Param("idUnivers") Integer idUnivers);
    
}
