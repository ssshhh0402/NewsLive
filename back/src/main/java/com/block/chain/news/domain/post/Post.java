package com.block.chain.news.domain.post;

import com.block.chain.news.domain.BaseTimeEntity;
import com.block.chain.news.domain.selected.Selected;
import com.block.chain.news.domain.selected.SelectedRepository;
import com.block.chain.news.domain.topic.Topic;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@Entity
public class Post extends BaseTimeEntity {
    @Id
    private Long postId;

    private String title;

    @Column(nullable=false)
    private String author;

    @Column(nullable=false, columnDefinition="TEXT")
    private String content;

    @Column(length=100, nullable=false)
    private String state;

    @OneToMany(mappedBy = "post")
    @JsonBackReference
    private List<Topic> topic = new ArrayList<>();

    @OneToMany(mappedBy="post")
    @JsonBackReference
    private List<Topic> selected = new ArrayList<>();

    @Builder
    public Post(String title, String author, String content, String state){
        this.title = title;
        this.author = author;
        this.content=content;
        this.state=  state;
    }

    public void updateState(Post post, String [][] selected) {
        this.state = "Started";
        //여기서 입력받은 selected 저장?
        for (String [] one : selected){
            Selected selected_one = Selected.builder()
                    .content(one[0])
                    .similarity(Double.parseDouble(one[1]))
                    .post(post)
                    .build();
            SelectedRepository.save(selected_one);
        }
    }
}
