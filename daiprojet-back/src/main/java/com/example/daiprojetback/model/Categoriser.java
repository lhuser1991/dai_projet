package com.example.daiprojetback.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "categoriser")
@IdClass(CategoriserId.class)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Categoriser {
    
    @Id
    private int id_produit;

    @Id
    private int id_categorie;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_produit", referencedColumnName = "id", insertable = false, updatable = false)
    private Produit produit;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_categorie", referencedColumnName = "id", insertable = false, updatable = false)
    private Categorie categorie;

}
