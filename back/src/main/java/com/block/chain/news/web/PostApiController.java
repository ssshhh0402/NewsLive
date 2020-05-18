package com.block.chain.news.web;

import com.block.chain.news.service.PostService;
import com.block.chain.news.web.dto.posts.PostListResponseDto;
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
    public List<PostListResponseDto> getList(){
        return postService.findAllDesc();
    }

    @GetMapping("/api/v1/posts/{postId}")
    public PostListResponseDto findById(@PathVariable Long postId){
        return postService.findById(postId);
    }

    @PutMapping("/api/v1/posts/{postId}")
    public Long deploy(@PathVariable Long postId,
                       @RequestParam(value="selected") String [][] selected) throws Exception{
        return postService.deploy(postId, selected);
    }

}
