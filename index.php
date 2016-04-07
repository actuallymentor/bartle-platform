<?php
REQUIRE ( 'database/import-config.php' );
REQUIRE ( 'database/connect-database.php' );
// Print the existing table names to check if the connection works
echo "Databases: <pre>";
print_r (  unsafe_query ( 'show databases', $db ) ) ;
echo "</pre>";

?>