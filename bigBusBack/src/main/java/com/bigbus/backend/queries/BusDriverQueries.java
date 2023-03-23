package com.bigbus.backend.queries;
import com.bigbus.backend.entities.BusDriver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface BusDriverQueries extends JpaRepository<BusDriver, String> {

    @Query(nativeQuery = true, value="SELECT * FROM motorista")
    List<BusDriver> getAllDrivers();

    @Query(nativeQuery = true, value=
            "INSERT INTO motorista (cnh, nome_motorista) "+
                    "VALUES (:#{#busDriver.cnh}, :#{#busDriver.name})"
    )
    @Modifying
    public void insertBusDriver(@Param("busDriver") BusDriver busDriver);

    @Query(nativeQuery = true, value=
            "UPDATE motorista SET cnh= :#{#busDriver.cnh},nome_motorista= :#{#busDriver.name} "+
                    "WHERE cnh = :cnh")
    @Modifying
    public void updateBusDriver(@Param("busDriver") BusDriver busDriver,
                                @Param("cnh") String cnh);

    @Query(nativeQuery = true, value= "DELETE FROM motorista WHERE cnh= :cnh")
    @Modifying
    public void deleteBusDriver(@Param("cnh") String cnh);
}
