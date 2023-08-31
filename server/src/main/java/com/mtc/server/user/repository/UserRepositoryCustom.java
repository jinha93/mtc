package com.mtc.server.user.repository;

import com.mtc.server.user.entity.User;

public interface UserRepositoryCustom {
	public User findByUserIdAndPassword(User user);
}
