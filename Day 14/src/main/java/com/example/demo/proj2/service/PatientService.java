package com.example.demo.proj2.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.proj2.Entity.PatientDetailsEntity;
import com.example.demo.proj2.repo.PatientDetailsRepoInt;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class PatientService implements PatientServiceInterface {
	
	   @Autowired
	    private PatientDetailsRepoInt patientRepository;

	    @Override
	    public PatientDetailsEntity savePatient(PatientDetailsEntity patient) {
	        return patientRepository.save(patient);
	    }

	    @Override
	    public Optional<PatientDetailsEntity> getPatientById(int patient_id){
	        return patientRepository.findById(patient_id);
	    }

	    @Override
	    public List<PatientDetailsEntity> getAllPatient() {
	        return patientRepository.findAll(Sort.by(Sort.Direction.DESC, "patient_id"));
	    }
	    
	    @Override
	    public PatientDetailsEntity updatePatient(int patient_id, PatientDetailsEntity patient) {
	    	PatientDetailsEntity patientToUpdate = patientRepository.findById(patient_id).orElseThrow();
	        patientToUpdate.setFirst_name(patient.getFirst_name());
	        patientToUpdate.setLast_name(patient.getLast_name());
	        patientToUpdate.setPhone_no(patient.getPhone_no());
	        patientToUpdate.setAddress(patient.getAddress());
	        patientToUpdate.setRoom_no(patient.getRoom_no());
	        patientToUpdate.setAge(patient.getAge());
	        return patientRepository.save(patientToUpdate);
	    }

	    @Override
	    public void deletePatient(int patient_id) {
	        patientRepository.deleteById(patient_id);
	    }

		
	}

