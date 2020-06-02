package com.block.chain.news.domain.post;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.block.chain.news.domain.post.QPost.post;

@RequiredArgsConstructor
public class PostRepositoryImpl implements PostRepositoryCustom{

    private final JPAQueryFactory queryFactory;

    @Override
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
