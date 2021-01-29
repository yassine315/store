package com.store.store.jpa;

import com.store.store.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;

@RestResource
public interface JpaArticle extends JpaRepository<Article, Long> {
}
