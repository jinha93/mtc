package com.mtc.server.config;

import java.util.List;

import org.mapstruct.BeanMapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

public interface GenericMapper<Dto, Entity> {

	Dto toDto(Entity entity);
	
	Entity toEntity(Dto dto);
	
	List<Dto> toDtoList(List<Entity> entityList);
	
	List<Entity> toEntityList(List<Dto> dtoList);
	
	@BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
	void updateFromDto(Dto dto, @MappingTarget Entity entity);
}
