package com.example.demo.proj2.exception;

public class DoctorNotFoundException extends RuntimeException{
	public DoctorNotFoundException(int id){
        super("Could not found the doctor with id "+ id);
    }

}
