package com.block.chain.news.domain.post;

import com.block.chain.news.domain.BaseTimeEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@NoArgsConstructor
@Entity
public class Post extends BaseTimeEntity {

    @Id
    private Long postId;

    private String title;

    @Column(nullable=false)
    private String author;



}
