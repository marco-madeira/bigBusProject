package com.bigbus.backend.queries;
import com.bigbus.backend.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

public interface CustomerQueries extends JpaRepository<Customer, String> {

    @Query(nativeQuery = true, value = "SELECT * FROM cliente")
    List<Customer> getAllCustomers();

    @Query(nativeQuery = true, value="INSERT INTO cliente(cpf, datanasc, nome, endereco, email, senha)" +
            " VALUES (:#{#customer.cpf}, :#{#customer.birthDate}, :#{#customer.name}," +
            " :#{#customer.address}, :#{#customer.email}, :#{#customer.password})")
    @Modifying
    void insert(@Param("customer") Customer customer);

    @Query(nativeQuery = true, value="UPDATE cliente"+
    " SET cpf= :#{#customer.cpf},"+
    " datanasc= :#{#customer.birthDate}," +
    " nome= :#{#customer.name},"+
    " endereco= :#{#customer.address},"+
    " email= :#{#customer.email},"+
    " senha= :#{#customer.password}"+
    " WHERE cpf=:cpf")
    @Modifying
    void update(@Param("customer")Customer customer, @Param("cpf")String cpf);

    @Query(nativeQuery = true, value="DELETE FROM cliente WHERE cpf=:cpf")
    @Modifying
    void delete(@Param("cpf")String cpf);
}
