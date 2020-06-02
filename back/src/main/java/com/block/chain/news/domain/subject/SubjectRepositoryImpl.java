package com.block.chain.news.domain.subject;

import com.block.chain.news.domain.post.Post;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import static com.block.chain.news.domain.subject.QSubject.subject;
import java.util.List;

import static com.block.chain.news.domain.post.QPost.post;

@RequiredArgsConstructor
public class SubjectRepositoryImpl implements SubjectRepositoryCustom{
    private final JPAQueryFactory queryFactory;

    @Override
    public List<Subject> findByTopics(String topics){
        String [] target = topics.split(",");
        return queryFactory.selectDistinct(subject)
                .from(subject)
                .where(post.topics.contains(target[0]))
                .where(post.topics.contains(target[1]))
                .where(post.topics.contains(target[2]))
                .fetch();
    }}
