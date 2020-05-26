package com.block.chain.news.domain.subject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;


public interface SubjectRepository extends JpaRepository<Subject, Long> {

    Optional<Subject> findByTitle(String title);
//    @Query("SELECT c FROM Subject c WHERE title like '%?1%' ")
//    List<Subject> findSomething(String string);
//
    List<Subject> findAllByTitleContaining(String title);
}
