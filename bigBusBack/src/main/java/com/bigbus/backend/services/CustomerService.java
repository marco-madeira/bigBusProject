package com.bigbus.backend.services;

import com.bigbus.backend.entities.Customer;
import com.bigbus.backend.queries.CustomerQueries;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CustomerService {

    private final CustomerQueries customerQueries;

    public CustomerService(CustomerQueries customerQueries) {
        this.customerQueries = customerQueries;
    }

    public List<Customer> getAllCustomers() {
        return customerQueries.getAllCustomers();
    }

    @Transactional
    public void insert(Customer customer){
        customerQueries.insert(customer);
    }

    @Transactional
    public void update(Customer customer, String cpf){
        customerQueries.update(customer, cpf);
    }

    @Transactional
    public void delete(String cpf){
        customerQueries.delete(cpf);
    }
}

