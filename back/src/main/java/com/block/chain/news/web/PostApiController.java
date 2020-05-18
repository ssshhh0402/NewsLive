package com.block.chain.news.web;

import com.block.chain.news.service.PostService;
import com.block.chain.news.web.dto.posts.PostResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin("*")
public class PostApiController {
    private final PostService postService;

    @GetMapping("/api/v1/posts")
    public List<PostResponseDto> getList(){
        return postService.findAllDesc();
    }
    @GetMapping("/api/v1/posts/{postId}")
    public PostResponseDto findById(@PathVariable Long postId){

        return postService.findById(postId);
    }

}
