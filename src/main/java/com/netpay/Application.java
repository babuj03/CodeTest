package com.netpay;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

import javax.annotation.PostConstruct;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import com.netpay.entity.Search;
import com.netpay.service.SearchService;

@SpringBootApplication
public class Application extends SpringBootServletInitializer {

	 private static final Logger LOGGER = LogManager.getLogger(Application.class);
	
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	
	
	
	 @Override
	 protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	  return application.sources(Application.class);
	 }
	 
	 
	 @Autowired
	 SearchService searchService;
	 
	 @PostConstruct
	  public void readfile() throws Exception 
	    {
		
		 try {		
			
			 Stream<String> stream = Files.lines(Paths.get(System.getProperty("catalina.base")+File.separator+"conf"+File.separator+"filesext.txt"));
			 stream.forEach(path->{
					 Search entity = new Search(); 
					 Path filePath = Paths.get(""+path); 
					 Path fileName = filePath.getFileName();	
					 System.out.println("============"+path);
					 LOGGER.info("============" +path);
						 if(path.contains(".")) { 
								 entity.setFileName(fileName.toString());
								 
							 entity.setDirectory(filePath.getParent().getFileName().toString());
							 entity.setPath(filePath.toString());
						 }else {
							 entity.setDirectory(filePath.getFileName()!=null?filePath.getFileName().
							 toString():null); entity.setPath(filePath.toString());
						}
						 
						 searchService.save(entity); 
				 }
			 );
		 
		 } catch (Exception e) 
		 { 
			 e.printStackTrace();		
			 LOGGER.info("***error load file ****"+e);
		 }
		
	      
	    }

}
