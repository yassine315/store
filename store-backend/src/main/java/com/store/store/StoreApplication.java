package com.store.store;

import com.store.store.entity.Article;
import com.store.store.jpa.JpaArticle;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class StoreApplication {

    private JpaArticle jpaArticle;

    public StoreApplication(JpaArticle jpaArticle){
        this.jpaArticle = jpaArticle;
    }

    public static void main(String[] args) {
        SpringApplication.run(StoreApplication.class, args);
    }

    @Bean
    public CommandLineRunner start(){
        return args -> {
            jpaArticle.save(new Article());
        };
    }


}
