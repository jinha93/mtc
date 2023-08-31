package com.mtc.server.selectskill.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mtc.server.selectskill.entity.SelectSkill;

@Repository
public interface SelectSkillRepository extends JpaRepository<SelectSkill, Integer>{
}
