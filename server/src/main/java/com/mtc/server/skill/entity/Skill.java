package com.mtc.server.skill.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
public class Skill {
	
	@Id
	private String skillId;
	
	private String skillName;
	
	private String type;
	
	private String attribute;
	
	private int hitCnt;
	
	private float cooldown;
	
	private float coefficient;

	@Builder
	public Skill(String skillId, String skillName, String type, String attribute, int hitCnt, float cooldown, float coefficient) {
		this.skillId = skillId;
		this.skillName = skillName;
		this.type = type;
		this.attribute = attribute;
		this.hitCnt = hitCnt;
		this.cooldown = cooldown;
		this.coefficient = coefficient;
	}
	
	

}
