package com.block.chain.news.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

public class RestTemplateUtil {
    private static RestTemplate restTemplate;

    @Autowired
    public RestTemplateUtil(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    public static ResponseEntity<String> post(String content){
        MultiValueMap<String, String> params =new LinkedMultiValueMap<>(); // 이런식으로 하면 되나?
        params.add("text", content);
        return restTemplate.postForEntity("http://localhost:3777/api/morpheme","Post Request", String.class,params); //Url,request방식,ResponseType,Parameter
    }
}
