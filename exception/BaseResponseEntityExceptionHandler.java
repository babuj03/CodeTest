package com.netpay.exception;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class BaseResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {
	
	@ExceptionHandler(ContactNotFoundException.class)
	protected ResponseEntity<ExceptionResponse> handleNotFoundException(Exception ex,  WebRequest request) {		
		ExceptionResponse exceptionResponse = new ExceptionResponse();
		exceptionResponse.getMessages().add(ex.getMessage());
		exceptionResponse.setTimestamp(LocalDateTime.now());
		//exceptionResponse.setDetails(request.getContextPath());	
		exceptionResponse.setStatus( HttpStatus.NOT_FOUND.value());
		return  new ResponseEntity<ExceptionResponse>(exceptionResponse, HttpStatus.NOT_FOUND);
	}
	
	
	@ExceptionHandler(value = { Exception.class }) 
	public ResponseEntity<Object> handleAnyException(Exception ex, WebRequest request) {
		if(ex instanceof ConstraintViolationException) {
		 ExceptionResponse exceptionResponse = new ExceptionResponse();
		 String message = ((ConstraintViolationException) ex).getConstraintViolations().iterator().next().getMessage();
			exceptionResponse.getMessages().add(message);
			exceptionResponse.setTimestamp(LocalDateTime.now());
			//exceptionResponse.setDetails(request.getContextPath());	
			exceptionResponse.setStatus( HttpStatus.BAD_REQUEST.value());
		     // new ExceptionResponse(HttpStatus.BAD_REQUEST, ex.getLocalizedMessage(), errors);
		    return new ResponseEntity<Object>(
		    		exceptionResponse,HttpStatus.BAD_REQUEST);
		}
		
		if(ex instanceof DataIntegrityViolationException) {
			 ExceptionResponse exceptionResponse = new ExceptionResponse();
			 String message = ((DataIntegrityViolationException) ex).getMessage().contains("(EMAIL)")?"Email should be unique" :"Unique Constraints error";
			 exceptionResponse.getMessages().add(message);
				exceptionResponse.setTimestamp(LocalDateTime.now());
				exceptionResponse.setStatus( HttpStatus.BAD_REQUEST.value());
			    return new ResponseEntity<Object>(
			    		exceptionResponse,HttpStatus.BAD_REQUEST);
			}
		  return new ResponseEntity<Object>(
	    		ex.getMessage(), HttpStatus.BAD_REQUEST);
	}
	
	
	
	
	    @Override
	    protected ResponseEntity<Object>
	    handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
	                                 HttpHeaders headers,
	                                 HttpStatus status, WebRequest request) {

	        Map<String, Object> body = new LinkedHashMap<>();
	        body.put("timestamp", LocalDateTime.now());
	        body.put("status", status.value());

	        //Get all fields errors
	        List<String> errors = ex.getBindingResult()
	                .getFieldErrors()
	                .stream()
	                .map(x -> x.getDefaultMessage())
	                .collect(Collectors.toList());

	        body.put("messages", errors);
	        
	        ExceptionResponse exceptionResponse = new ExceptionResponse();
	        exceptionResponse.setMessages(errors);
			exceptionResponse.setTimestamp(LocalDateTime.now());
			exceptionResponse.setStatus( HttpStatus.BAD_REQUEST.value());
			 return new ResponseEntity<Object>(
			    		exceptionResponse,HttpStatus.BAD_REQUEST);

	    }
}
