package com.netpay.exception;
import javax.validation.ConstraintViolationException;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
@ControllerAdvice
public class ContactExceptionHandler {
@ExceptionHandler(value = { Exception.class })
public ResponseEntity<Object> handleAnyException(Exception ex, WebRequest request) {
	
	 if(ex instanceof ConstraintViolationException) {	
		 return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body( ((ConstraintViolationException) ex).getConstraintViolations().iterator().next().getMessage());
		 
	 }
	
	 if(ex instanceof DataIntegrityViolationException) {	
		 return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body( "Email should be unique");
	 } 
	
	
        return new ResponseEntity<>(
          ex.getMessage(), new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}