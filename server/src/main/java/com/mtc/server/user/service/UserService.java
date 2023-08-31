package com.mtc.server.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mtc.server.user.entity.UserDto;
import com.mtc.server.user.mapper.UserMapper;
import com.mtc.server.user.repository.UserRepository;
import com.mtc.server.user.repository.UserRepositoryCustom;

@Service
public class UserService {
	
	@Autowired
	UserMapper userMapper;

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserRepositoryCustom userRepositoryCustom;
	
	public UserDto userCheck(UserDto userDto) {
		return userMapper.toDto(userRepositoryCustom.findByUserIdAndPassword(userMapper.toEntity(userDto)));
	}
}
