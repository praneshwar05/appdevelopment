package com.example.demo.proj2.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.proj2.Entity.LoginEntity;

@Repository

public interface LoginRepoInt extends JpaRepository<LoginEntity,Integer>{

	LoginEntity findByEmail(String email);
	

}


	