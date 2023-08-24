package com.chobichokro.api.controller;

import com.chobichokro.api.models.User;
import com.chobichokro.api.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @PostMapping("/reg")

    public ResponseEntity<?>  registrationUser(@RequestBody User user){
        User save = userRepository.save(user);
        return ResponseEntity.ok(save);

    }
    @GetMapping("/user")
    public ResponseEntity<?> findAll(){
        return ResponseEntity.ok(this.userRepository.findAll());
    }
}
