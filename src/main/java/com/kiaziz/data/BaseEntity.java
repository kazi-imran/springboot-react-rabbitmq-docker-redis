package com.kiaziz.data;



import java.time.ZonedDateTime;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import lombok.Data;
import lombok.ToString;

@Data
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@ToString
public class BaseEntity {

 

@CreatedDate
 //@Type(type = "org.jadira.usertype.dateandtime.threeten.PersistentZonedDateTime")
//@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ")
@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ")
@JsonSerialize(using = ZonedDateTimeSerializer.class)
@JsonDeserialize(using = ZonedDateTimeDeserializer.class)
 private ZonedDateTime creationTime; 

 @LastModifiedDate
 //@Type(type = "org.jadira.usertype.dateandtime.threeten.PersistentZonedDateTime")
 //@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ")
 @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ")
 @JsonSerialize(using = ZonedDateTimeSerializer.class)
 @JsonDeserialize(using = ZonedDateTimeDeserializer.class)
 private ZonedDateTime lastModified;
 
 @PrePersist
 public void prePersist() {
	 ZonedDateTime now = ZonedDateTime.now();
     this.creationTime = now;
     this.lastModified = now;
 }
  
 @PreUpdate
 public void preUpdate() {
     this.lastModified = ZonedDateTime.now();
 }
 

}

