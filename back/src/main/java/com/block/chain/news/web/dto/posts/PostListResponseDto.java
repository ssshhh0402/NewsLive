package com.block.chain.news.web.dto.posts;

import com.block.chain.news.domain.post.Post;
import com.block.chain.news.domain.topic.Topic;

import java.util.List;

public class PostListResponseDto {
    private Long id;
    private String title;
    private String author;
    private String content;
    private List<Topic> topics;
    private String state;

    public PostListResponseDto(Post entity, List<Topic> topics){
        this.id = entity.getPostId();
        this.title=entity.getTitle();
        this.author = entity.getAuthor();
        this.content = entity.getContent();
        this.topics = topics;
        this.state = entity.getState();
    }
}
