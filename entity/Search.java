package com.netpay.entity;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotEmpty;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Data
@Getter @Setter @NoArgsConstructor
@javax.persistence.Entity(name = "Search")
public class Search {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	//@NotEmpty(message = "Please provide a valid file path")
	private String directory;
	
	
	private String fileName;
	
	
	private String path;


	LocalDate createdAt = LocalDate.now();

	
	private LocalDate updatedAt;


	public String getPath() {
		return path;
	}


	public void setPath(String path) {
		this.path = path;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getDirectory() {
		return directory;
	}


	public void setDirectory(String directory) {
		this.directory = directory;
	}


	public String getFileName() {
		return fileName;
	}


	public void setFileName(String fileName) {
		this.fileName = fileName;
	}


	public LocalDate getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(LocalDate createdAt) {
		this.createdAt = createdAt;
	}


	public LocalDate getUpdatedAt() {
		return updatedAt;
	}


	public void setUpdatedAt(LocalDate updatedAt) {
		this.updatedAt = updatedAt;
	}


	@Override
	public String toString() {
		return "SearchEnity [id=" + id + ", directory=" + directory + ", fileName=" + fileName + ", path=" + path
				+ ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + "]";
	}


	
	
	
}
