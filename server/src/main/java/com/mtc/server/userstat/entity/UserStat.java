package com.mtc.server.userstat.entity;

import com.mtc.server.stat.entity.Stat;
import com.mtc.server.user.entity.User;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
@IdClass(UserStatKey.class)
public class UserStat {

	@Id
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@Id
	@ManyToOne
	@JoinColumn(name = "stat_id")
	private Stat stat;
	
	private float value;
	
	@Builder
	public UserStat(User user, Stat stat, float value) {
		this.user = user;
		this.stat = stat;
		this.value = value;
	}
}
