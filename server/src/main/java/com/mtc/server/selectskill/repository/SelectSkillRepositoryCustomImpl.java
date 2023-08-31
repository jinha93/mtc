package com.mtc.server.selectskill.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mtc.server.mydps.entity.MyDps;
import com.mtc.server.selectskill.entity.QSelectSkill;
import com.mtc.server.selectskill.entity.SelectSkill;
import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class SelectSkillRepositoryCustomImpl implements SelectSkillRepositoryCustom{
	
	@Autowired
	JPAQueryFactory jpaQueryFactory;
	
	QSelectSkill qSelectSkill = QSelectSkill.selectSkill;

	@Override
	public List<SelectSkill> findByMyDps(MyDps myDps) {
		List<SelectSkill> result = jpaQueryFactory
						.selectFrom(qSelectSkill)
						.where(
								qSelectSkill.myDps.myDpsId.eq(myDps.getMyDpsId())
						)
						.fetch();
		return result;
	}

}
