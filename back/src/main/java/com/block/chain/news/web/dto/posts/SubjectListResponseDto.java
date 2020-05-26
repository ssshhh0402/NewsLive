package com.block.chain.news.web.dto.posts;

import com.block.chain.news.domain.post.Post;

import java.util.ArrayList;
import java.util.List;

public class SubjectListResponseDto {
    private String title;
    private List<Post> posts = new ArrayList<>();

    public SubjectListResponseDto(String title, List<Post> posts){
        this.title = title;
        this.posts = posts;
    }
}
