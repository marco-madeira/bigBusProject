package com.bigbus.backend.queries;
import com.bigbus.backend.entities.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface BusQueries extends JpaRepository<Bus, String> {

    @Query(nativeQuery = true, value="SELECT * FROM ONIBUS WHERE disponivel=true")
    List<Bus> getAllAvailableBuses();

    @Query(nativeQuery = true, value="SELECT * FROM ONIBUS")
    List<Bus> getAllBuses();

    @Query(nativeQuery = true, value="INSERT INTO onibus(placa, num_assentos, disponivel) "+
    "VALUES (:#{#bus.plate}, :#{#bus.seatNumbers}, :#{#bus.available})"
    )
    @Modifying
    void insertBus(@Param("bus")Bus bus);

    @Query(nativeQuery = true, value = "UPDATE onibus "+
            "SET placa = :#{#bus.plate}, "+
            "num_assentos = :#{#bus.seatNumbers}, "+
            "disponivel = :#{#bus.available} "+
            "WHERE placa = :plate"
    )
    @Modifying
    void updateBus(@Param("bus")Bus bus,@Param("plate") String plate);

    @Query(nativeQuery = true, value ="DELETE FROM onibus WHERE placa= :plate")
    @Modifying
    void deleteBus(@Param("plate") String plate);


}
