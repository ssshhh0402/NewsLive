package com.block.chain.news.web.dto.report;

import lombok.Builder;
import lombok.Getter;

@Getter
public class ReportAgreeRequestDto {
    private int agree;
    private Long userId;


    @Builder
    public ReportAgreeRequestDto(int agree, Long userId){
        this.agree = agree;
        this.userId = userId;
    }
}
