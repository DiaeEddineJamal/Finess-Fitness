package com.ffbackend.ffbackend.controller;

import com.ffbackend.ffbackend.model.Users;
import com.ffbackend.ffbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> signUp(@RequestBody Users user) {
        userService.signUp(user);
        return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Users user) {
        Users loggedInUser = userService.login(user.getUsername(), user.getPassword());
        if (loggedInUser != null) {
            return new ResponseEntity<>("Login successful!", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);
        }
    }
}
