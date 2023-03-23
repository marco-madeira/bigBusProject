package com.bigbus.backend.services;

import com.bigbus.backend.entities.BusDriver;
import com.bigbus.backend.queries.BusDriverQueries;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BusDriverService {

    private final BusDriverQueries busDriverQueries;

    public BusDriverService(BusDriverQueries busDriverQueries){
        this.busDriverQueries=busDriverQueries;
    }

    public List<BusDriver> getAllDrivers(){
        return busDriverQueries.getAllDrivers();
    }

    @Transactional
    public void insertBusDriver(BusDriver busDriver){
        busDriverQueries.insertBusDriver(busDriver);
    }

    @Transactional
    public void updateBusDriver(BusDriver busDriver, String cnh){
        busDriverQueries.updateBusDriver(busDriver, cnh);
    }

    @Transactional
    public void deleteBusDriver(String cnh){
        busDriverQueries.deleteBusDriver(cnh);
    }


}
