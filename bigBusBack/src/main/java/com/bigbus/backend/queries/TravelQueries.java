package com.bigbus.backend.queries;
import com.bigbus.backend.entities.Travel;
import com.bigbus.backend.entities.dtos.TravelDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TravelQueries extends JpaRepository<Travel, String> {

    @Query(nativeQuery = true, value="SELECT * FROM viagem WHERE cod_viagem= :travelCod")
    Travel getTravelByCod(int travelCod);

    @Query(nativeQuery = true, value="SELECT * FROM viagem where nome_empresa = :companyName")
    List<Travel> getTravelByCompanyName(String companyName);

    @Query(nativeQuery = true, value = "SELECT * FROM viagem "
            +"WHERE origem= :departure AND destino= :arrival"
    )
    List<Travel> getTravelByRoute(String departure, String arrival);

    @Query(nativeQuery = true, value=
            "INSERT INTO viagem(data_viagem, " +
                    "hora_saida, origem, destino, placa, cnh, preco, nome_empresa) "+
                    "VALUES (:#{#travelDTO.dateTravel}, :#{#travelDTO.timeTravel}, "+
                    ":#{#travelDTO.departure}, :#{#travelDTO.arrival}, :#{#travelDTO.plate}, "+
                    ":#{#travelDTO.driverCnh}, :#{#travelDTO.price}, :#{#travelDTO.companyName})"
    )
    @Modifying
    void insertTravel(@Param("travelDTO") TravelDTO travelDTO);

    @Query(nativeQuery = true, value = "UPDATE viagem "+
            "SET "+
            "data_viagem= :#{#travelDTO.date}, "+
            "hora_saida= :#{#travelDTO.time}, "+
            "origem = :#{#travelDTO.departure}, "+
            "destino= :#{#travelDTO.arrival}, "+
            "placa = :#{#travelDTO.plate}, "+
            "cnh = :#{#travelDTO.driverCnh}, "+
            "preco = #{#travelDTO.price}, "+
            "nome_empresa = #{#travelDTO.companyName}, "+
            "WHERE cod_viagem = :travelCod"
    )
    @Modifying
    void updateTravel(@Param("travelDTO") TravelDTO travelDTO, @Param("travelCod") int travelCod);

    @Query(nativeQuery = true, value="DELETE FROM viagem WHERE cod_viagem= :travelCod")
    @Modifying
    void deleteTravel(@Param("travelCod") int travelCod);
}
