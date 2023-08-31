package com.mtc.server.mydps.entity;

import java.util.List;

import com.mtc.server.selectskill.entity.SelectSkillDto;
import com.mtc.server.user.entity.User;
import com.mtc.server.user.entity.UserDto;
import com.mtc.server.userskill.entity.UserSkillDto;
import com.mtc.server.userstat.entity.UserStatDto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MyDpsDto {
	
	private int myDpsId;
	
	private User user;
	
	private float totalDps;
	
	private float defaultAttackDps;
	
	private String normalOrBoss;
	
	@Getter
	@Setter
	public static class SaveRequestDto{
		private UserDto userDto;
		private List<UserSkillDto> userSkillDtoList;
		private List<UserStatDto> userStatDtoList;
		private MyDpsDto myDpsDto;
		private List<SelectSkillDto> selectSkillDtoList;
	}
	
}
