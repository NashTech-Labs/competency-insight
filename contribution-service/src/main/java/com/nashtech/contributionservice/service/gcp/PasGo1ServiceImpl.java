package com.nashtech.contributionservice.service.gcp;

import com.nashtech.contributionservice.entity.Nasher;
import com.nashtech.contributionservice.service.PasGo1Service;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * This service will communicate to either the PAS service or the GO1% service to get basic information about Nashers.
 */
@Service
@Slf4j
@Profile("gcp")
@AllArgsConstructor
public class PasGo1ServiceImpl implements PasGo1Service {
    private final PubSubService pubSubService;

    @Override
    public void callPassService(){
        log.info("Request generated for Pas service");
        //TODO: integrate pas service here
        List<Nasher> info = List.of(new Nasher("empId from Pass","name","email","designation","lineManager","githubUsername"));
        pubSubService.publishMessage(info);
    }

    @Override
    public void callGo1Service(){
        log.info("Request generated for GO1% service");
        //TODO: integrate Go1% service here
        List<Nasher> info = List.of(new Nasher("empId from GO1","name","email","designation","lineManager","githubUsername"));
        pubSubService.publishMessage(info);
    }

    @Override
    public void fileLoadService(){
        log.info("Request generated for GO1% service");
        //TODO: integrate Go1% service here
        List<Nasher> info = List.of(new Nasher("empId from file upload","name","email","designation","lineManager","githubUsername"));
        pubSubService.publishMessage(info);
    }


}
