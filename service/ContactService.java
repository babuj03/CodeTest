package com.netpay.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.netpay.entity.Contact;
import com.netpay.exception.ContactNotFoundException;
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

    public Contact findById(Long id) {
        return contactRespository.findById(id).orElseThrow(()->new ContactNotFoundException(id));
    }
    
    @Transactional(value = TxType.SUPPORTS)
    public List<Contact> saveAllContacts(List<Contact> contacts) throws Exception {
    	List<Contact> savedContactList = new ArrayList<Contact>();
    	for(Contact contact : contacts) {    		
    		savedContactList.add(contactRespository.save(contact));    		  
    	}  
      return savedContactList;
    }
    
    public Contact saveContacts(Contact contact) throws Exception {      		
    		return contactRespository.save(contact);    
    }

    public void deleteById(Long id) {
    	findById(id);
    	contactRespository.deleteById(id);
    }
}
