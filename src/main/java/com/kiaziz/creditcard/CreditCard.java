package com.kiaziz.creditcard;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.kiaziz.account.Account;
import com.kiaziz.data.BaseEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@ToString
public class CreditCard extends BaseEntity implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -710402798395249920L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String number;

	@OneToOne
	@JoinColumn(name = "account_id")
	private Account account;

	@Enumerated(EnumType.STRING)
	private net.andreinc.mockneat.types.enums.CreditCardType type;

	public CreditCard(String number, net.andreinc.mockneat.types.enums.CreditCardType type) {
		this.number = number;
		this.type = type;
	}
}