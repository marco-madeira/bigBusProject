package com.bigbus.backend.queries;
import com.bigbus.backend.entities.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface CompanyQueries extends JpaRepository<Company, String> {

    @Query(nativeQuery = true, value = "SELECT * FROM empresa")
    List<Company> getAllCompanys();

    @Query(nativeQuery = true, value="INSERT INTO empresa(cnpj, nome_empresa, " +
            "endereco, telefone, email, senha) "+
    "VALUES (:#{#company.cnpj}, :#{#company.name}, :#{#company.address}, " +
            ":#{#company.phone}, :#{#company.email}, :#{#company.password})"
    )
    @Modifying
    void insertCompany(@Param("company")Company company);

    @Query(nativeQuery = true, value = "UPDATE empresa "+
    "SET cnpj= :#{#company.cnpj}, "+
            "nome_empresa= :#{#company.name}, "+
            "endereco= :#{#company.address}, "+
            "telefone= :#{#company.phone}, "+
            "email =:#{#company.email}, "+
            "senha= :#{#company.email}, "+
            "WHERE cnpj= :cnpj"
            )
    @Modifying
    void updateCompany(@Param("company") Company company, @Param("cnpj") String cnpj);

    @Query(nativeQuery = true, value = "DELETE FROM empresa WHERE cnpj= :cnpj")
    @Modifying
    void deleteCompany(@Param("cnpj") String cnpj);
}
