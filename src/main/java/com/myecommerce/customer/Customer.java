package com.myecommerce.customer;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.myecommerce.account.Account;
import com.myecommerce.data.BaseEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Customer extends BaseEntity {

 @Id
 @GeneratedValue(strategy = GenerationType.AUTO)
 private Long id;

 private String firstName;

 private String lastName;

 private String email;
 
 private String gender;
 
 @JsonProperty("large")
 private String largePictureLink;
 @JsonProperty("medium")
 private String mediumPictureLink;
 @JsonProperty("thumbnail")
 private String thumbnailLink;

 @OneToOne(cascade = CascadeType.ALL)
 private Account account;

 public Customer(String firstName, String lastName, String email,String  gender,
  Account account) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.account = account;
  this.gender=gender;
 }
}
