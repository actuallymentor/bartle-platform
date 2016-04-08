var progress = {
	"answered_nr": 0 ,
	"answers": []
}

function updateInterface (  ) {
	$ ( '#question' ).text ( questions[ progress.answered_nr ].question ); 
	$ ( '.answer#one' ).text ( questions[ progress.answered_nr ].one.text );
	$ ( '.answer#two' ).text ( questions[ progress.answered_nr ].two.text );
} 

function recordAnswer ( id ) {
	var givenanswer = questions[ progress.answered_nr ][ id ].value;
	progress.answers.push ( givenanswer );
	progress.answered_nr ++;
	updateInterface (  ) ;
} 

$ ( document ).ready ( function (  ) {
	console.log ( "Document loaded" );
	updateInterface (  ); 
}  );

$ ( '.answer' ).on ( "click", function (  ) {
	var clicked_element = $ ( this ).attr ( 'id' );
	recordAnswer ( clicked_element );
	console.log ( progress );  
}  );