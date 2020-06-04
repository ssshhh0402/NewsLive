package com.block.chain.news.domain;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Slf4j
@Component
public class RestTemplateUtil {
    private static RestTemplate restTemplate;

    @Autowired
    public RestTemplateUtil(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    public static String post(String content){
        MultiValueMap<String, String> params =new LinkedMultiValueMap<>(); // 이런식으로 하면 되나?
        params.add("text", content);
        ResponseEntity<String[]> response = restTemplate.postForEntity("http://localhost:3777/api/morpheme",params,String[].class);
        List<String> result = Arrays.asList(response.getBody());
        StringBuilder sb = new StringBuilder();
        for(int idx = 0; idx < result.size(); idx ++){
            if(idx == (result.size()-1)){
                sb.append(result.get(idx));
            }else {
                sb.append(result.get(idx));
                sb.append(",");
            }
        }
        return sb.toString();
    }
}
