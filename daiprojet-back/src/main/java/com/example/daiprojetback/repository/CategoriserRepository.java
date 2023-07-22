package com.example.daiprojetback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.daiprojetback.model.Categoriser;
import com.example.daiprojetback.model.CategoriserId;

public interface CategoriserRepository extends JpaRepository<Categoriser, CategoriserId>{
    
}
