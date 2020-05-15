package com.block.chain.news.domain.post;

import com.block.chain.news.domain.BaseTimeEntity;
import com.block.chain.news.domain.user.User;
import lombok.Builder;
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

    @Column(nullable=false, columnDefinition="TEXT")
    private String content;

    @Column(length=100, nullable=false)
    private String state;

    @Builder
    public Post(String title, String author, String content, String state){
        this.title = title;
        this.author = author;
        this.content=content;
        this.state = state;
    }

    public void updateState(){
        this.state = "Started";
    }
}
