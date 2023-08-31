package com.mtc.server.mydps.repository;

import com.mtc.server.mydps.entity.MyDps;
import com.mtc.server.user.entity.User;

public interface MyDpsRepositoryCustom {
	public MyDps findByUser(User user);
}
