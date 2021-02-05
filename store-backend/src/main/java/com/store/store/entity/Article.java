package com.store.store.entity;


import lombok.*;

import javax.persistence.*;

@Entity @Table
@Data @NoArgsConstructor @AllArgsConstructor
public class Article {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private float prix;

    private boolean availability;

    private String urlImag;

}
