package com.bigbus.backend.controllers;
import com.bigbus.backend.entities.Company;
import com.bigbus.backend.services.CompanyService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/company")
public class CompanyController {

    private final CompanyService companyService;

    public CompanyController(CompanyService companyService){
        this.companyService=companyService;
    }

    @GetMapping("/getAllCompanys")
    public List<Company> getAllCompanys(){
       return companyService.getAllCompany();
    }
    @PostMapping
    public void insertCompany(@RequestBody Company company){
        companyService.insertCompany(company);
    }

    @PutMapping("/{cnpj}")
    public void updateCompany(@RequestBody Company company, @PathVariable String cnpj){
        companyService.updateCompany(company, cnpj);
    }

    @DeleteMapping("/{cnpj}")
    public void deleteCompany(@PathVariable("cnpj") String cnpj){
        companyService.deleteCompany(cnpj);
    }


}
