package com.example.demo.proj2.controller;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.proj2.Entity.SignupEntity;
import com.example.demo.proj2.repo.SignUpRepoInt;

@RestController
@RequestMapping("/signup")
@CrossOrigin(origins = "http://localhost:3000")
public class SignUpController {
	@Autowired
	SignUpRepoInt fetchData;
	
	@GetMapping("/get")
	List<SignupEntity>getUsers(){
		return fetchData.findAll();
	}
	@GetMapping("/get/{id}")
	Optional<SignupEntity>getUserid(@PathVariable("id") int id){
		return fetchData.findById(id);
	}
	@PostMapping("/post")
	public SignupEntity create(@RequestBody SignupEntity d) {
		return fetchData.save(d);
	}
	@PutMapping("/put/{id}")
	public SignupEntity update(@RequestBody SignupEntity d, @PathVariable("id") int id) {
		return fetchData.save(d);
	}
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable("id")int id)
	{
		fetchData.deleteById(id);
	}
	
	
}