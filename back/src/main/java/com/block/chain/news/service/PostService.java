package com.block.chain.news.service;

import com.block.chain.news.domain.PostList.PostList;
import com.block.chain.news.domain.PostList.PostListRepository;
import com.block.chain.news.domain.post.Post;
import com.block.chain.news.domain.post.PostRepository;
import com.block.chain.news.domain.topic.Topic;
import com.block.chain.news.domain.topic.TopicRepository;
import com.block.chain.news.domain.user.User;
import com.block.chain.news.domain.user.UserRepository;
import com.block.chain.news.web.dto.posts.PostListResponseDto;
import com.block.chain.news.web.dto.posts.PostResponseDto;
import com.block.chain.news.web.dto.posts.PostSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class PostService {
    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final PostListRepository postListRepository;
    private final TopicRepository topicRepository;

    @Transactional(readOnly = true)
    public List<PostListResponseDto> findAllDesc(){
        List<Post> postList =postRepository.findAllDesc();
        List<PostListResponseDto> postResponseDto = new LinkedList<>();
        for (Post post : postList){
            List<Topic> topics = topicRepository.findByPostsDesc(post);
            PostListResponseDto postDto = new PostListResponseDto(post, topics);
            postResponseDto.add(postDto);
        }
        return postResponseDto;
    }

    public PostListResponseDto findById(Long postId){
        Post post = postRepository.findById(postId)
                .orElseThrow( () -> new IllegalArgumentException("잘못된 기사를 선택하셨습니다"));
        List<PostListResponseDto> postResponseDto = new LinkedList<>();
        List<Topic> topics = topicRepository.findByPostsDesc(post);
        PostListResponseDto responseDto = new PostListResponseDto(post, topics);
        return responseDto;
    }

    @Transactional
    public Long save(PostSaveRequestDto requestDto) throws Exception{
        User user= userRepository.findByEmail(requestDto.getAuthor())
                .orElseThrow(() -> new IllegalArgumentException("해당 회원 존재 X"));

        Post post = requestDto.toEntity();
        Long postId = postRepository.save(post).getPostId();
        PostList postList = PostList.builder()
                .user(user)
                .postId(postId)
                .build();
        postListRepository.save(postList);
        List<Topic> topics = requestDto.getWords();
        for (Topic topic : topics){
            Topic
        }
        return postId;
    }

    @Transactional
    public Long deploy(Long postId){
        Post post = postRepository.findById(postId)
                .orElseThrow( () -> new IllegalArgumentException("잘못된 기사를 선택 하셨습니다"));
        post.updateState();
        return postId;
    }


}
