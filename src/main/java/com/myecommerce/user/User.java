package com.myecommerce.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
	@Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 private Long id;

	 private String firstName;

	 private String lastName;

	 private String email;

//	 @OneToOne(cascade = CascadeType.ALL)
//	 private Account account;

	 public User(String firstName, String lastName, String email/*Account account
			  */
	  ) {
	  this.firstName = firstName;
	  this.lastName = lastName;
	  this.email = email;
	  //this.account = account;
	 }
}
