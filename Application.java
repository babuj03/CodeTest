package com.netpay;

import javax.annotation.PostConstruct;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.h2.tools.Server;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application extends SpringBootServletInitializer {

	 private static final Logger LOGGER = LogManager.getLogger(Application.class);
	
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	
	@Bean
	public org.h2.tools.Server h2Server() {
	    Server server = new Server();
	    try {
	        server.runTool("-tcp");
	        server.runTool("-tcpAllowOthers");
	    } catch (Exception e) {
	        e.printStackTrace();
	    }
	    return server;

	}
	
	
	/*
	 * @Override protected SpringApplicationBuilder
	 * configure(SpringApplicationBuilder application) { return
	 * application.sources(Application.class); }
	 */
	 
	 
	/*
	 * @Autowired SearchService searchService;
	 */
	 
	 @PostConstruct
	  public void readfile() throws Exception 
	    {
		
		/*
		 * try {
		 * 
		 * Stream<String> stream =
		 * Files.lines(Paths.get(System.getProperty("catalina.base")+File.separator+
		 * "conf"+File.separator+"filesext.txt")); stream.forEach(path->{ Search entity
		 * = new Search(); Path filePath = Paths.get(""+path); Path fileName =
		 * filePath.getFileName(); System.out.println("============"+path);
		 * LOGGER.info("============" +path); if(path.contains(".")) {
		 * entity.setFileName(fileName.toString());
		 * 
		 * entity.setDirectory(filePath.getParent().getFileName().toString());
		 * entity.setPath(filePath.toString()); }else {
		 * entity.setDirectory(filePath.getFileName()!=null?filePath.getFileName().
		 * toString():null); entity.setPath(filePath.toString()); }
		 * 
		 * searchService.save(entity); } );
		 * 
		 * } catch (Exception e) { e.printStackTrace();
		 * LOGGER.info("***error load file ****"+e); }
		 */
		
	      
	    }

}
