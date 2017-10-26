package com.myecommerce.address;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
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
public class Address extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String street1;

	private String street2;

	private String state;

	private String city;

	private String country;

	private String zipCode;

	@Enumerated(EnumType.STRING)
	private AddressType addressType;

	@OneToOne
	@JoinColumn(name = "account_id")
	// @JsonBackReference
	private Account account;

	@Version
	@JsonIgnore
	private Long version;

	public Address(String street1, String street2, String state, String city, String country, AddressType addressType,
			String zipCode) {
		this.street1 = street1;
		this.street2 = street2;
		this.state = state;
		this.city = city;
		this.country = country;
		this.addressType = addressType;
		this.zipCode = zipCode;
	}

}