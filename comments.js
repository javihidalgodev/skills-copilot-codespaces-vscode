// Create web server application
function start(route, handle) {
	// Create a web server
	var server = http.createServer(function(request, response) {
		// Log the request
		console.log("Request received.");
		// Route the request
		route(handle, request, response);
	});
	// Start the web server listening on port 8888
	server.listen(8888);
	// Log that the server has started
	console.log("Server has started.");
}