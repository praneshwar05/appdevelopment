package com.example.demo.proj2;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demo.proj2.repo.PatientDetailsRepoInt;

@SpringBootApplication
public class OpenApiSwaggerApplication {
	
	@Bean
	public ModelMapper modelmapper()
	{
		return new ModelMapper();
	}
	public static void main(String[]args) {
		SpringApplication.run(OpenApiSwaggerApplication.class, args);
	}
	

	
}


