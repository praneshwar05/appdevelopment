package com.example.demo.proj2.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.proj2.Entity.PatientDetailsEntity;

public interface PatientServiceInterface {
	 
	public PatientDetailsEntity savePatient(PatientDetailsEntity patient);
	public Optional<PatientDetailsEntity> getPatientById(int patient_id);
	public List<PatientDetailsEntity> getAllPatient();
	public PatientDetailsEntity updatePatient(int patient_id, PatientDetailsEntity patient);
	public void deletePatient(int patient_id);
}
