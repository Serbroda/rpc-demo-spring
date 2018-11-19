package de.morphbit.rpcdemo.services.impl;

import org.springframework.stereotype.Service;

import com.googlecode.jsonrpc4j.spring.AutoJsonRpcServiceImpl;

import de.morphbit.rpcdemo.services.HelloRpcService;

@Service
@AutoJsonRpcServiceImpl
public class HelloRpcServiceImpl implements HelloRpcService {

	@Override
	public String sayHello(String name) {
		return createGreeting("Welcome", name);
	}

	@Override
	public String sayHello(String firstName, String lastName) {
		return createGreeting("Hello", firstName + " " + lastName);
	}

	@Override
	public String sayHello(String firstName, int age) {
		return createGreeting("Hi", firstName + " (" + age + " y/o)");
	}
	
	private String createGreeting(String greeting, String val) {
		return greeting + " " + val;
	}

}
