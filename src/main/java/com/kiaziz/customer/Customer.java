package com.kiaziz.customer;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.kiaziz.account.Account;
import com.kiaziz.data.BaseEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
//@Data
@NoArgsConstructor
@AllArgsConstructor
//@ToString
public class Customer extends BaseEntity implements Serializable
{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 5234963511038202262L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String firstName;
	
	private String lastName;
	
	private String email;
	
	private String gender;
	
	@JsonProperty("large")
	private String large;
	@JsonProperty("medium")
	private String medium;
	@JsonProperty("thumbnail")
	private String thumbnail;
		
	@OneToOne
	@JoinColumn(name = "account_id")
	private Account account;
	
	@Version 
	@JsonIgnore 
	private Long version;
	
	public Customer(String firstName, String lastName, String email, String gender, Account account)
	{
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.account = account;
		this.gender = gender;
	}
	
	
	
	public final Long getId()
	{
		return id;
	}
	
	public final void setId(Long id)
	{
		this.id = id;
	}
	
	public final String getFirstName()
	{
		return firstName;
	}
	
	public final void setFirstName(String firstName)
	{
		this.firstName = firstName;
	}
	
	public final String getLastName()
	{
		return lastName;
	}
	
	public final void setLastName(String lastName)
	{
		this.lastName = lastName;
	}
	
	public final String getEmail()
	{
		return email;
	}
	
	public final void setEmail(String email)
	{
		this.email = email;
	}
	
	public final String getGender()
	{
		return gender;
	}
	
	public final void setGender(String gender)
	{
		this.gender = gender;
	}
	
	public final String getLarge()
	{
		return large;
	}
	
	public final void setLarge(String large)
	{
		this.large = large;
	}
	
	public final String getMedium()
	{
		return medium;
	}
	
	public final void setMedium(String medium)
	{
		this.medium = medium;
	}
	
	public final String getThumbnail()
	{
		return thumbnail;
	}
	
	public final void setThumbnail(String thumbnail)
	{
		this.thumbnail = thumbnail;
	}
	
	public final Account getAccount()
	{
		return account;
	}
	
	public final void setAccount(Account account)
	{
		this.account = account;
	}
	
}
