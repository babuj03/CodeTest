package com.netpay.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.netpay.entity.Contact;
import com.netpay.service.ContactService;


@RestController
@RequestMapping("/api/contact/")
public class ContactController {
	 @Autowired
	 ContactService contactService;
	
	@PostMapping(path ="/save" )
	public String save(@RequestBody List<Contact> contact) throws Exception {		
	     contactService.saveAllContacts(contact);		
		return  "Contacts saved successfully"; //ResponseEntity.status(HttpStatus.OK).body("Contacts saved successfully");
	}
		
	@GetMapping("/fetch")
	public List<Contact> getContacts() {
		return  contactService.findAll();
	}
	
	@GetMapping
	public String message() {
		return "Hi from server";
	}
}
	
