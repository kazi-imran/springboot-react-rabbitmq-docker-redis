package com.myecommerce.randomuserspapi;


import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.ToString;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
"gender",
"name",
"location",
"email",
"login",
"dob",
"registered",
"phone",
"cell",
"id",
"picture",
"nat"
})
@ToString
public class Result implements Serializable
{

@JsonProperty("gender")
private String gender;
@JsonProperty("name")
private Name name;
@JsonProperty("location")
private Location location;
@JsonProperty("email")
private String email;
@JsonProperty("login")
private Login login;
@JsonProperty("dob")
private String dob;
@JsonProperty("registered")
private String registered;
@JsonProperty("phone")
private String phone;
@JsonProperty("cell")
private String cell;
@JsonProperty("id")
private Id id;
@JsonProperty("picture")
private Picture picture;
@JsonProperty("nat")
private String nat;
private final static long serialVersionUID = -6571604872206167287L;

/**
* No args constructor for use in serialization
* 
*/
public Result() {
}

/**
* 
* @param picture
* @param id
* @param phone
* @param email
* @param location
* @param registered
* @param cell
* @param dob
* @param name
* @param gender
* @param nat
* @param login
*/
public Result(String gender, Name name, Location location, String email, Login login, String dob, String registered, String phone, String cell, Id id, Picture picture, String nat) {
super();
this.gender = gender;
this.name = name;
this.location = location;
this.email = email;
this.login = login;
this.dob = dob;
this.registered = registered;
this.phone = phone;
this.cell = cell;
this.id = id;
this.picture = picture;
this.nat = nat;
}

@JsonProperty("gender")
public String getGender() {
return gender;
}

@JsonProperty("gender")
public void setGender(String gender) {
this.gender = gender;
}

@JsonProperty("name")
public Name getName() {
return name;
}

@JsonProperty("name")
public void setName(Name name) {
this.name = name;
}

@JsonProperty("location")
public Location getLocation() {
return location;
}

@JsonProperty("location")
public void setLocation(Location location) {
this.location = location;
}

@JsonProperty("email")
public String getEmail() {
return email;
}

@JsonProperty("email")
public void setEmail(String email) {
this.email = email;
}

@JsonProperty("login")
public Login getLogin() {
return login;
}

@JsonProperty("login")
public void setLogin(Login login) {
this.login = login;
}

@JsonProperty("dob")
public String getDob() {
return dob;
}

@JsonProperty("dob")
public void setDob(String dob) {
this.dob = dob;
}

@JsonProperty("registered")
public String getRegistered() {
return registered;
}

@JsonProperty("registered")
public void setRegistered(String registered) {
this.registered = registered;
}

@JsonProperty("phone")
public String getPhone() {
return phone;
}

@JsonProperty("phone")
public void setPhone(String phone) {
this.phone = phone;
}

@JsonProperty("cell")
public String getCell() {
return cell;
}

@JsonProperty("cell")
public void setCell(String cell) {
this.cell = cell;
}

@JsonProperty("id")
public Id getId() {
return id;
}

@JsonProperty("id")
public void setId(Id id) {
this.id = id;
}

@JsonProperty("picture")
public Picture getPicture() {
return picture;
}

@JsonProperty("picture")
public void setPicture(Picture picture) {
this.picture = picture;
}

@JsonProperty("nat")
public String getNat() {
return nat;
}

@JsonProperty("nat")
public void setNat(String nat) {
this.nat = nat;
}

@Override
public String toString() {
	return "Result [gender=" + gender + ", name=" + name + ", location=" + location + ", email=" + email + ", login="
			+ login + ", dob=" + dob + ", registered=" + registered + ", phone=" + phone + ", cell=" + cell + ", id="
			+ id + ", picture=" + picture + ", nat=" + nat + "]";
}


}