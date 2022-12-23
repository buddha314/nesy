const http = require('http');
//import "tau-prolog";
var pl = require("tau-prolog");


// Import the lists module
// Looks like this when tau-prolog is installed with npm:
require("tau-prolog/modules/lists")(pl);
//require("../../modules/lists")(pl);

// Create a session
var session = pl.create();

// Program
var program = `
	:- use_module(library(lists)).
	% fruit/1
	fruit(apple).
	fruit(pear).
	fruit(banana).
	% fruits_in/2
	fruits_in(Xs, X) :-
		member(X, Xs),
		fruit(X).
`;

// Goal
var goal = "fruits_in([carrot, apple, banana, broccoli], X).";

// Load the program
session.consult(program, {
	success: function() {
		// Query the goal
		session.query(goal, {
			success: function() {
				// Look for answers
				session.answers(x => console.log(session.format_answer(x)));
			}
		});
	}
});



const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});