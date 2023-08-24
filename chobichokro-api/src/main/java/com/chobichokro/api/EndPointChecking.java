package com.chobichokro.api;

import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class EndPointChecking {
    @GetMapping("/hello")
    public String hello(@RequestBody String request)
    {
    	System.out.println(request);
        return "Hello User!";
    }
    
    @GetMapping("/profile")
    public String ProfilePage(@CookieValue(name = "color")  String color) {
    	return "You are using " + color + " mode.";
    }

}
