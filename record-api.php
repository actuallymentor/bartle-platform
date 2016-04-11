<?php

session_start (  );  


REQUIRE ( 'database/connect-database.php' );

if  ( !isset ( $_POST['action'] )  ) { 
	die  ( "No POST set" ); 
}

if  ( $_POST['action'] == "set_bartle" ) {

	$statement = $db->prepare("INSERT INTO Results (bartle_type) VALUES ( :bartle )");
	$statement->bindParam(":bartle", $_POST['value']);

	pdo_try_catch  ( $statement  );

	$_SESSION['UID'] = $db->lastInsertId();

	echo $_SESSION['UID'];
	return;

}


if  ( $_POST['action'] == "engagement" ) {

	if  ( !isset ( $_SESSION['UID'] )  ) {
		die ( "No user defined" );
	}

	$statement = $db->prepare("UPDATE Results SET interactions= :interaction,interactions_correct= :correct  WHERE id= :uid " );
	$statement->bindParam(':interaction', $_POST['value']);
	$statement->bindParam(':correct', $_POST['correct']);
	$statement->bindParam(':uid', $_SESSION['UID']);

	pdo_try_catch  ( $statement  );
	echo ( $_SESSION['UID'] );
	return;

}


?>