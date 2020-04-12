
package com.netpay.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.netpay.entity.Search;
import com.netpay.service.SearchService;

@RestController
@RequestMapping("/api/search")
public class SearchController {

	@Autowired
	SearchService searchService;


	@GetMapping
	public List<Search> searchSubmit(@RequestParam String text) {		
		List<Search> list = searchService.searchByFilePathLike(text);		
		return list;
	}
  
  }
