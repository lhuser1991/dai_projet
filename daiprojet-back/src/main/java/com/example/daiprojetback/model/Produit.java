package com.example.daiprojetback.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "produits")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Produit {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "titre")
    private String titre;

    @Column(name = "prix")
    private float prix;

    @Column(name = "lien_img")
    private String lien_img;

    @Column(name = "stock")
    private int stock;

    @Column(name = "actif")
    private boolean actif;

    @Column(name = "description")
    private String description;

    @Column(name = "auteur")
    private String auteur;

    @Column(name = "editeur")
    private String editeur;

    @Column(name = "nb_pge")
    private int nb_pge;

    @Column(name = "id_univers")
    private int id_univers;

    @JsonIgnore
    @OneToMany(mappedBy = "produit")
    private List<Categoriser> listCategoriser;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_univers", referencedColumnName = "id", insertable = false, updatable = false)
    private Univers univers;

    public boolean getActif() {
        return this.actif;
    }
}
