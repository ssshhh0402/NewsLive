package com.block.chain.news.web.dto.posts;

import com.block.chain.news.domain.post.Post;
import com.block.chain.news.domain.topic.Topic;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Getter
@NoArgsConstructor
public class PostSaveRequestDto {
    private String title;
    private String content;
    private String author;
    private List<Topic> words;

    @Builder
    public PostSaveRequestDto(String title,String content, String author){
        this.title = title;
        this.content = content;
        this.author = author;
    }

    public void Extracting(String content,Long postId){
        List<Topic> words = new LinkedList<>();
        //words.add(new Topic("abc",0.23));
        //여기에 대윤씨가 만든 코드(서버)로 content보내서 함축단어 리스트 받고 받은 아이들 For문 돌려서 서버에서 받은 데이터와 id 사용해서 Topic 저장
    }
    public Post toEntity(){
        return Post.builder()
                .title(title)
                .content(content)
                .author(author)
                .state("SAVE")
                .build();
    }
}
