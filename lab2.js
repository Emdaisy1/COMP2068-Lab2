//Require http so it can run in browser
var http = require('http');

//Require node's url module to parse the url's querystring
var url = require('url');

//Create and load server with Node
http.createServer(function(req, res) {

    res.write('<h1>COMP 2068 - Lab 2</h1>\n<h3>Emma Hilborn - 200282755</h3>');
    
    //Get the values from the url querystring
    var qs = url.parse(req.url, true).query;
    
    //Assign the values to appropriate variables
    var method = qs.method;
	var x = parseFloat(qs.x);
    var y = parseFloat(qs.y);

	//Create an empty variable for the total
    var total;
    
    //Check to see if the method is valid and if not, notify user
    if (method !== 'add' && method !== 'subtract' && method !== 'multiply' && method !== 'divide'){
    	res.write('Please enter a valid method, such as add, subtract, multiply, or divide.');
    }
    //Make sure they're not dividing by 0!
    else if (method === 'divide' && y == 0){
    	res.write('You cannot divide by 0!');
    }
    //If they entered a valid method, and aren't dividing by 0, calculate
        else {
        //Check through each method option, calculate total based on the option, and print the appropriate equation to the screen	    	    
	    if (method === 'add'){
	    	total = x + y;
	    	res.write('Here is your calculation:\n' + x + ' + ' + y + ' = ' + total);
	    }
	    
	    else if (method === 'subtract'){
	    	total = x - y;
	    	res.write('Here is your calculation:\n' + x + ' - ' + y + ' = ' + total);
	    }
	    
	    else if (method === 'multiply'){
	    	total = x * y;
	    	res.write('Here is your calculation:\n' + x + ' * ' + y + ' = ' + total);
	    }
	    else {
	    	total = x / y;
	    	res.write('Here is your calculation:\n' + x + ' / ' + y + ' = ' + total);
	    }
    }    
    res.end();
}).listen(3000);
