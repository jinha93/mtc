package com.mtc.server.userskill.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mtc.server.userskill.entity.UserSKillKey;
import com.mtc.server.userskill.entity.UserSkill;

public interface UserSkillRepository extends JpaRepository<UserSkill, UserSKillKey>{

}
