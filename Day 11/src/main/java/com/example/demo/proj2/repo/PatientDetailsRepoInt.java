package com.example.demo.proj2.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.demo.proj2.Entity.PatientDetailsEntity;

@EnableJpaRepositories

@Repository
public interface PatientDetailsRepoInt extends JpaRepository<PatientDetailsEntity,Integer>{

}