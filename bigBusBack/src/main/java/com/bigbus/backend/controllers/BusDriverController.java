package com.bigbus.backend.controllers;
import com.bigbus.backend.entities.BusDriver;
import com.bigbus.backend.services.BusDriverService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/busDriver")
public class BusDriverController {

    private final BusDriverService busDriverService;

    public BusDriverController(BusDriverService busDriverService){
        this.busDriverService= busDriverService;
    }

    @GetMapping("/getAllDrivers")
    public List<BusDriver> getAllDrivers(){
        return busDriverService.getAllDrivers();
    }

    @PostMapping
    public void insertBusDriver(@RequestBody BusDriver busDriver){
        busDriverService.insertBusDriver(busDriver);
    }

    @PutMapping("/{cnh}")
    public void updateBusDriver(@RequestBody BusDriver busDriver, @PathVariable String cnh){
        busDriverService.updateBusDriver(busDriver, cnh);
    }

    @DeleteMapping("/{cnh}")
    public void deleteBusDriver(@PathVariable String cnh){
        busDriverService.deleteBusDriver(cnh);
    }

}
