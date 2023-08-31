package com.mtc.server.selectskill.repository;

import java.util.List;

import com.mtc.server.mydps.entity.MyDps;
import com.mtc.server.selectskill.entity.SelectSkill;

public interface SelectSkillRepositoryCustom {
	public List<SelectSkill> findByMyDps(MyDps myDps);
}
