package com.bigbus.backend.entities;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="cliente")
public class Customer {

    @Id
    @Column(name="cpf")
    private String cpf;

    @Column(name="nome")
    private String name;

    @Column(name="email")
    private String email;

    @Column(name="senha")
    private String password;

    @Column(name="datanasc")
    private int birthDate;
    @Column(name="endereco")
    private String address;

}
