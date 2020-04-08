package com.netpay.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.netpay.entity.Contact;
import com.netpay.repo.ContactRespository;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class ContactService {
	
	@Autowired
	ContactRespository contactRespository;

    public List<Contact> findAll() {
        return contactRespository.findAll();
    }

    public Optional<Contact> findById(Long id) {
        return contactRespository.findById(id);
    }
    
    @Transactional(value = TxType.SUPPORTS)
    public void saveAllContacts(List<Contact> contacts) throws Exception {
    	for(Contact contact : contacts) {    		
    		contactRespository.save(contact);    		  
    	}       
    }

    public void deleteById(Long id) {
    	contactRespository.deleteById(id);
    }
}
