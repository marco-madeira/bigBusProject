package com.bigbus.backend.queries;
import com.bigbus.backend.entities.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface LoginQueries extends JpaRepository<Login, String> {

    @Query(nativeQuery = true, value = "SELECT * FROM login "+
    "WHERE email= :email AND  senha= :password"
    )
    Login validateLogin(String email, String password);

    @Query(nativeQuery = true, value = "INSERT INTO login (email, senha, flag) " +
            "VALUES (:#{#login.email}, :#{#login.password}, :#{#login.flag})")
    @Modifying
    void insert(@Param("login")Login login);
}
