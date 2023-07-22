package com.example.daiprojetback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.daiprojetback.model.Univers;

import java.lang.Integer;

public interface UniversRepository extends JpaRepository<Univers, Integer>{
    
}
