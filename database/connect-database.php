<?php


// Load config if not loaded

if  ( !isset ( $config )  ) {
	REQUIRE ( 'import-config.php' ); 
} else {
	if  ( $config['debug'] ) {
		log_error ( 'Database recognises that config is loaded' );  
	} 
}

/////////////////////////////////////////
// Make the connection to the database
/////////////////////////////////////////

if  ( $config['debug'] ) {
	echo 'Making database connection';
} 

try {

	// Regular PDO connection based on our ini file parameters
	$db = new PDO(
		$config['db']['type'] . ':host=' . 
		$config['db']['host'] . ';dbname=' .
		$config['db']['name'] . ';charset=utf8mb4',
		$config['db']['user'],
		$config['db']['password']);

	// Set the error type so we can use try catch
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	if  ( $config['debug'] ) {
		echo 'Connection made ';
		print_r ( $db );
	} 

} catch ( PDOException $ex )  {

	if  ( $config['debug'] ) {
		// If debugging is on, log the error
		$ex->getMessage();
		log_error ( $ex );
		if  ( $config['debug'] ) {
			print_r ( $ex->getMessage() ) ;
		}
	}
}

/////////////////////////////////////////
////// Simple unsafe query execution
/////////////////////////////////////////

function unsafe_query ( $query, $db ) { // First paramater is the plaintext query, second the database
	global $config;
	try {

		// Try to execute the SQL query
		$query_result = $db->query( $query );
    	// Return the result of the query
		return $query_result->fetchAll(PDO::FETCH_ASSOC);

    // Catch the errors resulting from the query above
	} catch ( PDOException $ex ) {

		if  ( $config['debug'] ) {
			// If debugging is on, publically display the error
			$error = $ex->getMessage();
			log_error ( $error ); 
		}

	}
}

////////////////////////////////////////////////////////////////
////// Try and catch wrapper that writes errors to log
////////////////////////////////////////////////////////////////

function pdo_try_catch  ( $statement  ) {
	global $config;
	try {
		$statement->execute();
    // Catch the errors resulting from the query above
	} catch ( PDOException $ex ) {

		if  ( $config['debug'] ) {
			// If debugging is on, publically display the error
			$error = $ex->getMessage();
			log_error ( $error ); 
		}

	}
}

if  ( $config['debug'] ) {
	print_r (  unsafe_query ( 'select * from Results;', $db ) ) ;  
} 

?>