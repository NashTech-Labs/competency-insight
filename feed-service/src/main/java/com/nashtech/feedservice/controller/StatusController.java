package com.nashtech.feedservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StatusController {


    @GetMapping
    public String appRunningRootLevel(){
        return "Contribution Service is Running...at root path";
    }

    @GetMapping
    @RequestMapping("/feed")
    public String appRunning(){
        return "Feed Service is Running...";
    }
}
