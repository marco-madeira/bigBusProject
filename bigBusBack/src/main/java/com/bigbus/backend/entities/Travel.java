package com.bigbus.backend.entities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="viagem")
public class Travel {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name="cod_viagem",columnDefinition = "serial")
    private int cod;

    @Column(name="origem")
    private String departure;

    @Column(name="destino")
    private String arrival;

    @Column(name="placa")
    private String plate;

    @Column(name="cnh")
    private String driverCnh;

    @Column(name="data_viagem")
    private int dateTravel;

    @Column(name="hora_saida")
    private int timeTravel;

    @Column(name="preco")
    private double price;

    @Column(name="nome_empresa")
    private String companyName;

}
