package de.morphbit.rpcdemo.services;

import com.googlecode.jsonrpc4j.JsonRpcService;

@JsonRpcService("/rpc/hello")
public interface HelloRpcService {

	String sayHello(String name);
	
	String sayHello(String firstName, String lastName);
	
	String sayHello(String firstName, int age);
}
