package com.mtc.server.userskill.entity;

import com.mtc.server.skill.entity.Skill;
import com.mtc.server.user.entity.User;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
@IdClass(UserSKillKey.class)
public class UserSkill {
	
	@Id
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@Id
	@ManyToOne
	@JoinColumn(name = "skill_id")
	private Skill skill;
	
	private int level;

	@Builder
	public UserSkill(User user, Skill skill, int level) {
		this.user = user;
		this.skill = skill;
		this.level = level;
	}
	
	
}
