package com.block.chain.news.web.dto.report;

import lombok.Builder;
import lombok.Getter;

@Getter
public class ReportRequestDto {
    private Long userId;
    private String contents;

    @Builder
    public ReportRequestDto(Long userId, String contents){
        this.userId = userId;
        this.contents = contents;
    }
}
