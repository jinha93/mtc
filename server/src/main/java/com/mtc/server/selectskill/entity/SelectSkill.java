package com.mtc.server.selectskill.entity;

import com.mtc.server.mydps.entity.MyDps;
import com.mtc.server.skill.entity.Skill;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
public class SelectSkill {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int selectSkillDpsId;
	
	private int idx;
	
	private int skillIdx;
	
	@ManyToOne
	@JoinColumn(name = "skill_id")
	private Skill skill;
	
	@ManyToOne
	@JoinColumn(name = "my_dps_id")
	private MyDps myDps;
	
	private float dps;
	
	@Builder
	public SelectSkill(int selectSkillDpsId, int idx, int skillIdx, Skill skill, MyDps myDps, float dps) {
		this.selectSkillDpsId = selectSkillDpsId;
		this.idx = idx;
		this.skillIdx = skillIdx;
		this.skill = skill;
		this.myDps = myDps;
		this.dps = dps;
	}
	
	
}
