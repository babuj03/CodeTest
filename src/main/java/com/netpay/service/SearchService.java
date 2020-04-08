package com.netpay.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.netpay.entity.Search;
import com.netpay.repo.SearchRespository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SearchService {
	
	@Autowired
	SearchRespository searchRespository;

    public List<Search> findAll() {
        return searchRespository.findAll();
    }

    public Optional<Search> findById(Long id) {
        return searchRespository.findById(id);
    }
    
    public List<Search> searchByFilePathLike(String searchText) {
    	 	
        return searchRespository.searchByFilePathLike(searchText,searchText);
    }

    public Search save(Search stock) {
        return searchRespository.save(stock);
    }

    public void deleteById(Long id) {
    	searchRespository.deleteById(id);
    }
}