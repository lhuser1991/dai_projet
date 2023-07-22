package com.example.daiprojetback.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.daiprojetback.exception.RessourceNotFoundException;
import com.example.daiprojetback.model.Categorie;
import com.example.daiprojetback.model.Categoriser;
import com.example.daiprojetback.model.CategoriserId;
import com.example.daiprojetback.model.Produit;
import com.example.daiprojetback.repository.CategorieRepository;
import com.example.daiprojetback.repository.CategoriserRepository;
import com.example.daiprojetback.repository.ProduitRepository;

@RestController
@RequestMapping("/api/v1/daiprojet")
@CrossOrigin(origins = "http://localhost:4200")
public class CategoriserController {
    
    @Autowired
    private CategoriserRepository categoriserRepository;

    @Autowired
    private CategorieRepository categorieRepository;

    @Autowired
    private ProduitRepository produitRepository;

    @GetMapping("/categoriser")
    public List<Categoriser> getAllCategoriser() {
        return this.categoriserRepository.findAll();
    }

    @GetMapping("/categoriser/{id_produit}/{id_categorie}")
    public ResponseEntity<Categoriser> getCategoriserById(@PathVariable Integer id_produit, @PathVariable Integer id_categorie) {
        CategoriserId categoriserId = new CategoriserId(id_produit, id_categorie);
        Optional<Categoriser> categoriser = categoriserRepository.findById(categoriserId);
        if(categoriser.isPresent()) {
            return ResponseEntity.ok(categoriser.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/categoriser/{id_produit}")
    public Categoriser createCategoriser(@PathVariable int id_produit, @RequestBody Categoriser categoriser) {
        Categoriser newCategoriser = new Categoriser();
        Produit produit = produitRepository.findById(id_produit).orElseThrow(() -> new RessourceNotFoundException("Le produit n'existe pas pour l\'id : "+id_produit));
        
        newCategoriser.setId_produit(produit.getId());
        newCategoriser.setId_categorie(categoriser.getId_categorie());
        newCategoriser.setProduit(produit);
        newCategoriser.setCategorie(categoriser.getCategorie());

        return categoriserRepository.save(newCategoriser);
    }
}
