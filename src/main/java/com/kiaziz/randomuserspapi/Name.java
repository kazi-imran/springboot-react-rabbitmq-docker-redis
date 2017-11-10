package com.kiaziz.randomuserspapi;

import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.ToString;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
"title",
"first",
"last"
})
@ToString
public class Name implements Serializable
{

@JsonProperty("title")
private String title;
@JsonProperty("first")
private String first;
@JsonProperty("last")
private String last;
private final static long serialVersionUID = 7521659271779014530L;

/**
* No args constructor for use in serialization
* 
*/
public Name() {
}

/**
* 
* @param title
* @param last
* @param first
*/
public Name(String title, String first, String last) {
super();
this.title = title;
this.first = first;
this.last = last;
}

@JsonProperty("title")
public String getTitle() {
return title;
}

@JsonProperty("title")
public void setTitle(String title) {
this.title = title;
}

@JsonProperty("first")
public String getFirst() {
return first;
}

@JsonProperty("first")
public void setFirst(String first) {
this.first = first;
}

@JsonProperty("last")
public String getLast() {
return last;
}

@JsonProperty("last")
public void setLast(String last) {
this.last = last;
}

}