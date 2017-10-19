package com.myecommerce.account;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.myecommerce.address.Address;
import com.myecommerce.creditcard.CreditCard;
import com.myecommerce.customer.Customer;
import com.myecommerce.data.BaseEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
//@Data
@NoArgsConstructor
@AllArgsConstructor
//@ToString
public class Account extends BaseEntity {

 @Id
 @GeneratedValue(strategy = GenerationType.AUTO)
 private Long id; // <1>

 private String accountNumber;
 
 @OneToOne(cascade=CascadeType.ALL)
 @JoinColumn(name="customer_id",nullable=false) 
 private Customer customer;

 // <2>
 @OneToMany( fetch = FetchType.EAGER)
 private Set<CreditCard> creditCards = new HashSet<>();

 @OneToMany( fetch = FetchType.EAGER,cascade=CascadeType.ALL)
 //@JsonManagedReference
 //@JsonBackReference
 
 private Set<Address> addresses = new HashSet<>();

 public Account(String accountNumber, Set<Address> addresses) {
  this.accountNumber = accountNumber;
  this.addresses.addAll(addresses);
 }

 public Account(String accountNumber) {
  this.accountNumber = accountNumber;
 }

public final Long getId() {
	return id;
}

public final void setId(Long id) {
	this.id = id;
}

public final String getAccountNumber() {
	return accountNumber;
}

public final void setAccountNumber(String accountNumber) {
	this.accountNumber = accountNumber;
}

public final Customer getCustomer() {
	return customer;
}

public final void setCustomer(Customer customer) {
	this.customer = customer;
}

public final Set<CreditCard> getCreditCards() {
	return creditCards;
}

public final void setCreditCards(Set<CreditCard> creditCards) {
	this.creditCards = creditCards;
}

public final Set<Address> getAddresses() {
	return addresses;
}

public final void setAddresses(Set<Address> addresses) {
	this.addresses = addresses;
}
 
 
 
}
