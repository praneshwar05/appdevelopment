package com.example.demo.proj2.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="fp_details")
public class ForgotPasswordEntity {
	@Id
	private int id;
	public ForgotPasswordEntity(String email, String password,int id) {
		super();
		this.email = email;
		this.password = password;
		this.id = id;
	}
	@Override
	public String toString() {
		return "ForgotPasswordEntity [id=" + id + ", email=" + email + ", password=" + password + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	private String email,password;
	public ForgotPasswordEntity()
	{
	}
	

}
