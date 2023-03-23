package com.bigbus.backend.services;
import com.bigbus.backend.entities.Company;
import com.bigbus.backend.queries.CompanyQueries;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CompanyService {

    private final CompanyQueries companyQueries;

    public CompanyService(CompanyQueries companyQueries){
        this.companyQueries=companyQueries;
    }

    public List<Company> getAllCompany(){
        return companyQueries.getAllCompanys();
    }

    @Transactional
    public void insertCompany(Company company){
        companyQueries.insertCompany(company);
    }

    @Transactional
    public void updateCompany(Company company, String cnpj){
        companyQueries.updateCompany(company, cnpj);
    }

    @Transactional
    public void deleteCompany(String cnpj){
        companyQueries.deleteCompany(cnpj);
    }
}
