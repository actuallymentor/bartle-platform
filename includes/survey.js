var questions = [
	{
		"question": "Are you sir?",
		"answer1": "yes",
		"answer2": "no"
	},
	{
		"question": "Are you madamme?",
		"answer1": "yes",
		"answer2": "no"
	}
]
var progress = [
	{ question_nr: 0 },
	{ "answers": 0 }
]

function updateInterface (  ) {
	$ ( '#question' ).text ( questions[ progress[0].question_nr ].question ); 
	$ ( '#option-1' ).text ( questions[ progress[0].question_nr ].answer1 );
	$ ( '#option-2' ).text ( questions[ progress[0].question_nr ].answer2 );
} 

$ ( document ).ready ( function (  ) {
	console.log ( "Document loaded" );
	updateInterface (  ); 
}  );  