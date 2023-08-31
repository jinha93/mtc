package com.mtc.server.selectskill.mapper;

import org.mapstruct.Mapper;

import com.mtc.server.config.GenericMapper;
import com.mtc.server.selectskill.entity.SelectSkill;
import com.mtc.server.selectskill.entity.SelectSkillDto;

@Mapper(componentModel = "spring")
public interface SelectSkillMapper extends GenericMapper<SelectSkillDto, SelectSkill>{

}
