package com.mtc.server.config;

import lombok.Getter;

@Getter
public class ResponseDto<T>{
	
	private boolean success;
    private String message;
    private T data;
    
    public ResponseDto(boolean success, String message, T data){
    	this.success = success;
    	this.message = message;
    	this.data = data;
    }
    
    public static <T> ResponseDto<T> success(T data) {
    	return new ResponseDto<T>(true, null, data);
    }
    public static ResponseDto<?> success(String message) {
    	return new ResponseDto<>(true, message, null);
    }
    public static ResponseDto<?> fail(String message) {
    	return new ResponseDto<>(false, message, null);
    }
    
}
