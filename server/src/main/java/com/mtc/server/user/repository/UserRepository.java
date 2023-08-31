package com.mtc.server.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mtc.server.user.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{
	public Optional<User> findById(String id);
}
