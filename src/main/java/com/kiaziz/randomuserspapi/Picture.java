package com.kiaziz.randomuserspapi;

import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.ToString;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
"large",
"medium",
"thumbnail"
})
@ToString
public class Picture implements Serializable
{

@JsonProperty("large")
private String large;
@JsonProperty("medium")
private String medium;
@JsonProperty("thumbnail")
private String thumbnail;
private final static long serialVersionUID = -5510385475376038529L;

/**
* No args constructor for use in serialization
* 
*/
public Picture() {
}

/**
* 
* @param thumbnail
* @param medium
* @param large
*/
public Picture(String large, String medium, String thumbnail) {
super();
this.large = large;
this.medium = medium;
this.thumbnail = thumbnail;
}

@JsonProperty("large")
public String getLarge() {
return large;
}

@JsonProperty("large")
public void setLarge(String large) {
this.large = large;
}

@JsonProperty("medium")
public String getMedium() {
return medium;
}

@JsonProperty("medium")
public void setMedium(String medium) {
this.medium = medium;
}

@JsonProperty("thumbnail")
public String getThumbnail() {
return thumbnail;
}

@JsonProperty("thumbnail")
public void setThumbnail(String thumbnail) {
this.thumbnail = thumbnail;
}

}