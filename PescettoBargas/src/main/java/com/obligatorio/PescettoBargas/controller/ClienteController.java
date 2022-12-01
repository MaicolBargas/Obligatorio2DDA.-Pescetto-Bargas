package com.obligatorio.PescettoBargas.controller;


import java.util.List;
import java.util.Optional;

import com.obligatorio.PescettoBargas.model.Cliente;
import com.obligatorio.PescettoBargas.model.Plan;
import com.obligatorio.PescettoBargas.service.ClienteService;
import com.obligatorio.PescettoBargas.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/cliente")
public class ClienteController {
    @Autowired
    private ClienteService clienteService;

    @Autowired
    private PlanService planService;

    @CrossOrigin(origins = "*")
    @PostMapping("/add")
    public String add(@RequestBody Cliente cliente){
        clienteService.guardarCliente(cliente);
        return "Nuevo cliente añadido exitosamente";
    }

    @GetMapping("/list")
    public List<Cliente> list(){
        return clienteService.listarCliente();
    }

    @DeleteMapping("/delete/{ci}")
    public String delete(@PathVariable int ci){
        clienteService.borrarCliente(ci);
        return "Cliente borrado correctamente";
    }

    @GetMapping("/{ci}")
    public Cliente find(@PathVariable Integer ci){
        return clienteService.buscarCliente(ci).get();
    }

    @PostMapping("/modify/{ci}")
    public String modify(@PathVariable int ci ,@RequestBody Cliente cliente){
        Cliente newCliente = clienteService.buscarCliente(ci).get();
        newCliente.setNombre(cliente.getNombre());
        newCliente.setApellido(cliente.getApellido());
        newCliente.setEmail(cliente.getEmail());
        clienteService.guardarCliente(newCliente);
        return "Cliente modificado con exito";
    }

    @PostMapping("/asignarPlan")
    public String asingPlan(@RequestBody Integer id, @RequestBody Integer ci){
        Cliente newCli = clienteService.buscarCliente(ci).get();
        Plan newPlan = planService.buscarPlan(id).get();

        List<Plan> listaP = newCli.getclientesViajes();
        List<Cliente> listaC = newPlan.getClientesViajes();

        listaP.add(newPlan);
        listaC.add(newCli);

        clienteService.guardarCliente(newCli);
        planService.guardarPlan(newPlan);
        return "El cliente fue relacionado al plan con èxito";
    }

    @GetMapping("/listarPlanes/{ci}")
    public List<Plan> listarPlanes(@PathVariable Integer ci)
    {
       Cliente cli = clienteService.buscarCliente(ci).get();
        return cli.getclientesViajes();
    }
}
