package com.obligatorio.PescettoBargas.controller;


import com.obligatorio.PescettoBargas.model.Cliente;
import com.obligatorio.PescettoBargas.model.Plan;
import com.obligatorio.PescettoBargas.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/plan")
public class PlanController {

    @Autowired
    private PlanService planService;

    @Autowired
    private ClienteService clienteService;

    @PostMapping("/add")
    public String add(@RequestBody Plan plan)
    {
        planService.guardarPlan(plan);
        return "Plan ingresado con èxito";
    }

    @GetMapping("/list")
    public List<Plan> list(){
        return planService.listarPlan();
    }

     @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        planService.borrarPlan(id);
        return "Plan borrado exitosamente";
     }

     @GetMapping("/{id}")
    public Plan find(@PathVariable int id){
        return planService.buscarPlan(id).get();
     }

     @PostMapping("/modify/{id}")
    public String modify(@PathVariable Integer id , @RequestBody Plan plan){
         Plan newPlan= planService.buscarPlan(id).get();
         newPlan.setFecha(plan.getFecha());
         newPlan.setDestino(plan.getDestino());
         newPlan.setModalidad(plan.getModalidad());
         newPlan.setPrecio(plan.getPrecio());
        planService.guardarPlan(newPlan);
        return "Plan modificado con exito";
     }

}
