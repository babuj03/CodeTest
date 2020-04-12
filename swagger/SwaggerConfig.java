package com.netpay.swagger;

import java.util.Arrays;
import java.util.HashSet;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {  
	

	/*
	 * public static final Contact DEFAULT_CONTACT = new Contact("Babu Jayaraman",
	 * "https://github.com/babuj03", "babuj03@gmail.com"); public static final
	 * ApiInfo DEFAULT = new ApiInfo("Api Documentation", "Api Documentation",
	 * "1.0", "urn:tos", DEFAULT_CONTACT, "Apache 2.0",
	 * "http://www.apache.org/licenses/LICENSE-2.0", new
	 * ArrayList<VendorExtension>());
	 */
	  
	  public static final Contact DEFAULT_CONTACT = new Contact("Babu Jayaraman", "https://github.com/babuj03", "babuj03@gmail.com");
	  public static final ApiInfo DEFAULT = new ApiInfo("Api Documentation", "Api Documentation", "1.0", "urn:tos",
	          DEFAULT_CONTACT, "Apache 2.0", "http://www.apache.org/licenses/LICENSE-2.0");

	  
    @Bean
    public Docket api() { 
    	
        return new Docket(DocumentationType.SWAGGER_2)  
        		.apiInfo(DEFAULT)
        		.produces(new HashSet<String>(Arrays.asList("application/json","application/xml")))
        		.consumes(new HashSet<String>(Arrays.asList("application/json","application/xml")))
          .select()                                  
          .apis(RequestHandlerSelectors.any())              
          .paths(PathSelectors.any())                          
          .build();                                           
    }
}
