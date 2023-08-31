package com.mtc.server.userstat.repository;

import java.util.List;

import com.mtc.server.user.entity.User;
import com.mtc.server.userstat.entity.UserStat;

public interface UserStatRepositoryCustom {
	public List<UserStat> findByUser(User user);
}
