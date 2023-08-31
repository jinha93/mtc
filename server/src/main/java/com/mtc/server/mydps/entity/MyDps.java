package com.mtc.server.mydps.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.mtc.server.user.entity.User;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)	// createdAt, updatedAt을 위한 설정, 엔티티를 DB에 적용하기 이전에 콜백을 요청할 수 있다.
public class MyDps {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int myDpsId;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	private float totalDps;
	
	private float defaultAttackDps;
	
	private String normalOrBoss = "N";
	
	@CreatedDate
    private LocalDateTime createdAt;
    @LastModifiedDate
    private LocalDateTime updatedAt;

	@Builder
	public MyDps(int myDpsId, User user, float totalDps, float defaultAttackDps, String normalOrBoss) {
		this.myDpsId = myDpsId;
		this.user = user;
		this.totalDps = totalDps;
		this.defaultAttackDps = defaultAttackDps;
		this.normalOrBoss = normalOrBoss;
	}
	
	
	
}
