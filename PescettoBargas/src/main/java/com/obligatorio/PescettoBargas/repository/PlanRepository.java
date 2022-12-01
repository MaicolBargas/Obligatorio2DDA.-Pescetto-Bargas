package com.obligatorio.PescettoBargas.repository;

import com.obligatorio.PescettoBargas.model.Plan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PlanRepository extends JpaRepository<Plan,Integer> {
}
