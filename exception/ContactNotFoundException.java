package com.netpay.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class ContactNotFoundException extends RuntimeException {
	
	public ContactNotFoundException(){
		super();
	}
	public ContactNotFoundException(Long id){
		super("Contact not found :" +id);
	}
	
	 
}

