/*package com.obligatorio.PescettoBargas.controller;


import com.obligatorio.PescettoBargas.model.Cliente;
import com.obligatorio.PescettoBargas.model.Plan;
import com.obligatorio.PescettoBargas.service.ClienteService;
import com.obligatorio.PescettoBargas.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientePlan")
public class ClientePlanController {
    @Autowired
    private ClienteService clienteService;
    @Autowired
    private PlanService planService;

    @PostMapping("/asignarPlan")
    public String asingPlan(@RequestBody int ci, @RequestBody int id){
        Cliente newCli = clienteService.buscarCliente(ci).get();
        Plan newPlan = planService.buscarPlan(id).get();

        List<Plan> listaP = newCli.getListaPlanes();
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
        return cli.getListaPlanes();
    }

}*/
