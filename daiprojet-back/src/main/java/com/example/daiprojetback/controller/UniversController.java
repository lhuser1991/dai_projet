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
import com.example.daiprojetback.model.Univers;
import com.example.daiprojetback.repository.UniversRepository;

@RestController
@RequestMapping("/api/v1/daiprojet")
@CrossOrigin(origins = "http://localhost:4200")
public class UniversController {
    
    @Autowired
    private UniversRepository universRepository;

    @GetMapping("/univers")
    public List<Univers> getAllUnivers() {
        return universRepository.findAll();
    }

    @PostMapping("/univers")
    public Univers createUnivers(@RequestBody Univers univers) {
        return universRepository.save(univers);
    }

    @GetMapping("/univers/{id}")
    public ResponseEntity<Univers> getUniversById(@PathVariable Integer id) {
        Univers univers = universRepository.findById(id).orElseThrow(() -> new RessourceNotFoundException("L\'univers n'existe pas pour l\'id : "+id));
        return ResponseEntity.ok(univers);
    }

    @PutMapping("/univers/{id}")
    public ResponseEntity<Univers> updateUnivers(@PathVariable Integer id, @RequestBody Univers universData) {
        Univers univers = universRepository.findById(id).orElseThrow(() -> new RessourceNotFoundException("L\'univers n'existe pas pour l\'id : "+id));

        univers.setNom_univers(universData.getNom_univers());
        univers.setListProduit(universData.getListProduit());

        Univers updatedUnivers = universRepository.save(univers);
        return ResponseEntity.ok(updatedUnivers);
    }

}
