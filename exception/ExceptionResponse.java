package com.netpay.exception;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class ExceptionResponse {
	
	private List<String> messages = new ArrayList<String>();	
	private int status;
	private LocalDateTime  timestamp;
		
	public ExceptionResponse() {
		super();
	}
	

	public ExceptionResponse(String message, int status, LocalDateTime timestamp) {
		super();
		this.messages.add(message);		
		this.status = status;
		this.timestamp = timestamp;
	}


	public  List<String> getMessages() {
		return messages;
	}

	public void setMessages(List<String> messages) {
		this.messages = messages;
	}

	

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public LocalDateTime getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}

	@Override
	public String toString() {
		return "ExceptionResponse [messages=" + messages + ",  status=" + status + ", timestamp="
				+ timestamp + "]";
	}
	

	
	 
}
