<?php
// This file imports the config ini and can be used to define other central helper resources

///////////////////
// Get the ini file
///////////////////
shell_exec ( 'touch database/config.ini' ); 
$config = parse_ini_file( 'database/config.ini' );

// Error logging function

function log_error  ( $message, $file = 'database/error.log' ) {
	shell_exec  ( 'touch ' . $file ); 
	shell_exec ( 'echo "' . date('Y-m-d H:i:s') . ' ' . $message . '" >> ' . $file ); 
}

// Initiale session log
if  ( $config['debug'] ) {
	log_error ( 'Debugging active -------------------------' ); 
}

?>