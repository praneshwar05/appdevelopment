package com.example.demo.proj2.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="login_details")
public class LoginEntity {
	@Id
	private int id;
	public LoginEntity(String password,String email) {
		super();
		this.password = password;
		this.email=email;
	}
	@Override
	public String toString() {
		return "LoginEntity [password=" + password + ",email=" + email + "]";
	}
	
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail()
	{
		return email;
	}
	public void setEmail(String email)
	{
		this.email=email;
	}

	private String password;
	private String email;
	public LoginEntity()
	{
		
	}
	
}
