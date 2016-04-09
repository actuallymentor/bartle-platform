function bartle_test (  ) {

	// Keeps track of the number of answers submitted and records them
	this.progress = {
		"answered_nr": 0 ,
		"answers": []
	}

	// Updates the interface to reflect progress
	this.updateInterface = function (  ) {
		$ ( '#question' ).text ( questions[ this.progress.answered_nr ].question )

		if ( this.progress.answered_nr ==  ( questions.length - 1 )  ) {
			console.log ( 'Last question reached' ) 
			$ ( '.answer' ).remove (  ) 
		} else {
			$ ( '.answer#one' ).text ( questions[ this.progress.answered_nr ].one.text )
			$ ( '.answer#two' ).text ( questions[ this.progress.answered_nr ].two.text )
		}
	}

	// Record the answer into the progress object
	this.recordAnswer = function ( id ) {
		var givenanswer = questions[ this.progress.answered_nr ][ id ].value
		this.progress.answers.push ( givenanswer )
		this.progress.answered_nr ++
		this.updateInterface (  ) 
	}

	// Start questionaire workflow when DOM has loaded
	$ ( document ).ready ( function (  ) {
		console.log ( "Document load complete" )
		current_test.updateInterface (  ) 
	}  )

	// Record answer when buttons are clicked
	$ ( '.answer' ).on ( "click", function (  ) {
		var clicked_element = $ ( this ).attr ( 'id' )
		current_test.recordAnswer ( clicked_element )
		console.log ( current_test.progress )
	}  )

	// Debugging statement
	console.log ( "Bartle test prototype initiated" )

	// Little wink to any programmers doing the test
	console.log ( "------------------------------------------------------------------" )
	console.log ( "Having fun staring at the browser console? Oh you programmer you." )
	console.log ( "You should check out this SUPER MEGA IMPORTANT LINK: " ) 
	console.log ( "------------------------------------------------------------------" )
}

var current_test = new bartle_test (  ) 