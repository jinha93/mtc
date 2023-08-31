package com.mtc.server.mydps.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mtc.server.mydps.entity.MyDps;

@Repository
public interface MyDpsRepository extends JpaRepository<MyDps, Integer>{
}
