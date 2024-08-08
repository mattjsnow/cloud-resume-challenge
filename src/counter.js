const xhttpr = new XMLHttpRequest();
xhttpr.open('GET', https://r6wyhwly5knogscrzrdg3zsnfq0psvoi.lambda-url.us-east-1.on.aws/, true);

xhttpr.send();

xhttpr.onload = ()=> {
if (xhttpr.status === 200) {
	const response = JSON.parse(xhttpr.response);
	// Process the response data here
} else {
	// Handle error
}
};
