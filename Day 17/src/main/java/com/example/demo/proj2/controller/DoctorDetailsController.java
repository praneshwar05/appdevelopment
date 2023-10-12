package com.example.demo.proj2.controller;

import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.proj2.Entity.DoctorDetailsEntity;
import com.example.demo.proj2.exception.DoctorNotFoundException;
import com.example.demo.proj2.repo.DoctorDetailsRepoInt;
import com.example.demo.proj2.service.DoctorDetailsService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/doctortable")
public class DoctorDetailsController {
	 @Autowired
	    private DoctorDetailsRepoInt doctorRepo;

	    @PostMapping("/newdoctor")
	    DoctorDetailsEntity newDoctor(@RequestBody DoctorDetailsEntity  newDoctor) {
	        return doctorRepo.save(newDoctor);
	    }

	    @GetMapping("/doctors")
	    List< DoctorDetailsEntity> getAllDoctors() {
	        return doctorRepo.findAll();
	    }

	    @GetMapping("/doctor/{id}")
	    DoctorDetailsEntity getDoctorById(@PathVariable int id) {
	        return doctorRepo.findById(id)
	                .orElseThrow(() -> new DoctorNotFoundException(id));
	    }

	    @PutMapping("/doctor/{id}")
	    DoctorDetailsEntity updateDoctor(@RequestBody DoctorDetailsEntity newDoctor, @PathVariable int id) {
	        return doctorRepo.findById(id)
	                .map(doctor -> {
	                    doctor.setName(newDoctor.getName());
	                    doctor.setAge(newDoctor.getAge());
	                    doctor.setDepSurgeon(newDoctor.getDepSurgeon());
	                    doctor.setGender(newDoctor.getGender());
	                    
	                    return doctorRepo.save(doctor);
	                }).orElseThrow(() -> new DoctorNotFoundException(id));
	    }

	    @DeleteMapping("/user/{id}")
	    String deleteUser(@PathVariable int id){
	        if(!doctorRepo.existsById(id)){
	            throw new DoctorNotFoundException(id);
	        }
	        doctorRepo.deleteById(id);
	        return  "User with id "+id+" has been deleted success.";
	    }



	}
