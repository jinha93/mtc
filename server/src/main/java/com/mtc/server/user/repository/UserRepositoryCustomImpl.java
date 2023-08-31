package com.mtc.server.user.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mtc.server.user.entity.QUser;
import com.mtc.server.user.entity.User;
import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class UserRepositoryCustomImpl implements UserRepositoryCustom{
	
	@Autowired
	JPAQueryFactory jpaQueryFactory;
	
	QUser qUser = QUser.user;

	@Override
	public User findByUserIdAndPassword(User user) {
		User result = jpaQueryFactory
						.selectFrom(qUser)
						.where(
								qUser.userId.eq(user.getUserId())
								.and(qUser.password.eq(user.getPassword()))
						).fetchOne();
		return result;
	}

}
