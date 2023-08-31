package com.mtc.server.userskill.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mtc.server.user.entity.UserDto;
import com.mtc.server.user.mapper.UserMapper;
import com.mtc.server.userskill.entity.UserSkillDto;
import com.mtc.server.userskill.mapper.UserSkillMapper;
import com.mtc.server.userskill.repository.UserSkillRepository;
import com.mtc.server.userskill.repository.UserSkillRepositoryCustom;

@Service
public class UserSkillService {
	
	@Autowired
	UserMapper userMapper;
	
	@Autowired
	UserSkillMapper userSkillMapper;
	
	@Autowired
	UserSkillRepository userSkillRepository;
	
	@Autowired
	UserSkillRepositoryCustom userSkillRepositoryCustom;
	
	public List<UserSkillDto> findByUser(UserDto userDto){
		return userSkillMapper.toDtoList(userSkillRepositoryCustom.findByUser(userMapper.toEntity(userDto)));
	}
	
	public List<UserSkillDto> saveAll(List<UserSkillDto> userSkillDtoList) {
			return userSkillMapper.toDtoList(userSkillRepository.saveAll(userSkillMapper.toEntityList(userSkillDtoList)));
	}
}
