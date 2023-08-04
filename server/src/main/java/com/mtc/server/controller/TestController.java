package com.mtc.server.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	
	@GetMapping("/api/hello")
	public List<String> Test(){
		return Arrays.asList("123", "456");
	}
}
