package com.example.demo.proj2.service;

import java.util.List;

import com.example.demo.proj2.Entity.DoctorDetailsEntity;

public interface DoctorDetailsService {
	public DoctorDetailsEntity saveDoctor(DoctorDetailsEntity doctor);

	public List<DoctorDetailsEntity> getAllDoctor();

	public DoctorDetailsEntity getDoctorById(Integer id);

	public String deleteDoctor(Integer id);

	public DoctorDetailsEntity editDoctor(DoctorDetailsEntity doctor,Integer id);
}
