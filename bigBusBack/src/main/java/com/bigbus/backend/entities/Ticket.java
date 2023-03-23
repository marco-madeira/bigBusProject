package com.bigbus.backend.entities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="passagem")
public class Ticket {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name="cod_passagem", columnDefinition = "serial")
    private int cod;

    @Column(name="preco")
    private double price;

    @Column(name="cod_viagem")
    private int travelCod;

    @Column(name="data_passagem")
    private int date;

    @Column(name="hora_passagem")
    private int time;

    @Column(name="cpf")
    private String cpf;

}
