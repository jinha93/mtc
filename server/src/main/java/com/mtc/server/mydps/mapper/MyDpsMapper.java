package com.mtc.server.mydps.mapper;

import org.mapstruct.Mapper;

import com.mtc.server.config.GenericMapper;
import com.mtc.server.mydps.entity.MyDps;
import com.mtc.server.mydps.entity.MyDpsDto;

@Mapper(componentModel = "spring")
public interface MyDpsMapper extends GenericMapper<MyDpsDto, MyDps>{

}
