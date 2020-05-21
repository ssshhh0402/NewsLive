package com.block.chain.news.domain.topic;

import com.block.chain.news.domain.post.Post;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@RequiredArgsConstructor
@Getter
@Entity
public class Topic {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long topicId;

    @Column(columnDefinition="TEXT", nullable=false)
    private String content;

    @Column(columnDefinition="DOUBLE", nullable=false)
    private Double similarity;

    @ManyToOne(cascade = CascadeType.ALL)
    @JsonManagedReference
    private Post post;

    public Topic(String content, Double similarity, Post post){
        this.content = content;
        this.similarity = similarity;
        this.post = post;
    }
}
