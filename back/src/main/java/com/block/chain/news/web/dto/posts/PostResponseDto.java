package com.block.chain.news.web.dto.posts;

import com.block.chain.news.domain.post.Post;
import com.block.chain.news.domain.topic.Topic;
import lombok.Getter;

import java.util.List;

@Getter
public class PostResponseDto {
    private String title;
    private String content;
    private String author;
    private String state;
    private List<Topic> topic;


    public PostResponseDto (Post entity, List<Topic> topics){
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.author = entity.getAuthor();
        this.state = entity.getState();
        this.topic=  topics;
    }
}
