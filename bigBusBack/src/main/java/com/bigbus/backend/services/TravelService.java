package com.bigbus.backend.services;

import com.bigbus.backend.entities.Travel;
import com.bigbus.backend.entities.dtos.TravelDTO;
import com.bigbus.backend.queries.TravelQueries;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TravelService {

    private final TravelQueries travelQueries;

    public TravelService(TravelQueries travelQueries){
        this.travelQueries=travelQueries;
    }

    public Travel getTravelByCod(int travelCod){
        return travelQueries.getTravelByCod(travelCod);
    }

    public List<Travel> getTravelByRoute(String departure, String arrival){
        return travelQueries.getTravelByRoute(departure, arrival);
    }

    public List<Travel> getTravelByCompanyName(String companyName){
        return travelQueries.getTravelByCompanyName(companyName);
    }

    @Transactional
    public void insertTravel(TravelDTO travelDTO){
        travelQueries.insertTravel(travelDTO);
    }

    @Transactional
    public void updateTravel(TravelDTO travelDTO, int travelCod){
        travelQueries.updateTravel(travelDTO, travelCod);
    }

    @Transactional
    public void deleteTravel(int travelCod){
        travelQueries.deleteTravel(travelCod);
    }
}
