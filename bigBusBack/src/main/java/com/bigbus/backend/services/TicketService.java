package com.bigbus.backend.services;

import com.bigbus.backend.entities.Ticket;
import com.bigbus.backend.entities.dtos.TicketDTO;
import com.bigbus.backend.queries.TicketQueries;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TicketService {

    private final TicketQueries ticketQueries;

    public TicketService(TicketQueries ticketQueries){
        this.ticketQueries=ticketQueries;
    }

    public List<Ticket> getTicketByCpf(String cpf){
        return ticketQueries.getTicketByCpf(cpf);
    }

    @Transactional
    public void insert(TicketDTO ticketDTO){
        ticketQueries.insert(ticketDTO);
    }

    @Transactional
    public void updateTicket(TicketDTO ticketDTO, int ticketCod){
        ticketQueries.updateTicket(ticketDTO, ticketCod);
    }

    @Transactional
    public void deleteByCode(int ticketCod){
       ticketQueries.deleteByCode(ticketCod);
    }
}
