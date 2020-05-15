package com.block.chain.news.web.dto.posts;

import com.block.chain.news.domain.post.Post;
import lombok.Getter;

@Getter
public class PostResponseDto {
    private String title;
    private String content;
    private String author;
    private String state;

    public PostResponseDto (Post entity){
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.author = entity.getAuthor();
        this.state = entity.getState();
    }
}
