package com.mtc.server.userstat.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mtc.server.stat.entity.QStat;
import com.mtc.server.user.entity.QUser;
import com.mtc.server.user.entity.User;
import com.mtc.server.userstat.entity.QUserStat;
import com.mtc.server.userstat.entity.UserStat;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class UserStatRepositoryCustomImpl implements UserStatRepositoryCustom{
	
	@Autowired
	JPAQueryFactory jpaQueryFactory;
	
	QUserStat qUserStat = QUserStat.userStat;
	QStat qStat = QStat.stat;
	QUser qUser = QUser.user;
	
	@Override
	public List<UserStat> findByUser(User user) {
		List<UserStat> result = jpaQueryFactory
										.select(Projections.fields(UserStat.class,
												qStat,
												qUserStat.value,
												qUserStat.user))
										.from(qStat)
										.leftJoin(qUserStat)
											.on(
													qStat.statId.eq(qUserStat.stat.statId)
													.and(qUserStat.user.userId.eq(user.getUserId()))
											)
										.orderBy(qStat.seq.asc())
										.fetch();
		return result;
	}

}
