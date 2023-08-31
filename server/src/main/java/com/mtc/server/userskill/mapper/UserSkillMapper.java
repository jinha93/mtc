package com.mtc.server.userskill.mapper;

import org.mapstruct.Mapper;

import com.mtc.server.config.GenericMapper;
import com.mtc.server.userskill.entity.UserSkill;
import com.mtc.server.userskill.entity.UserSkillDto;

@Mapper(componentModel = "spring")
public interface UserSkillMapper  extends GenericMapper<UserSkillDto, UserSkill>{

}
