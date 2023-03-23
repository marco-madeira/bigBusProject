package com.bigbus.backend.entities;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="onibus")
public class Bus {

    @Id
    @Column(name="placa")
    private String plate;

    @Column(name="num_assentos")
    private int seatNumbers;

    @Column(name="disponivel")
    private boolean isAvailable;
}
