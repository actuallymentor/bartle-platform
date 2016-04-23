<?php
REQUIRE ( 'includes/header.php' ); 
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
			<div class="questions card-content">
				<div class="container">
					<h3 id="question" class="center-align">Instructions</h3>
					<p class="l8 offset-l2 m10 offset-m1 s12 center-align">
						You will be presented with a number of questions.
						<br>Please answer these <b>within the context of playing games</b> (video games or otherwise).
					</p>
					<form action="bartle.php" method="POST">
						<div class="col l8 offset-l2 m10 offset-m1 s23">
							<label>What is your age?</label>
							<select name="age" style="display: block!important;">
								<option value="18">Under 18</option>
								<option value="18-25">18-25</option>
								<option value="25-35">25-35</option>
								<option value="35-50">35-50</option>
								<option value="50">Over 50</option>
							</select>
							<label>What is your gender?</label>
							<select name="gender" style="display: block!important;">
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="other">Other</option>
							</select>
							<label>What is your email? (Optional)</label>
							<input type="email" name="email"></input>
							<input id="one" class="answer col l10 offset-l1 m12 s12 waves-effect waves-light btn" type="submit" value="I Understand and Agree"></input>
						</div>
						<hr class="col l8 offset-l2 m10 offset-m1 s12" />
						<p class="col l12 m12 s12 center">The data from your activity will be used for research purposes.</p>
					</form>
					<div class="row center" id="content">
						<p id="experiment_message"></p>
					</div>
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