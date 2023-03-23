package com.bigbus.backend.entities.dtos;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Time;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TicketDTO {

    private double price;
    private int travelCod;
    private int date;
    private int time;
    private String cpf;
}
