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
@Table(name="empresa")
public class Company {

    @Id
    @Column(name="cnpj")
    private String cnpj;

    @Column(name="nome_empresa")
    private String name;

    @Column(name="telefone")
    private String phone;

    @Column(name="endereco")
    private String address;

    @Column(name="email")
    private String email;

    @Column(name="senha")
    private String password;

}
