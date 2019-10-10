const http=require("http");
const io=require("socket.io");

const PORT=420; //Blaze it

const server=http.createServer((req, res)=>{
	console.log("unexpected http request");
});

const sok=io(server);

server.listen(PORT,()=>{
	console.log("Server started");
});


sok.on("connection",(socket)=>{
	console.log("User connected");
	
	socket.on("disconnect",()=>{
		console.log("User disconnected");
	});
	
	socket.on("message",(msg)=>{
		console.log("Received message: "+msg);
		
	});
	
	socket.on("microctrl",(msg)=>{
		console.log("Received message from microcontroller: "+msg);
		//broadcast the message from the microcontroller to everyone else
		//msg could be a temperature reading
		sok.send(msg);
	});
});

//supposed to emulate the microcontroller periodically sending messages
const timer=setInterval(()=>{
	console.log("Sending data...");
	console.log("Connected users: "+sok.sockets.server.engine.clientsCount);
	sok.send(Math.random());
},1000);