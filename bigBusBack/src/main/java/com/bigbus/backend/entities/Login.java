package com.bigbus.backend.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="Login")

public class Login {

    @Id
    @Column(name="email")
    private String email;

    @Column(name="senha")
    private String password;

    @Column(name="flag")
    private int flag;
}
