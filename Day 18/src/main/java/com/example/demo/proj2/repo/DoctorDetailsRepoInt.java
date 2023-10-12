package com.example.demo.proj2.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.proj2.Entity.DoctorDetailsEntity;
import com.example.demo.proj2.Entity.LoginEntity;

public interface DoctorDetailsRepoInt extends JpaRepository<DoctorDetailsEntity,Integer>{ 

	

}
