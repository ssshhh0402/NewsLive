package com.block.chain.news.web;

import com.block.chain.news.service.PostService;
import com.block.chain.news.web.dto.posts.PostListResponseDto;
import com.block.chain.news.web.dto.posts.PostResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
public class PostApiController {
    private final PostService postService;

    @GetMapping("/api/v1/posts")
    public List<PostListResponseDto> getList(){
        log.info("getList");
        return postService.findAllDesc();
    }

//    @GetMapping("/api/v1/posts/{postId}")
//    public PostListResponseDto findById(@PathVariable Long postId){
//        log.info("findById : {}", postId);
//        return postService.findById(postId);
//    }
    @GetMapping("/api/v1/posts/{postId}")
    public ResponseEntity<PostListResponseDto> findById(@PathVariable Long postId){
        log.info("findById : {}", postId);
        return new ResponseEntity<PostListResponseDto>(postService.findById(postId), HttpStatus.OK);
    }

    @PutMapping("/api/v1/posts/{postId}")
    public Long deploy(@PathVariable Long postId,
                       @RequestParam(value="selected") String [] selected) throws Exception{
        return postService.deploy(postId, selected);
    }

    @DeleteMapping("/api/v1/posts/{postId}")
    public Long delete(@PathVariable Long postId){
        postService.delete(postId);
        return postId;
    }

}
