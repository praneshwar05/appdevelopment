package com.example.demo.proj2.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.proj2.Entity.PatientDetailsEntity;
import com.example.demo.proj2.exception.PatientNotFoundException;
import com.example.demo.proj2.repo.PatientDetailsRepoInt;



@RestController
@CrossOrigin("http://localhost:3000/")
public class PatientDetailsController {
	@Autowired
	private PatientDetailsRepoInt patientRepository;

	@PostMapping("/patient")
	public PatientDetailsEntity newPatient(@RequestBody PatientDetailsEntity newPatient) {
	    return patientRepository.save(newPatient);
	}

	@GetMapping("/getdata")
	public List<PatientDetailsEntity> getAllPatients() {
	    return patientRepository.findAll();
	}
	
	@GetMapping("/getdata/{patient_id}")
	public PatientDetailsEntity getPatientById(@PathVariable int patient_id) {
	    return patientRepository.findById(patient_id)
	            .orElseThrow(() -> new PatientNotFoundException(patient_id));
	}

	@PutMapping("/patient/{patient_id}")
	public PatientDetailsEntity updatePatient(@RequestBody PatientDetailsEntity newPatient, @PathVariable int patient_id) {
	    return patientRepository.findById(patient_id)
	            .map(patient -> {
	                patient.setPatient_id(newPatient.getPatient_id());
	                patient.setFirst_name(newPatient.getFirst_name());
	                patient.setLast_name(newPatient.getLast_name());
	                patient.setPhone_no(newPatient.getPhone_no());
	                patient.setAddress(newPatient.getAddress());
	                patient.setRoom_no(newPatient.getRoom_no());
	                patient.setAge(newPatient.getAge());
	             
	                // Update other patient properties as needed
	                return patientRepository.save(patient);
	            }).orElseThrow(() -> new PatientNotFoundException(patient_id));
	}

	@DeleteMapping("/patient/{patient_id}")
	public String deletePatient(@PathVariable int patient_id) {
	    if (!patientRepository.existsById(patient_id)) {
	        throw new PatientNotFoundException(patient_id);
	    }
	    patientRepository.deleteById(patient_id);
	    return "Patient with id " + patient_id + " has been deleted successfully.";
	}
}
