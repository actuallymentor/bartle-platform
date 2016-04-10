function bartle_test (  ) {

	// Keeps track of the number of answers submitted and records them
	this.progress = {
		"answered_nr": 0 ,
		"answers": [],
		"ended": false
	}

	// Updates the interface to reflect progress
	this.updateBartleQuestion = function (  ) {
		$ ( '#question' ).text ( questions[ this.progress.answered_nr ].question )

		if ( this.progress.answered_nr ==  ( questions.length - 1 )  ) {
			console.log ( 'Last question reached' ) 
			this.progress.ended = true;
			$ ( '.answer' ).text ( '' )
			$ ( '.answer' ).addClass ( "stroop" ) 
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
		this.updateBartleQuestion (  ) 
	}

	// Debugging statement
	console.log ( "Bartle test prototype initiated" )

	// Little wink to any programmers doing the test
	console.log ( "------------------------------------------------------------------" )
	console.log ( "Having fun staring at the browser console? Oh you programmer you." )
	console.log ( "You should check out this SUPER MEGA IMPORTANT LINK: " ) 
	console.log ( "------------------------------------------------------------------" )
}

function stroop_test  (  ) {
	this.progress = {
		"answered_nr": 0,
		"answered_time": 0
	}

	// Updates the interface to reflect progress
	this.updateStroopQuestion = function (  ) {
		var color_right = Math.floor( Math.random() * stroop_colors.length )
		var color_wrong = Math.floor( Math.random() * stroop_colors.length )
		var option_order = Math.floor( Math.random() * 2 )
		console.log ( color_right + ' ' + color_wrong ) 

		while  ( color_right == color_wrong ) {
			color_betrayal = Math.floor( Math.random() * stroop_colors.length )
		}

		if  ( option_order == 1 ) {
			$ ( '#one' ).text ( stroop_colors [ color_right ].name )
			$ ( '#two' ).text ( stroop_colors [ color_wrong ].name )
		} else {
			$ ( '#one' ).text ( stroop_colors [ color_wrong ].name )
			$ ( '#two' ).text ( stroop_colors [ color_right ].name )
		}
	}

}

var current_test = new bartle_test (  )

// Start questionaire workflow when DOM has loaded
$ ( document ).ready ( function (  ) {
	console.log ( "Document load complete" )
	current_test.updateBartleQuestion (  ) 
}  )

// Record answer when buttons are clicked
$ ( '.answer' ).on ( "click", function (  ) {
	if  ( !current_test.progress.ended ) {
		var clicked_element = $ ( this ).attr ( 'id' )
		current_test.recordAnswer ( clicked_element )
		console.log ( current_test.progress )
	}
}  )













