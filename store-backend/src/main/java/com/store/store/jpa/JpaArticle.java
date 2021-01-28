package com.store.store.jpa;

import com.store.store.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaArticle extends JpaRepository<Article, Long> {
}
