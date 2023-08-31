package com.mtc.server.userskill.repository;

import java.util.List;

import com.mtc.server.user.entity.User;
import com.mtc.server.userskill.entity.UserSkill;

public interface UserSkillRepositoryCustom {
	public List<UserSkill> findByUser(User user);
}
