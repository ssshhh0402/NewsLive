package com.block.chain.news.web.dto.posts;

import com.block.chain.news.domain.post.Post;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostSaveRequestDto {
    private String title;
    private String content;
    private String author;
    private String state;

    @Builder
    public PostSaveRequestDto(String title,String content, String author, String state){
        this.title = title;
        this.content = content;
        this.author = author;
        this.state= state;
    }

    public Post toEntity(){
        return Post.builder()
                .title(title)
                .content(content)
                .author(author)
                .state(state)
                .build();
    }
}
