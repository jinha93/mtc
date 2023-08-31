package com.mtc.server.userstat.mapper;

import org.mapstruct.Mapper;

import com.mtc.server.config.GenericMapper;
import com.mtc.server.userstat.entity.UserStat;
import com.mtc.server.userstat.entity.UserStatDto;

@Mapper(componentModel = "spring")
public interface UserStatMapper  extends GenericMapper<UserStatDto, UserStat>{

}
