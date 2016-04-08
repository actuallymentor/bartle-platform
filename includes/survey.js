var progress = {
	"question_nr": 0 ,
	"answers": []
}

function updateInterface (  ) {
	$ ( '#question' ).text ( questions[ progress.question_nr ].question ); 
	$ ( '#option-1' ).text ( questions[ progress.question_nr ].answer1.text );
	$ ( '#option-2' ).text ( questions[ progress.question_nr ].answer2.text );
} 

$ ( document ).ready ( function (  ) {
	console.log ( "Document loaded" );
	updateInterface (  ); 
}  );

$ ( '#option-1' ).on ( "click", function (  ) {
	var givenanswer = questions[ progress.question_nr ].answer1.value;
	progress.answers.push ( givenanswer ); 
	console.log ( progress.answers ); 
}  );