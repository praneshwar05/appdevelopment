package com.example.demo.proj2.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.proj2.Entity.ForgotPasswordEntity;

public interface ForgotPasswordRepoInt extends JpaRepository<ForgotPasswordEntity,Integer>{
	
}
