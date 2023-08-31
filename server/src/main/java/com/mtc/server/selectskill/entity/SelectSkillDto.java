package com.mtc.server.selectskill.entity;

import com.mtc.server.mydps.entity.MyDps;
import com.mtc.server.skill.entity.Skill;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SelectSkillDto {

	private int selectSkillDpsId;
	
	private int idx;
	
	private int skillIdx;
	
	private Skill skill;
	
	private MyDps myDps;
	
	private float dps;
	
}
