package com.example.demo.proj2.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.proj2.Entity.SignupEntity;

public interface SignUpRepoInt extends JpaRepository<SignupEntity,Integer>{

	
}
