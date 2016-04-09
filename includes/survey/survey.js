function bartle_test (  ) {
	this.progress = {
		"answered_nr": 0 ,
		"answers": []
	}
	this.updateInterface = function (  ) {
		$ ( '#question' ).text ( questions[ this.progress.answered_nr ].question ); 
		$ ( '.answer#one' ).text ( questions[ this.progress.answered_nr ].one.text );
		$ ( '.answer#two' ).text ( questions[ this.progress.answered_nr ].two.text );
		if ( this.progress.answered_nr == questions.lenght ) {
			console.log ( 'Last question reached' ); 
		}
	}
	this.recordAnswer = function ( id ) {
		var givenanswer = questions[ this.progress.answered_nr ][ id ].value;
		this.progress.answers.push ( givenanswer );
		this.progress.answered_nr ++;
		this.updateInterface (  ) ;
	}
	console.log ( "Bartle test prototype initiated" ); 
}


var progress = {
	"answered_nr": 0 ,
	"answers": []
}

/* function updateInterface (  ) {
	$ ( '#question' ).text ( questions[ progress.answered_nr ].question ); 
	$ ( '.answer#one' ).text ( questions[ progress.answered_nr ].one.text );
	$ ( '.answer#two' ).text ( questions[ progress.answered_nr ].two.text );
	if ( progress.answered_nr == questions.lenght ) 
} 

function recordAnswer ( id ) {
	var givenanswer = questions[ progress.answered_nr ][ id ].value;
	progress.answers.push ( givenanswer );
	progress.answered_nr ++;
	updateInterface (  ) ;
} */

var current_test = new bartle_test (  ) ;

$ ( document ).ready ( function (  ) {
	console.log ( "Document loaded" );
	current_test.updateInterface (  ); 
}  );

$ ( '.answer' ).on ( "click", function (  ) {
	var clicked_element = $ ( this ).attr ( 'id' );
 	current_test.recordAnswer ( clicked_element );
	console.log ( current_test.progress );
}  );