package com.mtc.server.mydps.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mtc.server.config.ResponseDto;
import com.mtc.server.mydps.entity.MyDps;
import com.mtc.server.mydps.entity.MyDpsDto;
import com.mtc.server.mydps.service.MyDpsService;
import com.mtc.server.selectskill.entity.SelectSkillDto;
import com.mtc.server.selectskill.service.SelectSkillService;
import com.mtc.server.user.entity.UserDto;
import com.mtc.server.user.service.UserService;
import com.mtc.server.userskill.entity.UserSkillDto;
import com.mtc.server.userskill.service.UserSkillService;
import com.mtc.server.userstat.entity.UserStatDto;
import com.mtc.server.userstat.service.UserStatService;

@RestController
public class MyDpsController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	UserSkillService userSkillService;
	
	@Autowired
	UserStatService userStatService;
	
	@Autowired
	MyDpsService myDpsService;
	
	@Autowired
	SelectSkillService selectSkillService;
	
	@PostMapping("/api/getMyDps")
	public ResponseEntity<?> getMyDps(@RequestBody UserDto userDto){
		// ID, PW 체크
		UserDto resultUserDto = userService.userCheck(userDto);
		if(resultUserDto == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ResponseDto.fail("No Users"));
		}
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		// 스킬 정보 조회
		List<UserSkillDto> userSkillList = userSkillService.findByUser(resultUserDto);
		resultMap.put("userSkillList", userSkillList);
		
		// 스탯 정보 조회
		List<UserStatDto> userStatList = userStatService.findByUser(resultUserDto);
		resultMap.put("userStatList", userStatList);
		
		// DPS 정보 조회
		MyDpsDto myDps = myDpsService.findByUser(resultUserDto);
		resultMap.put("myDps", myDps);
		System.out.println(myDps.getMyDpsId());
		if(myDps != null) {
			// 선택 스킬 정보 조회
			List<SelectSkillDto> selectSkillList = selectSkillService.findByMyDps(myDps);
			resultMap.put("selectSkillList", selectSkillList);
		}
		
		return ResponseEntity.ok(ResponseDto.success(resultMap)); 
	}
	
	@PostMapping("/api/myDps")
	public ResponseEntity<?> setMyDps(@RequestBody MyDpsDto.SaveRequestDto myDpsSaveDto) {
		
		// 스킬 저장
		userSkillService.saveAll(myDpsSaveDto.getUserSkillDtoList());
		
		// 스탯 저장
		userStatService.saveAll(myDpsSaveDto.getUserStatDtoList());
		
		// DPS 정보 저장
		MyDpsDto myDpsDto = myDpsService.save(myDpsSaveDto.getMyDpsDto());
		int myDpsId = myDpsDto.getMyDpsId();
		MyDps mydps = MyDps.builder().myDpsId(myDpsId).build();
		
		// 선택 스킬 정보 저장
		List<SelectSkillDto> selectSkillDtoList = myDpsSaveDto.getSelectSkillDtoList();
		for(int i=0; i<selectSkillDtoList.size(); i++) {
			selectSkillDtoList.get(i).setMyDps(mydps);
		}
		selectSkillService.saveAll(selectSkillDtoList);
		
		return ResponseEntity.ok(ResponseDto.success("MyDps Save Success"));
	}
	
}
