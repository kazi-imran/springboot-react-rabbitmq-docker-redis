package com.kiaziz.randomuserspapi;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.ToString;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
"username",
"password",
"salt",
"md5",
"sha1",
"sha256"
})
@ToString
public class Login implements Serializable
{

@JsonProperty("username")
private String username;
@JsonProperty("password")
private String password;
@JsonProperty("salt")
private String salt;
@JsonProperty("md5")
private String md5;
@JsonProperty("sha1")
private String sha1;
@JsonProperty("sha256")
private String sha256;
private final static long serialVersionUID = -4449585015745789382L;

/**
* No args constructor for use in serialization
* 
*/
public Login() {
}

/**
* 
* @param username
* @param sha256
* @param md5
* @param sha1
* @param password
* @param salt
*/
public Login(String username, String password, String salt, String md5, String sha1, String sha256) {
super();
this.username = username;
this.password = password;
this.salt = salt;
this.md5 = md5;
this.sha1 = sha1;
this.sha256 = sha256;
}

@JsonProperty("username")
public String getUsername() {
return username;
}

@JsonProperty("username")
public void setUsername(String username) {
this.username = username;
}

@JsonProperty("password")
public String getPassword() {
return password;
}

@JsonProperty("password")
public void setPassword(String password) {
this.password = password;
}

@JsonProperty("salt")
public String getSalt() {
return salt;
}

@JsonProperty("salt")
public void setSalt(String salt) {
this.salt = salt;
}

@JsonProperty("md5")
public String getMd5() {
return md5;
}

@JsonProperty("md5")
public void setMd5(String md5) {
this.md5 = md5;
}

@JsonProperty("sha1")
public String getSha1() {
return sha1;
}

@JsonProperty("sha1")
public void setSha1(String sha1) {
this.sha1 = sha1;
}

@JsonProperty("sha256")
public String getSha256() {
return sha256;
}

@JsonProperty("sha256")
public void setSha256(String sha256) {
this.sha256 = sha256;
}

}
