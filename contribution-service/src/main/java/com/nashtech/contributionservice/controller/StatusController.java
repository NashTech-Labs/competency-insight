package com.nashtech.contributionservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StatusController {

    @GetMapping
    public String appRunning(){
        return "Contribution Service is Running...at root path";
    }

    @GetMapping
    @RequestMapping("/cs")
    public String appRunningContextPath(){
        return "Contribution Service is Running...at context path";
    }
}
