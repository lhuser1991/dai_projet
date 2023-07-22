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
import com.example.daiprojetback.model.Categorie;
import com.example.daiprojetback.repository.CategorieRepository;

@RestController
@RequestMapping("/api/v1/daiprojet")
@CrossOrigin(origins = "http://localhost:4200")
public class CategorieController {
    
    @Autowired
    private CategorieRepository categorieRepository;

    @GetMapping("/categories")
    public List<Categorie> getAllCategorie() {
        return categorieRepository.findAll(); 
    }

    @GetMapping("/categories-associes/{id}")
    public List<Categorie> getAllCategoriesAssocies(@PathVariable Integer id) {
        return categorieRepository.getCategorieOfProduits(id);
    }

    @GetMapping("/categories/{id}")
    public ResponseEntity<Categorie> getCategorieById(@PathVariable Integer id) {
        Categorie categorie = categorieRepository.findById(id).orElseThrow(() -> new RessourceNotFoundException("La categorie n'existe pas pour l\'id : "+id));
        return ResponseEntity.ok(categorie);
    }

    @PostMapping("/categories")
    public Categorie createCategorie(@RequestBody Categorie categorie) {
        return categorieRepository.save(categorie);
    }


    @PutMapping("/categories/{id}")
    public ResponseEntity<Categorie> updateCategorie(@PathVariable Integer id, @RequestBody Categorie categorieData) {
        Categorie categorie = categorieRepository.findById(id).orElseThrow(() -> new RessourceNotFoundException("La categorie n'existe pas pour l\'id : "+id));

        categorie.setNom_categorie(categorieData.getNom_categorie());
        categorie.setListCategoriser(categorieData.getListCategoriser());

        Categorie updatedCategorie = categorieRepository.save(categorie);
        return ResponseEntity.ok(updatedCategorie);
    }

}
