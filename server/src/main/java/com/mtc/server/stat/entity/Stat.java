package com.mtc.server.stat.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
public class Stat {

	@Id
	private String statId;
	
	private String name;
	
	private int seq;
	
	@Builder
	public Stat(String statId, String name, int seq) {
		this.statId = statId;
		this.name = name;
		this.seq = seq;
	}
}
