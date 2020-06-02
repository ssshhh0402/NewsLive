package com.block.chain.news.domain.post;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import static com.block.chain.news.domain.post.QPost.post;
import java.util.List;

@Repository
public class PostRepositorySupport extends QuerydslRepositorySupport {
    public final JPAQueryFactory queryFactory;

    public PostRepositorySupport(JPAQueryFactory queryFactory){
        super(Post.class);
        this.queryFactory = queryFactory;
    }
    public List<Post> findByTopics(String topics){
        String [] target = topics.split(",");
        return queryFactory.selectDistinct(post)
                .from(post)
                .where(post.topics.contains(target[0]))
                .where(post.topics.contains(target[1]))
                .where(post.topics.contains(target[2]))
                .fetch();
    }

}
