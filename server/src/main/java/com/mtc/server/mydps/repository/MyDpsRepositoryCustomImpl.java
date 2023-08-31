package com.mtc.server.mydps.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mtc.server.mydps.entity.MyDps;
import com.mtc.server.mydps.entity.QMyDps;
import com.mtc.server.user.entity.User;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class MyDpsRepositoryCustomImpl implements MyDpsRepositoryCustom{
	
	@Autowired
	JPAQueryFactory jpaQueryFactory;
	
	QMyDps qMyDps = QMyDps.myDps;

	@Override
	public MyDps findByUser(User user) {
		MyDps result = jpaQueryFactory
						.select(Projections.fields(MyDps.class,
								qMyDps.myDpsId,
								qMyDps.totalDps,
								qMyDps.defaultAttackDps,
								qMyDps.user,
								qMyDps.normalOrBoss))
						.from(qMyDps)
						.where(
								qMyDps.user.userId.eq(user.getUserId())
						)
						.orderBy(qMyDps.myDpsId.desc())
						.limit(1)
						.fetchOne();
		return result;
	}

}
