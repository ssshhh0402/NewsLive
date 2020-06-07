package com.block.chain.news.web.dto.follow;

import com.block.chain.news.domain.follow.Follow;
import com.block.chain.news.domain.user.User;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class FollowResponseDto {
    private List<String> follower;
    private List<String> following;

    public FollowResponseDto(User entity){
        List<Follow> followers = entity.getFollower();
        List<Follow> followings = entity.getFollowing();
        List<String> follower = new ArrayList<>();
        List<String> following = new ArrayList<>();

        for (Follow followerUser : followings){
            follower.add(followerUser.getFromUser().getEmail());
        }
        for (Follow followingUser : followers){
            following.add(followingUser.getToUser().getEmail());
        }

        this.follower = follower;
        this.following = following;
    }
}
