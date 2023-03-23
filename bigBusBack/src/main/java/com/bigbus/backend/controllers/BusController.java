package com.bigbus.backend.controllers;
import com.bigbus.backend.entities.Bus;
import com.bigbus.backend.services.BusService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/bus")
public class BusController {

    private BusService busService;

    public BusController(BusService busService){
        this.busService=busService;
    }

    @GetMapping("/getAllAvailableBuses")
    public List<Bus> getAllAvailableBuses(){
        return busService.getAllAvailableBuses();
    }

    @GetMapping("/getAllBuses")
    public List<Bus> getAllBuses(){return  busService.getAllBuses();}

    @PostMapping
    public void insertBus(@RequestBody Bus bus){
        busService.insertBus(bus);
    }

    @PutMapping("/{plate}")
    public void updateBus(@RequestBody Bus bus, @PathVariable String plate){
        busService.updateBus(bus, plate);
    }

    @DeleteMapping("/{plate}")
    public void deleteBus(@PathVariable String plate){
        busService.deleteBus(plate);
    }

}
