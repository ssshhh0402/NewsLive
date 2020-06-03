package com.block.chain.news.service;

import com.block.chain.news.domain.RestTemplateUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class RestTemplateService {

    public String getMorpheme(String contents){
        ResponseEntity<String> result = RestTemplateUtil.post(contents);
        return result.getBody();
    }
}
