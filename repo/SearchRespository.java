package com.netpay.repo;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.netpay.entity.Search;

public interface SearchRespository extends JpaRepository<Search, Long> {
	
	@Query("SELECT  m FROM Search m WHERE m.directory LIKE :searchDir%  OR m.fileName LIKE :searchFile%") 
	List<Search> searchByFilePathLike(@Param("searchDir") String searchDir,@Param("searchFile") String searchFile);
	
	/*
	 * @Query("SELECT  m FROM SearchEnity m WHERE m.fileName LIKE :searchFile%")
	 * List<String> searchByFilePathLike1(@Param("searchFile") String searchFile);
	 * 
	 * @Query("SELECT  m.directory FROM SearchEnity m WHERE m.directory LIKE %//:searchDir% ESCAPE '\\'"
	 * ) List<String> searchByFilePathLike2(@Param("searchDir") String searchDir);
	 */
}