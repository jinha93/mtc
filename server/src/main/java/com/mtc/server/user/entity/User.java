package com.mtc.server.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
public class User {
	
	@Id
	private String userId;
	
	@JsonIgnore // json에서 숨기기
	private String password;
	
	private String nickname;
	
	@Builder
	public User(String userId, String password, String nickname) {
		this.userId = userId;
		this.password = password;
		this.nickname = nickname;
	}
}
