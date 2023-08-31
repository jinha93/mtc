package com.mtc.server.mydps.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mtc.server.mydps.entity.MyDpsDto;
import com.mtc.server.mydps.mapper.MyDpsMapper;
import com.mtc.server.mydps.repository.MyDpsRepository;
import com.mtc.server.mydps.repository.MyDpsRepositoryCustom;
import com.mtc.server.user.entity.UserDto;
import com.mtc.server.user.mapper.UserMapper;

@Service
public class MyDpsService {
	
	@Autowired
	UserMapper userMapper;
	
	@Autowired
	MyDpsMapper myDpsMapper;
	
	@Autowired
	MyDpsRepository myDpsRepository;
	
	@Autowired
	MyDpsRepositoryCustom myDpsRepositoryCustom;

	public MyDpsDto findByUser(UserDto userDto) {
		return myDpsMapper.toDto(myDpsRepositoryCustom.findByUser(userMapper.toEntity(userDto)));
	}
	
	public MyDpsDto save(MyDpsDto myDpsDto) {
		return myDpsMapper.toDto(myDpsRepository.save(myDpsMapper.toEntity(myDpsDto)));
	}
}
