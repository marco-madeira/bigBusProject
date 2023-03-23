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
@Table(name="motorista")

public class BusDriver {

    @Id
    @Column(name="cnh")
    private String cnh;

    @Column(name="nome_motorista")
    private String name;

}
