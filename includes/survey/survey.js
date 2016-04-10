function bartle_test (  ) {

	// Keeps track of the number of answers submitted and records them
	this.progress = {
		"answered_nr": 0 ,
		"answers": [],
		"ended": false
	}

	// Updates the UI to reflect progress
	this.updateUI = function (  ) {
		$ ( '#question' ).text ( questions[ this.progress.answered_nr ].question )

		if ( this.progress.answered_nr ==  ( questions.length - 1 )  ) {
			console.log ( 'Last question reached' ) 
			this.progress.ended = true;
			stroop_test.updateUI (  ) 
		} else {
			$ ( '.answer#one' ).text ( questions[ this.progress.answered_nr ].one.text )
			$ ( '.answer#two' ).text ( questions[ this.progress.answered_nr ].two.text )
		}
	}

	// Record the answer into the progress object
	this.recordInput = function ( id ) {
		var givenanswer = questions[ this.progress.answered_nr ][ id ].value
		this.progress.answers.push ( givenanswer )
		this.progress.answered_nr ++
		this.updateUI (  ) 
	}

	// Debugging statement
	console.log ( "Bartle test prototype initiated" )
}

function stroop_test  (  ) {
	this.progress = {
		"answered_nr": 0,
		"correct_nr": 0,
		"next_correct": "one"
	}

	// Updates the UI to reflect progress
	this.updateUI = function (  ) {

		var color_right = Math.floor( Math.random() * stroop_colors.length )
		var color_wrong = Math.floor( Math.random() * stroop_colors.length )
		var option_order = Math.floor( Math.random() * 2 )
		var right_answer

		while  ( color_right == color_wrong ) {
			color_wrong = Math.floor( Math.random() * stroop_colors.length )
		}

		$ ( "#question" ).css ( "color", stroop_colors [ color_right ].hex ) 

		if  ( option_order == 1 ) {
			$ ( '#one' ).text ( stroop_colors [ color_right ].name )
			$ ( '#two' ).text ( stroop_colors [ color_wrong ].name )
			this.progress.next_correct = "one"
		} else {
			$ ( '#one' ).text ( stroop_colors [ color_wrong ].name )
			$ ( '#two' ).text ( stroop_colors [ color_right ].name )
			this.progress.next_correct = "two"
		}
		return right_answer
	}

	// Record the answer into the progress object
	this.recordInput = function ( id ) {
		this.progress.answered_nr ++
		
		if  ( this.progress.next_correct == id ) {
			console.log ( "CORRECT!" )
			this.progress.correct_nr ++
		} else {
			console.log ( "WRONG!" ) 
		}

		this.updateUI (  )
	}

}

var bartle_test = new bartle_test (  )
var stroop_test = new stroop_test (  ) 

// Start questionaire workflow when DOM has loaded
$ ( document ).ready ( function (  ) {
	console.log ( "Document load complete" )
	bartle_test.updateUI (  )
}  )

// Record answer when buttons are clicked
$ ( '.answer' ).on ( "click", function (  ) {

	var clicked_element = $ ( this ).attr ( 'id' )

	if  ( !bartle_test.progress.ended ) {
		
		bartle_test.recordInput ( clicked_element )
		console.log ( bartle_test.progress )
	} else {
		stroop_test.recordInput ( clicked_element ) 
		console.log ( stroop_test.progress ) 
	}

}  )













