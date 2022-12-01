package com.obligatorio.PescettoBargas.service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = "com.obligatorio.PescettoBargas.repository")
public class JpaConfig {

    @Bean("PlanService")
    public PlanService planService(){
        return new PlanServiceImpl();
    }

}
