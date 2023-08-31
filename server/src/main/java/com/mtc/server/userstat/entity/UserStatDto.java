package com.mtc.server.userstat.entity;

import com.mtc.server.stat.entity.Stat;
import com.mtc.server.user.entity.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserStatDto {
	
	private User user;
	
	private Stat stat;
	
	private float value = 0;
	
}
