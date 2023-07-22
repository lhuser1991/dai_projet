package com.example.daiprojetback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.daiprojetback.exception.RessourceNotFoundException;
import com.example.daiprojetback.model.Produit;
import com.example.daiprojetback.model.Univers;
import com.example.daiprojetback.repository.ProduitRepository;
import com.example.daiprojetback.repository.UniversRepository;

@RestController
@RequestMapping("/api/v1/daiprojet")
@CrossOrigin(origins = "http://localhost:4200")
public class ProduitController {
    
    @Autowired
    private ProduitRepository produitRepository;

    @Autowired
    private UniversRepository universRepository;

    @GetMapping("/produits")
    public List<Produit> getAllProduits() {
        return produitRepository.findAll();
    }

    @GetMapping("/produits-active")
    public List<Produit> getAllProduitsActive() {
        return produitRepository.findProduitsActive();
    }

    @GetMapping("/produits-active/{idUnivers}")
    public List<Produit> getAllProduitsByLicence(@PathVariable Integer idUnivers) {
        return produitRepository.findProduitsByLicence(idUnivers);
    }

    @GetMapping("/produits/{id}")
    public ResponseEntity<Produit> getProduitsById(@PathVariable Integer id) {
        Produit produit = produitRepository.findById(id).orElseThrow(() -> new RessourceNotFoundException("Le produit n'existe pas pour l\'id : " + id));
        return ResponseEntity.ok(produit);
    }

    @PostMapping("/produits")
    public Produit createProduit(@RequestBody Produit produit) {
        Produit newProduit = new Produit();
        Univers newUnivers = universRepository.findById(produit.getId_univers()).orElseThrow(() -> new RessourceNotFoundException("L\'univers n'existe pas pour l\'id : " + produit.getId_univers()));

        newProduit.setTitre(produit.getTitre());
        newProduit.setPrix(produit.getPrix());
        newProduit.setLien_img(produit.getLien_img());
        newProduit.setStock(produit.getStock());
        newProduit.setActif(produit.getActif());
        newProduit.setDescription(produit.getDescription());
        newProduit.setAuteur(produit.getAuteur());
        newProduit.setEditeur(produit.getEditeur());
        newProduit.setNb_pge(produit.getNb_pge());
        newProduit.setId_univers(newUnivers.getId());
        newProduit.setListCategoriser(produit.getListCategoriser());
        newProduit.setUnivers(newUnivers);

        return produitRepository.save(newProduit);
    }

    @PutMapping("/produits/{id}")
    public ResponseEntity<Produit> updateProduit(@PathVariable Integer id, @RequestBody Produit produitData) {
        Produit produit = produitRepository.findById(id).orElseThrow(() -> new RessourceNotFoundException("Le produit n'existe pas pour l\'id : " + id));
        Univers univers = universRepository.findById(produitData.getId_univers()).orElseThrow(() -> new RessourceNotFoundException("L\'univers n'existe pas pour l\'id : " + produitData.getId_univers()));

        produit.setTitre(produitData.getTitre());
        produit.setPrix(produitData.getPrix());
        produit.setLien_img(produitData.getLien_img());
        produit.setStock(produitData.getStock());
        produit.setActif(produitData.getActif());
        produit.setDescription(produitData.getDescription());
        produit.setAuteur(produitData.getAuteur());
        produit.setEditeur(produitData.getEditeur());
        produit.setNb_pge(produitData.getNb_pge());
        produit.setId_univers(univers.getId());
        produit.setListCategoriser(produitData.getListCategoriser());
        produit.setUnivers(univers);

        Produit updatedProduit = produitRepository.save(produit);
        return ResponseEntity.ok(updatedProduit);
    }
}
