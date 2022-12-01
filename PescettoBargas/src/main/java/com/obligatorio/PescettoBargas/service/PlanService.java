package com.obligatorio.PescettoBargas.service;

import com.obligatorio.PescettoBargas.model.Plan;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface PlanService {
    public Plan guardarPlan(Plan plan);
    public List<Plan> listarPlan();
    public void borrarPlan(int id);
    public Optional<Plan> buscarPlan(Integer id);
    public Plan modificarPlan(Plan plan);
}
