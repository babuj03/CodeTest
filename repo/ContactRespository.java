package com.netpay.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.netpay.entity.Contact;
public interface ContactRespository extends JpaRepository<Contact, Long> {

}
