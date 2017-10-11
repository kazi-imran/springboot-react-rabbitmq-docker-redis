package com.myecommerce.randomuserspapi;

import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.ToString;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({ "street", "city", "state", "postcode" })
@ToString
public class Location implements Serializable {

	@JsonProperty("street")
	private String street;
	@JsonProperty("city")
	private String city;
	@JsonProperty("state")
	private String state;
	@JsonProperty("postcode")
	private String postcode;
	private final static long serialVersionUID = -8175398837569431902L;

	/**
	 * No args constructor for use in serialization
	 * 
	 */
	public Location() {
	}

	/**
	 * 
	 * @param street
	 * @param state
	 * @param postcode
	 * @param city
	 */
	public Location(String street, String city, String state, String postcode) {
		super();
		this.street = street;
		this.city = city;
		this.state = state;
		this.postcode = postcode;
	}

	@JsonProperty("street")
	public String getStreet() {
		return street;
	}

	@JsonProperty("street")
	public void setStreet(String street) {
		this.street = street;
	}

	@JsonProperty("city")
	public String getCity() {
		return city;
	}

	@JsonProperty("city")
	public void setCity(String city) {
		this.city = city;
	}

	@JsonProperty("state")
	public String getState() {
		return state;
	}

	@JsonProperty("state")
	public void setState(String state) {
		this.state = state;
	}

	@JsonProperty("postcode")
	public String getPostcode() {
		return postcode;
	}

	@JsonProperty("postcode")
	public void setPostcode(String postcode) {
		this.postcode = postcode;
	}

}
