package com.example.demo.proj2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.proj2.Entity.DoctorDetailsEntity;
import com.example.demo.proj2.repo.DoctorDetailsRepoInt;

@Service
public class DoctorDetailsServiceImpl implements DoctorDetailsService {

	@Autowired
	private DoctorDetailsRepoInt doctorRepo;

	@Override
	public DoctorDetailsEntity saveDoctor(DoctorDetailsEntity doctor) {

		return doctorRepo.save(doctor);
	}

	@Override
	public List<DoctorDetailsEntity> getAllDoctor() {
		return doctorRepo.findAll();
	}

	@Override
	public  DoctorDetailsEntity getDoctorById(Integer id) {
		return doctorRepo.findById(id).get();
	}

	@Override
	public String deleteDoctor(Integer id) {
		DoctorDetailsEntity doctor = doctorRepo.findById(id).get();

		if (doctor != null) {
			doctorRepo.delete(doctor);
			return "Product Delete Sucessfully";
		}

		return "Something wrong on server";
	}

	@Override
	public DoctorDetailsEntity  editDoctor(DoctorDetailsEntity  p, Integer id) {

		DoctorDetailsEntity oldDoctor = doctorRepo.findById(id).get();

		oldDoctor.setName(p.getName());
		oldDoctor.setAge(p.getAge());
		oldDoctor.setDepSurgeon(p.getDepSurgeon());
		oldDoctor.setGender(p.getGender());

		return doctorRepo.save(oldDoctor);
	}

	

}

