<?php
REQUIRE ( 'includes/header.php' );
REQUIRE ( 'database/connect-database.php' );
?>


<!-- HTML segment start -->

<!-- Header well -->
<div id="header-well" class="row">
	<div class="container center valign-wrapper">
	</div>
</div>
<!-- Header well -->

<!-- Card wrapper well -->
<div class="container main">
	<div class="row">
		<div class="body card">
			<div class="card-content">
				<div id="intro" class="row">
					<h3 class="center-align">Progress</h3>
					<hr class="col l8 offset-l2 m10 offset-m1 s12" />
					<br>
					<br>
					<p class="subtitle center-align">Total completed surveys: <?php
					 $results = unsafe_query ( 'SELECT COUNT(*) FROM Results;', $db );
					 echo $results[0]['COUNT(*)'];
					 ?> </p>
					 <p class="subtitle center-align">Gamified: <?php
					 $results = unsafe_query ( 'SELECT COUNT(*) FROM Results WHERE gamified=1;', $db );
					 echo $results[0]['COUNT(*)'];
					 ?> </p>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Card wrapper -->
</div>

<!-- HTML segment start -->

<?php

REQUIRE ( 'includes/footer.php' ); 

?>