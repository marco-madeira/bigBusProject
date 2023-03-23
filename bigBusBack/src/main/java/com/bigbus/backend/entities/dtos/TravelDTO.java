package com.bigbus.backend.entities.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TravelDTO {

    private String departure;
    private String arrival;
    private String plate;
    private String driverCnh;
    private int dateTravel;
    private int timeTravel;
    private double price;
    private String companyName;
}
