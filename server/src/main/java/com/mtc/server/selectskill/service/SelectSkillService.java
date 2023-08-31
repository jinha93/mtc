package com.mtc.server.selectskill.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mtc.server.mydps.entity.MyDpsDto;
import com.mtc.server.mydps.mapper.MyDpsMapper;
import com.mtc.server.selectskill.entity.SelectSkillDto;
import com.mtc.server.selectskill.mapper.SelectSkillMapper;
import com.mtc.server.selectskill.repository.SelectSkillRepository;
import com.mtc.server.selectskill.repository.SelectSkillRepositoryCustom;

@Service
public class SelectSkillService {
	
	@Autowired
	MyDpsMapper myDpsMapper;
	
	@Autowired
	SelectSkillMapper selectSkillMapper;
	
	@Autowired
	SelectSkillRepository selectSkillRepository;
	
	@Autowired
	SelectSkillRepositoryCustom selectSkillRepositoryCustom;

	public List<SelectSkillDto> findByMyDps(MyDpsDto myDpsDto) {
		return selectSkillMapper.toDtoList(selectSkillRepositoryCustom.findByMyDps(myDpsMapper.toEntity(myDpsDto)));
	}
	
	public List<SelectSkillDto> saveAll(List<SelectSkillDto> selectSkillDtoList){
		return selectSkillMapper.toDtoList(selectSkillRepository.saveAll(selectSkillMapper.toEntityList(selectSkillDtoList)));
	}
}
