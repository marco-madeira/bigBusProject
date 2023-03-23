package com.bigbus.backend.queries;
import com.bigbus.backend.entities.Ticket;
import com.bigbus.backend.entities.dtos.TicketDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface TicketQueries extends JpaRepository<Ticket, String> {

    @Query(nativeQuery = true, value=
            "SELECT * "+
            "FROM passagem p "+
            "WHERE p.cpf = :cpf")
    List<Ticket> getTicketByCpf(@Param("cpf")String cpf);

    @Query(nativeQuery = true, value=
            "INSERT INTO passagem(data_passagem, hora_passagem, preco, cod_viagem, cpf) "+
            "VALUES (:#{#ticketDTO.date}, :#{#ticketDTO.time}, "+
            ":#{#ticketDTO.price}, :#{#ticketDTO.travelCod}, :#{#ticketDTO.cpf})")
    @Modifying
    void insert(@Param("ticketDTO") TicketDTO ticketDTO);

    @Query(nativeQuery = true, value="UPDATE passagem " +
            "SET "+
            "data_passagem= :#{#ticketDTO.date}, "+
            "hora_passagem= :#{#ticketDTO.time}, "+
            "preco= :#{#ticketDTO.price}, "+
            "cod_viagem= :#{#ticketDTO.travelCod}, "+
            "cpf= :#{#ticketDTO.cpf} "+
             "WHERE cod_passagem = :ticketCod"
    )
    @Modifying
    void updateTicket(@Param("ticketDTO") TicketDTO ticketDTO, @Param("ticketCod") int ticketCod);

    @Query(nativeQuery = true, value= "DELETE FROM passagem WHERE cod_passagem = :ticketCod")
    @Modifying
    void deleteByCode(@Param("ticketCod")int ticketCod);

}
