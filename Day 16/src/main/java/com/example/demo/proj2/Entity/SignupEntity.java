package com.example.demo.proj2.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="signup_details")
public class SignupEntity {
	@Id
	private int id;
	private String username;
	public SignupEntity(int id,String username, String first_name, String last_name, String password, String email) {
		super();
		this.id=id;
		this.username = username;
		this.first_name = first_name;
		this.last_name = last_name;
		this.password = password;
		this.email = email;
	}

	@Override
	public String toString() {
		return "SignupEntity [id=" + id + ",username=" + username + ", first_name=" + first_name + ", last_name=" + last_name
				+ ", password=" + password + ", email=" + email + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id=id;
	}
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	

	private String first_name;
	private String last_name;
	private String password;
	private String email;

	
	public SignupEntity()
	{
		
	}
}
	


