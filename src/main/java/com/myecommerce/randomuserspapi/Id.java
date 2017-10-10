package com.myecommerce.randomuserspapi;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.ToString;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({ "name", "value" })
@ToString
public class Id implements Serializable {

	@JsonProperty("name")
	private String name;
	@JsonProperty("value")
	private String value;
	private final static long serialVersionUID = 4212261353239066767L;

	/**
	 * No args constructor for use in serialization
	 * 
	 */
	public Id() {
	}

	/**
	 * 
	 * @param name
	 * @param value
	 */
	public Id(String name, String value) {
		super();
		this.name = name;
		this.value = value;
	}

	@JsonProperty("name")
	public String getName() {
		return name;
	}

	@JsonProperty("name")
	public void setName(String name) {
		this.name = name;
	}

	@JsonProperty("value")
	public String getValue() {
		return value;
	}

	@JsonProperty("value")
	public void setValue(String value) {
		this.value = value;
	}

}
