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
		"answered_nr": 0,
		"answers": [],
		"ended": false,
		"bartle_type": "default",
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
		$ ( '#progress .determinate' ).css ( "width",  ( this.progress.answered_nr / questions.length ) * 100 + "%" )  

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
				"bartle_quotient": this.progress.bartle_quotient
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
		if  ( bartle_count['K'] != undefined ) {
			this.progress.bartle_quotient.killer =  Math.floor ( bartle_count['K']['length'] / .39 ) 
		} else {
			this.progress.bartle_quotient.killer = 0
		}
		if  ( bartle_count['A'] != undefined ) {
			this.progress.bartle_quotient.achiever =  Math.floor ( bartle_count['A']['length'] / .39 ) 
		} else {
			this.progress.bartle_quotient.achiever = 0
		}
		if  ( bartle_count['E'] != undefined ) {
			this.progress.bartle_quotient.explorer =  Math.floor ( bartle_count['E']['length'] / .39 ) 
		} else {
			this.progress.bartle_quotient.explorer = 0
		}
		if  ( bartle_count['S'] != undefined ) {
			this.progress.bartle_quotient.socializer =  Math.floor ( bartle_count['S']['length'] / .39 )
		} else {
			this.progress.bartle_quotient.socializer = 0
		}

		this.progress.bartle_type = _.invert(this.progress.bartle_quotient)[_.max(this.progress.bartle_quotient)]

	}

	// Debugging statement
	console.log ( "Bartle test prototype initiated" )
}

function stroop_test  (  ) {
	this.progress = {
		"answered_nr": 0,
		"correct_nr": 0,
		"next_correct": "one",
		"gamified": 0
	}

	this.takeOver = function (  ) {
		$ ( "#progress" ) .text ( '' ) 
		$ ( "#question" ).text ( "Instructions" )
		$ ( "#question" ).css ( { 'background-color': $ ( '#header-well' ).css ( 'background-color' ), 'padding': '10px'   } )  
		$ ( "#instructions" ).text ( "You will now be be asked to complete a task. You may continue for as long as you like." ) 
		$ ( ".answer" ).text ( "" )
		$ ( "#one" ).text ( "I understand" )
		if  ( gamification == true ) {
			// This variable is created on the bartle.php webpage
			this.gamify (  ) 
		}
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

		stroop_test.submitDatabase (  ) 
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
			data: { "action": "engagement", "value": this.progress.answered_nr, "correct": this.progress.correct_nr, "gamified": this.progress.gamified }
		})
	}

	// Gamify the task
	this.gamify = function (  ) {

		this.progress.gamified = 1
		$ ( "#gamification" ).html ( '<h4 id="score" class="center-align">Your score:</h4><p id="points" class="center-align">Points: 0</p><p id="level" class="center-align">Level: beginner</p><p id="nextlevel" class="center-align">Points to next level: 5</p>' ) 
		$ ( "#maincard" ).addClass ( "col l7 m12 s12" )  
		$ ( "#gamifiedcard" ).removeClass ( "hide" ) 
		$ ( "#header-well" ).css ( "height", "100px" )
		var current_stroop_test = this  
		$ ( '.answer' ).on ( "click", function (  ) {
			$ ( "#gamification #points" ).text ( "Points: " + current_stroop_test.progress.correct_nr )

			if  ( current_stroop_test.progress.correct_nr > 0 ) {
				$ ( "#gamification #level" ).text ( "Level: adept" )
				$ ( "#gamification #nextlevel" ).text ( "Points to next level: " +  ( 5 - current_stroop_test.progress.correct_nr )  )
			}
			if  ( current_stroop_test.progress.correct_nr > 5 ) {
				$ ( "#gamification #level" ).text ( "Level: adept" )
				$ ( "#gamification #nextlevel" ).text ( "Points to next level: " +  ( 10 - current_stroop_test.progress.correct_nr )  )
			}
			if  ( current_stroop_test.progress.correct_nr > 10 ) {
				$ ( "#gamification #level" ).text ( "Level: intermediate" )
				$ ( "#gamification #nextlevel" ).text ( "Points to next level: " +  ( 20 - current_stroop_test.progress.correct_nr )  )
			}
			if  ( current_stroop_test.progress.correct_nr > 20 ) {
				$ ( "#gamification #level" ).text ( "Level: advanced" )
				$ ( "#gamification #nextlevel" ).text ( "Points to next level: " +  ( 35 - current_stroop_test.progress.correct_nr )  )
			}
			if  ( current_stroop_test.progress.correct_nr > 35 ) {
				$ ( "#gamification #level" ).text ( "Level: elite" )
				$ ( "#gamification #nextlevel" ).text ( "Points to next level: " +  ( 50 - current_stroop_test.progress.correct_nr )  )
			}
			if  ( current_stroop_test.progress.correct_nr > 50 ) {
				$ ( "#gamification #level" ).text ( "Level: godlike" )
				$ ( "#gamification #nextlevel" ).text ( "You have reached the max level"  )
			}
			
		}  )
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
		console.log ( stroop_test.progress ) 
	}

}  )