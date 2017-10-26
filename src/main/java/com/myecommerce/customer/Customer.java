package com.myecommerce.customer;

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
import com.myecommerce.account.Account;
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
public class Customer extends BaseEntity
{
	
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
	
	public final String getLargePictureLink()
	{
		return largePictureLink;
	}
	
	public final void setLargePictureLink(String largePictureLink)
	{
		this.largePictureLink = largePictureLink;
	}
	
	public final String getMediumPictureLink()
	{
		return mediumPictureLink;
	}
	
	public final void setMediumPictureLink(String mediumPictureLink)
	{
		this.mediumPictureLink = mediumPictureLink;
	}
	
	public final String getThumbnailLink()
	{
		return thumbnailLink;
	}
	
	public final void setThumbnailLink(String thumbnailLink)
	{
		this.thumbnailLink = thumbnailLink;
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
