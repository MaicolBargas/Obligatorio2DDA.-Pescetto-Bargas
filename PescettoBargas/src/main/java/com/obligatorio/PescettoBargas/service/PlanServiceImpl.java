package com.obligatorio.PescettoBargas.service;

import com.obligatorio.PescettoBargas.model.Plan;
import com.obligatorio.PescettoBargas.repository.PlanRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class PlanServiceImpl implements PlanService {

    @Autowired(required = true)
    private PlanRepository planRepository;

    @Override
    public Plan guardarPlan(Plan plan) {
        return planRepository.save(plan);
    }

    @Override
    public List<Plan> listarPlan() {
        return planRepository.findAll();
    }

    @Override
    public void borrarPlan(int id) {
        planRepository.deleteById(id);
    }

    @Override
    public Optional<Plan> buscarPlan(Integer id) {
        return planRepository.findById(id);
    }

    @Override
    public Plan modificarPlan(Plan plan) {
        return planRepository.saveAndFlush(plan);
    }
}
