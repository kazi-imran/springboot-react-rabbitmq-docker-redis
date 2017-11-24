package com.kiaziz.randomuserspapi;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.ToString;

@ToString
public class Info implements Serializable
{
	@JsonProperty("seed")
	private String seed;
	@JsonProperty("results")
	private int results;
	@JsonProperty("page")
	private int page;
	@JsonProperty("version")
	private String version;
	private final static long serialVersionUID = -4200137816848704092L;

	/**
	* No args constructor for use in serialization
	* 
	*/
	public Info() {
	}

	/**
	* 
	* @param results
	* @param page
	* @param seed
	* @param version
	*/
	public Info(String seed, int results, int page, String version) {
	super();
	this.seed = seed;
	this.results = results;
	this.page = page;
	this.version = version;
	}

	@JsonProperty("seed")
	public String getSeed() {
	return seed;
	}

	@JsonProperty("seed")
	public void setSeed(String seed) {
	this.seed = seed;
	}

	@JsonProperty("results")
	public int getResults() {
	return results;
	}

	@JsonProperty("results")
	public void setResults(int results) {
	this.results = results;
	}

	@JsonProperty("page")
	public int getPage() {
	return page;
	}

	@JsonProperty("page")
	public void setPage(int page) {
	this.page = page;
	}

	@JsonProperty("version")
	public String getVersion() {
	return version;
	}

	@JsonProperty("version")
	public void setVersion(String version) {
	this.version = version;
	}



}
