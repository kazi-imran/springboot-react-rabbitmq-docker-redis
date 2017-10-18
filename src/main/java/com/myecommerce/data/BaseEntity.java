package com.myecommerce.data;



import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.Date;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

import org.hibernate.annotations.Type;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Data;
import lombok.ToString;

@Data
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@ToString
public class BaseEntity {

 @CreatedDate
 //@Type(type = "org.jadira.usertype.dateandtime.threeten.PersistentZonedDateTime")
 private ZonedDateTime creationTime; 

 @LastModifiedDate
 //@Type(type = "org.jadira.usertype.dateandtime.threeten.PersistentZonedDateTime")
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

