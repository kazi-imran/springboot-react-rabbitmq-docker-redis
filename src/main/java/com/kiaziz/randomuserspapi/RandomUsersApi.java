package com.kiaziz.randomuserspapi;

import java.io.Serializable;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.ToString;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
"results",
"info"
})
@ToString
public class RandomUsersApi implements Serializable
{

@JsonProperty("results")
private List<Result> results = null;
@JsonProperty("info")
private Info info;
private final static long serialVersionUID = 5464948631116801602L;

/**
* No args constructor for use in serialization
* 
*/
public RandomUsersApi() {
}

/**
* 
* @param results
* @param info
*/
public RandomUsersApi(List<Result> results, Info info) {
super();
this.results = results;
this.info = info;
}

@JsonProperty("results")
public List<Result> getResults() {
return results;
}

@JsonProperty("results")
public void setResults(List<Result> results) {
this.results = results;
}

@JsonProperty("info")
public Info getInfo() {
return info;
}

@JsonProperty("info")
public void setInfo(Info info) {
this.info = info;
}

}
