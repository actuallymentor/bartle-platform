<?php
REQUIRE ( 'database/connect-database.php' );

echo "Databases: <pre>";
print_r (  unsafe_query ( 'show databases', $db ) ) ;
echo "</pre>";

?>