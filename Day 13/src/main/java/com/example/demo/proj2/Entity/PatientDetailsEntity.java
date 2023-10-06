package com.example.demo.proj2.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="patient_details")
public class PatientDetailsEntity {
	
	@Id
    @GeneratedValue
	private int patient_id;
	
	
	public PatientDetailsEntity() {
		super();
	}
	
	public PatientDetailsEntity(String first_name, String last_name, String phone_no, String address,
			int patient_id,int room_no, int age) {
		super();
		this.patient_id= patient_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.phone_no = phone_no;
		this.address = address;
		this.room_no = room_no;
		this.age = age;
	}


	public int getPatient_id() {
		return patient_id;
	}

	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}

	@Override
	public String toString() {
		return "PatientDetailsEntity [patient_id=" + patient_id + ", first_name=" + first_name + ", last_name="
				+ last_name + ", phone_no=" + phone_no + ", Address=" + address + ", room_no=" + room_no + ", age="
				+ age + "]";
	}
	
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name; 
	}
	public String getPhone_no() {
		return phone_no;
	}
	public void setPhone_no(String phone_no) {
		this.phone_no = phone_no;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String Address) {
		this.address = Address;
	}
	public int getRoom_no() {
		return room_no;
	}
	public void setRoom_no(int room_no) {
		this.room_no = room_no;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	 @Column(name = "first_name", length = 50)
	private String first_name;
	@Column(name = "last_name", length = 50)
	private String last_name;
	@Column(name = "phone_no", length = 12)
	private String phone_no;
	@Column(name = "address", length = 50)
	private String address;
	@Column(name = "room_no", length = 10)
	private int room_no;
	@Column(name = "age", length = 3)
	private int age;
	
}
	
