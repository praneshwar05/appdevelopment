package com.example.demo.proj2.exception;

public class PatientNotFoundException extends RuntimeException {
	  
	public PatientNotFoundException(int patient_id){
	        super("Could not found the patient with id "+ patient_id);
	    }
}

