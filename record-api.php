<?php

session_start (  );  


REQUIRE ( 'database/connect-database.php' );

if  ( !isset ( $_POST['action'] )  ) { 
	die  ( "No POST set" ); 
}

if  ( $_POST['action'] == "set_bartle" ) {

	$statement = $db->prepare("INSERT INTO Results 
		(bartle_type, killer_quotient, achiever_quotient, explorer_quotient, socializer_quotient, gender, age, email) 
		VALUES ( :bartle, :killer, :achiever, :explorer, :socializer, :gender, :age, :email )"
		);

	$statement->bindParam(":bartle", $_POST['type']);
	$statement->bindParam(":killer", $_POST['bartle_quotient']['killer']);
	$statement->bindParam(":achiever", $_POST['bartle_quotient']['achiever']);
	$statement->bindParam(":explorer", $_POST['bartle_quotient']['explorer']);
	$statement->bindParam(":socializer", $_POST['bartle_quotient']['socializer']);
	$statement->bindParam(":gender", $_POST['demographics']['gender']);
	$statement->bindParam(":age", $_POST['demographics']['age']);
	$statement->bindParam(":email", $_POST['demographics']['email']);

	print_r ( $_POST['bartle_quotient'] ); 

	pdo_try_catch  ( $statement  );

	$_SESSION['UID'] = $db->lastInsertId();

	echo $_SESSION['UID'];
	return;

}


if  ( $_POST['action'] == "engagement" ) {

	if  ( !isset ( $_SESSION['UID'] )  ) {
		die ( "No user defined" );
	}

	$statement = $db->prepare("UPDATE Results SET interactions= :interaction,interactions_correct= :correct, gamified= :gamified  WHERE id= :uid " );
	$statement->bindParam(':interaction', $_POST['value']);
	$statement->bindParam(":gamified", $_POST['gamified']);
	$statement->bindParam(':correct', $_POST['correct']);
	$statement->bindParam(':uid', $_SESSION['UID']);

	pdo_try_catch  ( $statement  );
	echo ( $_SESSION['UID'] );
	return;

}


?>