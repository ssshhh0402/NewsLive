package com.block.chain.news.domain.report;

import com.block.chain.news.domain.BaseTimeEntity;
import com.block.chain.news.domain.post.Post;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Report extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long reportId;

//    @ManyToOne(cascade= CascadeType.ALL)   //이거 맞냐?
    @OneToOne
    private Post post;

    @Column
    @ColumnDefault("0")
    private int total;

    @Column
    @ColumnDefault("0")
    private int agree;

    @Builder
    public Report(Post post){
        this.post = post;
        this.total = 0;
        this.agree = 0;
    }

    public void agree(){
        int next = this.total + 1;
        int agreed = this.agree + 1;
        this.total = next;
        this.agree= agreed;
    }
    public void disagree(){
        int next = this.total + 1;
        this.total = next;
    }
}
