package de.morphbit.rpcdemo.services.impl;

import org.springframework.stereotype.Service;

import com.googlecode.jsonrpc4j.spring.AutoJsonRpcServiceImpl;

import de.morphbit.rpcdemo.services.HelloRpcService;

@Service
@AutoJsonRpcServiceImpl
public class HelloRpcServiceImpl implements HelloRpcService {

	@Override
	public String sayHello(String name) {
		return "Hello " + name;
	}

	@Override
	public String sayHello(String firstName, String lastName) {
		return sayHello(firstName + " " + lastName);
	}

	@Override
	public String sayHello(String firstName, int age) {
		return sayHello(age + " Jahre alter " + firstName);
	}

}
