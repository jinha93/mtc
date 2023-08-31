package com.mtc.server.userskill.entity;

import com.mtc.server.skill.entity.Skill;
import com.mtc.server.user.entity.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserSkillDto {

	private User user;
	
	private Skill skill;
	
	private int level = 1;
	
}
