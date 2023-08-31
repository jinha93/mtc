package com.mtc.server.userstat.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mtc.server.user.entity.UserDto;
import com.mtc.server.user.mapper.UserMapper;
import com.mtc.server.userstat.entity.UserStat;
import com.mtc.server.userstat.entity.UserStatDto;
import com.mtc.server.userstat.mapper.UserStatMapper;
import com.mtc.server.userstat.repository.UserStatRepository;
import com.mtc.server.userstat.repository.UserStatRepositoryCustom;

@Service
public class UserStatService {
	
	@Autowired
	UserMapper userMapper;
	
	@Autowired
	UserStatMapper userStatMapper;
	
	@Autowired
	UserStatRepository userStatRepository;
	
	@Autowired
	UserStatRepositoryCustom userStatRepositoryCustom;
	
	public List<UserStatDto> findByUser(UserDto userDto){
		return userStatMapper.toDtoList(userStatRepositoryCustom.findByUser(userMapper.toEntity(userDto)));
	}
	
	public List<UserStatDto> saveAll(List<UserStatDto> userStatDtoList) {
		
		List<UserStat> userSkillList = new ArrayList<>();
		userSkillList = userStatMapper.toEntityList(userStatDtoList);
		
		return userStatMapper.toDtoList(userStatRepository.saveAll(userSkillList));
	}
}
