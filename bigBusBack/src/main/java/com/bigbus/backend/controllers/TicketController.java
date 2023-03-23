package com.bigbus.backend.controllers;
import com.bigbus.backend.entities.Ticket;
import com.bigbus.backend.entities.dtos.TicketDTO;
import com.bigbus.backend.services.TicketService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/ticket")
public class TicketController {

    private final TicketService ticketService;

    public TicketController(TicketService ticketService){
        this.ticketService=ticketService;
    }

    @GetMapping("/getTicketByCpf/{cpf}")
    public List<Ticket> getTicketByCpf(@PathVariable String cpf){
        return ticketService.getTicketByCpf(cpf);
    }

    @PostMapping
    public void insert(@RequestBody TicketDTO ticketDTO){
        ticketService.insert(ticketDTO);
    }

    @PutMapping("/{ticketCod}")
    public void updateTicket(@RequestBody TicketDTO ticketDTO, @PathVariable int ticketCod){
        ticketService.updateTicket(ticketDTO, ticketCod);
    }


    @DeleteMapping("/{ticketCod}")
    public void deleteByCode(@PathVariable int ticketCod){
        ticketService.deleteByCode(ticketCod);
    }

}
