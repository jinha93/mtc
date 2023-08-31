package com.mtc.server.userskill.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mtc.server.skill.entity.QSkill;
import com.mtc.server.user.entity.QUser;
import com.mtc.server.user.entity.User;
import com.mtc.server.userskill.entity.QUserSkill;
import com.mtc.server.userskill.entity.UserSkill;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class UserSkillRepositoryCustomImpl implements UserSkillRepositoryCustom{
	
	@Autowired
	JPAQueryFactory jpaQueryFactory;
	
	QUserSkill qUserSkill = QUserSkill.userSkill;
	QSkill qSkill = QSkill.skill;
	QUser qUser = QUser.user;
	
	@Override
	public List<UserSkill> findByUser(User user) {
		List<UserSkill> result = jpaQueryFactory
										.select(Projections.fields(UserSkill.class,
												qSkill,
												qUserSkill.level,
												qUserSkill.user))
										.from(qSkill)
										.leftJoin(qUserSkill)
											.on(
													qSkill.skillId.eq(qUserSkill.skill.skillId)
													.and(qUserSkill.user.userId.eq(user.getUserId()))
											)
										.fetch();
		return result;
	}

}
