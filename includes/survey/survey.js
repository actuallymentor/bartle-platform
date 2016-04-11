// Array ocurrence counter
var occurrence = function (array) {
	"use strict"
	var result = {}
    if (array instanceof Array) { // Check if input is array.
    	array.forEach(function (v, i) {
            if (!result[v]) { // Initial object property creation.
                result[v] = [i] // Create an array for that property.
            } else { // Same occurrences found.
                result[v].push(i) // Fill the array.
            }
        })
    }
    return result;
}

function bartle_test (  ) {

	// Keeps track of the number of answers submitted and records them
	this.progress = {
		"answered_nr": 0 ,
		"answers": [],
		"ended": false,
		"bartle_type": "default",
		"gamified": 0,
		"bartle_quotient": {
			"killer": 0,
			"achiever": 0,
			"explorer": 0,
			"socializer": 0
		}
	}

	// Updates the UI to reflect progress
	this.updateUI = function (  ) {
		$ ( '#question' ).text ( questions[ this.progress.answered_nr ].question )

		$ ( '.answer#one' ).text ( questions[ this.progress.answered_nr ].one.text )
		$ ( '.answer#two' ).text ( questions[ this.progress.answered_nr ].two.text )

	}

	// Record the answer into the progress object
	this.recordInput = function ( id ) {
		var givenanswer = questions[ this.progress.answered_nr ][ id ].value
		this.progress.answers.push ( givenanswer )
		this.progress.answered_nr ++
		if ( this.progress.answered_nr ==  ( questions.length )  ) {
			console.log ( 'Last question reached' ) 
			this.calculateBartleType (  ) 
			this.submitDatabase ( {
				"action": "set_bartle",
				"type": this.progress.bartle_type,
				"bartle_quotient": this.progress.bartle_quotient,
				"gamified": this.progress.gamified
			} ) 
			this.progress.ended = true
			stroop_test.takeOver (  ) 
		} else {
			this.updateUI (  ) 
		}
	}

	// Submit data to database
	this.submitDatabase = function  ( data ) {
		$.ajax({
			url: 'record-api.php',
			type: 'post',
			dataType: 'json',
			success: function (data, status) {
				console.log ( "UID: " + data + "\nStatus: " + status )
			},
			data: data
		})
	}

	this.calculateBartleType =  function (  ) {
		bartle_count = occurrence ( this.progress.answers ) 
		// TODO Implement isset check
		this.progress.bartle_quotient.killer =  Math.floor ( bartle_count['K']['length'] / .39 ) 
		this.progress.bartle_quotient.achiever =  Math.floor ( bartle_count['A']['length'] / .39 ) 
		this.progress.bartle_quotient.explorer =  Math.floor ( bartle_count['E']['length'] / .39 ) 
		this.progress.bartle_quotient.socializer =  Math.floor ( bartle_count['S']['length'] / .39 )

		this.progress.bartle_type = '' // TODO Set the highest stpe here



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

	this.takeOver = function (  ) {
		$ ( "#question" ).text ( "Instructions" )
		$ ( "#instructions" ).text ( "You will now be be asked to complete a task. You may continue for as long as you like." ) 
		$ ( ".answer" ).text ( "" )
		$ ( "#one" ).text ( "I understand" )
	}

	// Updates the UI to reflect progress
	this.updateUI = function (  ) {

		$ ( "#question" ).text ( "Which color is this sentence?" ) 
		$ ( "#instructions" ).text ( "" ) 
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
	// Submit data to database
	this.submitDatabase = function  (  ) {
		$.ajax({
			url: 'record-api.php',
			type: 'post',
			dataType: 'json',
			success: function (data, status) {
				console.log ( "Ajax data: " + data + "\nStatus: " + status )
			},
			data: { "action": "engagement", "value": this.progress.answered_nr, "correct": this.progress.correct_nr }
		})
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
		// Record input to the Bartle test
		bartle_test.recordInput ( clicked_element )
		console.log ( bartle_test.progress )
	} else {
		// Record input to the Stroop test
		stroop_test.recordInput ( clicked_element ) 
		stroop_test.submitDatabase (  ) 
		console.log ( stroop_test.progress ) 
	}

}  )













