package com.mtc.server.userstat.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mtc.server.userstat.entity.UserStat;
import com.mtc.server.userstat.entity.UserStatKey;

public interface UserStatRepository extends JpaRepository<UserStat, UserStatKey>{

}
