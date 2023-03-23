package com.bigbus.backend.controllers;

import com.bigbus.backend.entities.Login;
import com.bigbus.backend.services.LoginService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService){
        this.loginService=loginService;
    }

    @GetMapping("/validateLogin/{email}/{password}")
    public Login validateLogin(@PathVariable String email, @PathVariable String password){
        return loginService.validateLogin(email, password);
    }

    @PostMapping
    public void insertLogin(@RequestBody Login login){
        loginService.insertLogin(login);
    }
}
