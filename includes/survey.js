var progress = [
	{ "question_nr": 0 },
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