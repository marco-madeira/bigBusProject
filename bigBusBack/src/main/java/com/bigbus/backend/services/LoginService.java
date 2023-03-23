package com.bigbus.backend.services;

import com.bigbus.backend.entities.Login;
import com.bigbus.backend.queries.LoginQueries;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class LoginService {

    private final LoginQueries loginQueries;

    public LoginService(LoginQueries loginQueries){
        this.loginQueries = loginQueries;
    }

    public Login validateLogin(String email, String password){
        return loginQueries.validateLogin(email, password);
    }

    @Transactional
    public void insertLogin(Login login){
        loginQueries.insert(login);
    }
}
