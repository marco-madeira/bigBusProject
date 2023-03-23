package com.bigbus.backend.controllers;
import com.bigbus.backend.entities.Customer;
import com.bigbus.backend.services.CustomerService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService){
        this.customerService=customerService;
    }

    @GetMapping("/getAllCustomers")
    public List<Customer> getAllCustomers(){
        return customerService.getAllCustomers();
    }

    @PostMapping
    public void insert(@RequestBody Customer customer){
        customerService.insert(customer);
    }

    @PutMapping("/{cpf}")
    public void update(@RequestBody Customer customer, @PathVariable String cpf){
        customerService.update(customer, cpf);
    }

    @DeleteMapping("/{cpf}")
    public void delete(@PathVariable String cpf){
        customerService.delete(cpf);
    }


}
