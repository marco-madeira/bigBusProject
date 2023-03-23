package com.bigbus.backend.controllers;
import com.bigbus.backend.entities.Travel;
import com.bigbus.backend.entities.dtos.TravelDTO;
import com.bigbus.backend.services.TravelService;
import org.hibernate.jdbc.TooManyRowsAffectedException;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/travel")
public class TravelController {

    private final TravelService travelService;

    public TravelController(TravelService travelService){
        this.travelService=travelService;
    }

    @GetMapping("/getTravelByCod/{travelCod}")
    public Travel getTravelByCod(@PathVariable int travelCod){
        return travelService.getTravelByCod(travelCod);
    }

    @GetMapping("/getTravelByRoute/{departure}/{arrival}")
    public List<Travel> getTravelByRoute(@PathVariable String departure, @PathVariable String arrival){
        return travelService.getTravelByRoute(departure, arrival);
    }

    @GetMapping("/getTravelByCompanyName/{companyName}")
    public List<Travel> getTravelByCompanyName(@PathVariable String companyName){
        return travelService.getTravelByCompanyName(companyName);
    }

    @PostMapping
    public void insertTravel(@RequestBody TravelDTO travelDTO){
        travelService.insertTravel(travelDTO);
    }

    @PutMapping("/{travelCod}")
    public void updateTravel(@RequestBody TravelDTO travelDTO, @PathVariable int travelCod){
        travelService.updateTravel(travelDTO, travelCod);
    }

    @DeleteMapping("/{travelCod}")
    public void deleteTravel(@PathVariable int travelCod){
        travelService.deleteTravel(travelCod);
    }
}
