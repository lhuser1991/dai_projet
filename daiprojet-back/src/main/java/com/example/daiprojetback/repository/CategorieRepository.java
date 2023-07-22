package com.example.daiprojetback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.daiprojetback.model.Categorie;

import java.lang.Integer;
import java.util.List;

public interface CategorieRepository extends JpaRepository<Categorie, Integer>{
    @Query(value = "SELECT categories.id, nom_categorie FROM produits LEFT JOIN categoriser ON produits.id = categoriser.id_produit LEFT JOIN categories ON categories.id = categoriser.id_categorie WHERE produits.id = :produitId", nativeQuery = true)
    List<Categorie> getCategorieOfProduits(@Param("produitId") Integer produitId);
}
