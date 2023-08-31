package com.mtc.server.user.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mtc.server.user.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
}
