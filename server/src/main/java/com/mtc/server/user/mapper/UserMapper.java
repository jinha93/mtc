package com.mtc.server.user.mapper;

import org.mapstruct.Mapper;

import com.mtc.server.config.GenericMapper;
import com.mtc.server.user.entity.User;
import com.mtc.server.user.entity.UserDto;

@Mapper(componentModel = "spring")
public interface UserMapper extends GenericMapper<UserDto, User>{

}
