package com.example.demo.proj2.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
public class DoctorDetailsEntity {
	public DoctorDetailsEntity() {
		super();
		// TODO Auto-generated constructor stub
	}	
	
	public DoctorDetailsEntity(Integer id, String name, int age, String depSurgeon, String gender) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.depSurgeon = depSurgeon;
		this.gender = gender;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String name;
	private int age;
	private String depSurgeon;
	private String gender;
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getDepSurgeon() {
		return depSurgeon;
	}

	public void setDepSurgeon(String depSurgeon) {
		this.depSurgeon = depSurgeon;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	@Override
	public String toString() {
		return "DoctorDetailsEntity [id=" + id + ", name=" + name + ", age=" + age + ", depSurgeon=" + depSurgeon
				+ ", gender=" + gender + "]";
	}
}
