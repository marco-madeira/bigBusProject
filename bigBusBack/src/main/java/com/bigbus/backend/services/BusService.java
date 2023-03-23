package com.bigbus.backend.services;

import com.bigbus.backend.entities.Bus;
import com.bigbus.backend.queries.BusQueries;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BusService {

    private final BusQueries busQueries;

    public BusService(BusQueries busQueries){
        this.busQueries=busQueries;
    }

    public List<Bus>getAllBuses(){return busQueries.getAllBuses();}

    public List<Bus> getAllAvailableBuses(){return busQueries.getAllAvailableBuses();}

    @Transactional
    public void insertBus(Bus bus){
        busQueries.insertBus(bus);
    }

    @Transactional
    public void updateBus(Bus bus, String plate){
        busQueries.updateBus(bus, plate);
    }

    @Transactional
    public void deleteBus(String plate){
        busQueries.deleteBus(plate);
    }
}
