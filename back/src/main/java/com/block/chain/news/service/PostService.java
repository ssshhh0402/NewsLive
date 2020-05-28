package com.block.chain.news.service;

import com.block.chain.news.domain.PostList.PostList;
import com.block.chain.news.domain.PostList.PostListRepository;
import com.block.chain.news.domain.post.Post;
import com.block.chain.news.domain.post.PostRepository;
import com.block.chain.news.domain.subject.Subject;
import com.block.chain.news.domain.subject.SubjectRepository;
import com.block.chain.news.domain.tags.Tags;
import com.block.chain.news.domain.tags.TagsRepository;
import com.block.chain.news.domain.topic.Topic;
import com.block.chain.news.domain.topic.TopicRepository;
import com.block.chain.news.domain.user.User;
import com.block.chain.news.domain.user.UserRepository;
import com.block.chain.news.web.dto.posts.PostListResponseDto;
import com.block.chain.news.web.dto.posts.PostResponseDto;
import com.block.chain.news.web.dto.posts.PostSaveRequestDto;
import com.block.chain.news.web.dto.posts.SubjectListResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class PostService {
    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final PostListRepository postListRepository;
    private final TopicRepository topicRepository;
    private final TagsRepository tagsRepository;
    private final SubjectRepository subjectRepository;

    @Transactional(readOnly = true)
    public List<PostListResponseDto> findAllDesc(){
        List<Post> postList =postRepository.findAll();

        List<PostListResponseDto> postResponseDto = new LinkedList<>();
        for (Post post : postList){
            PostListResponseDto postDto = new PostListResponseDto(post);
            postResponseDto.add(postDto);
        }
        return postResponseDto;
    }

    public PostResponseDto findById(Long postId){
        Post post = postRepository.findById(postId)
                .orElseThrow( () -> new IllegalArgumentException("잘못된 기사를 선택하셨습니다"));
        List<Topic> topics = topicRepository.findByPostsDesc(post);
        return new PostResponseDto(post, topics);
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
        String topics = post.getSelect();
        Optional<Subject> subject = subjectRepository.findByTitle(topics);
        //여기서 subject 있는지 없는지 어떻게 판단해야하지..?
        if (subject.isPresent()){
            subject.get().addPost(post);
        }else{
            List<Post> lists = new LinkedList<>();
            lists.add(post);
            Subject.builder()
                    .posts(lists)
                    .title(topics)
                    .build();
        }
        return postId;
    }

    @Transactional
    public List<Post> suggestion(Long postId) throws Exception {
        String target = postRepository.getOne(postId).getSelect();
        String[] targetList = target.split(",");
        List<Post> suggestions = new LinkedList<>();
        List<Subject> subjects = new LinkedList<>();
        for (String targetOne : targetList) {                                                    // 일단 이부분 보류 여기에 동적쿼리 적용할수 있ㄴ으면 적용하기
            List<Subject> find = subjectRepository.findAllByTitleContaining(targetOne);
            for (Subject one : find) {
                if (!subjects.contains(one)) {
                    subjects.add(one);
                }
            }
        }
        Subject input_target = null;
        int min_value = 1;
        for (Subject subject : subjects) {
            int current = getSimilarity(subject.getTitle(), target);
            if (current == 0) {
                input_target = subject;
                break;
            } else {
                if (current < min_value) {
                    min_value = current;
                    input_target = subject;
                }
            }
        }
        for (Post post : input_target.getPosts()) {
            suggestions.add(post);
        }
        return suggestions;
    }
    //일단 String 2개 입력받아서 그거의 유사도 계산하기 0 >> 좋은거 높을수록 안좋은거.
    public int getSimilarity(String s1, String s2){
       int longStrLen = s1.length() + 1;
       int shortStrLen = s2.length() + 1;
       int[] cost = new int[longStrLen];
       int[] newcost = new int[longStrLen];
       for (int i = 0; i < longStrLen; i++) { cost[i] = i; }
       for (int j = 1; j < shortStrLen; j++) {
           newcost[0] = j;
           for (int i = 1; i < longStrLen; i++) {
               int match = 0;
               if (s1.charAt(i - 1) != s2.charAt(j - 1)) {
                   match = 1;
               }
               int replace = cost[i - 1] + match;
               int insert = cost[i] + 1;
               int delete = newcost[i - 1] + 1;
               newcost[i] = Math.min(Math.min(insert, delete), replace);
           }
           int[] temp = cost; cost = newcost; newcost = temp;
       }
       return cost[longStrLen -1];
    }
    @Transactional
    public Long deploy(Long postId, String [] selected){
        Post post = postRepository.findById(postId)
                .orElseThrow( () -> new IllegalArgumentException("잘못된 기사를 선택 하셨습니다"));
        StringBuilder sb = new StringBuilder();
        for (String one : selected){
            sb.append(one);
            sb.append(',');
        }
        post.updateState("Started");
        post.updateSelect(sb.toString());
        return postId;
    }

    @Transactional
    public void delete(Long postId){
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("잘못된 신청입니다"));
        postRepository.delete(post);
    }

    //SubjectListReponseDto 만들고
    //그 안에 SubjectResponseDto 하나씩 추가
    @Transactional
    public List<SubjectListResponseDto> getSubject(){
        List<Subject> subjects = subjectRepository.findAll();
        List<SubjectListResponseDto> subjectListResponseDto = new LinkedList<>();
        if (subjects.isEmpty()){
            return subjectListResponseDto;
        }
        else {
            for (Subject subject : subjects) {
                SubjectListResponseDto listResponseDto= new SubjectListResponseDto(subject.getTitle(), subject.getPosts());
                subjectListResponseDto.add(listResponseDto);
            }
            return subjectListResponseDto;
        }
    }

}
