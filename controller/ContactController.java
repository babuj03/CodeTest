package com.netpay.controller;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.mvc.ControllerLinkBuilder;
//import org.springframework.hateoas.mvc.ControllerLinkBuilder;
//import org.springframework.hateoas.server.mvc.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.netpay.entity.Contact;
import com.netpay.service.ContactService;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.Authorization;
import io.swagger.annotations.ResponseHeader;
import io.swagger.annotations.Scope;
import io.swagger.annotations.SecurityDefinition;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;


@RestController
@RequestMapping("/api/contact")
public class ContactController {
	
	@Autowired
	ContactService contactService;
	
	@PostMapping(path ="/list/save" )
	public ResponseEntity<Object> saveContacts(@RequestBody List<Contact> contact) throws Exception {		
		List<Contact> savedContactList=  contactService.saveAllContacts(contact);	
		 List<ResponseEntity>  entities = new  ArrayList<ResponseEntity> ();
		for (Contact savedContact : savedContactList){
			URI location =ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedContact.getId()).toUri();
			entities.add(ResponseEntity.created(location).build());
		}
	     return new ResponseEntity<Object>(entities, HttpStatus.CREATED);
	}
	
	@PostMapping(path ="/save" )
	//@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Object> save(@RequestBody @Valid Contact contact) throws Exception {		
	    Contact saveContact = contactService.saveContacts(contact);		     
	    URI Location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand( saveContact.getId()).toUri();
		return ResponseEntity.created(Location).build(); 		
	}
	
	@GetMapping("/get/{id}")
	 @ApiResponses(value = { 
		      @ApiResponse(code = 400, message = "Invalid ID supplied", 
					      responseHeaders = @ResponseHeader(name = "X-Rack-Cache",
					      description = "Explains whether or not a cache was used",
					      response = Boolean.class)),
		      @ApiResponse(code = 404, message = "Contact not found") })
	@ApiOperation(authorizations = {@Authorization(value="basicAuth")}, value = "")
	public Resource<Contact> getContact(@PathVariable Long id) throws Exception {	
		
		Contact contact = contactService.findById(id);	
		
		 Resource<Contact> contactRrc = new Resource<Contact>(contact);
		 
		 Link selfLink = linkTo(methodOn(ContactController.class)
		          .getContact(contact.getId())).withSelfRel();
		  contactRrc.add(selfLink);
		 
		
		  ControllerLinkBuilder linkTo = linkTo(methodOn(this.getClass()).getContacts());
		  contactRrc.add(linkTo.withRel("all-contacts"));

		  ControllerLinkBuilder linkTo1 = linkTo(methodOn(this.getClass()).save(new Contact()));
		  contactRrc.add(linkTo1.withRel("save-contact"));
		  
		  ControllerLinkBuilder linkTo2 = linkTo(methodOn(this.getClass()).deleteContact(id));
		  contactRrc.add(linkTo2.withRel("delete-contact"));
		 return contactRrc;
	}
		
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Void> deleteContact(@PathVariable Long id) {	
		contactService.deleteById(id);		
		return new ResponseEntity<Void>( HttpStatus.OK );

	}
	
	@GetMapping("/get/all")
	public List<Contact> getContacts() {
		return  contactService.findAll();
	}
	
	@GetMapping
	public String message() {
		return "Hi from server";
	}
}
	
