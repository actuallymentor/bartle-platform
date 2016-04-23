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

		<div id="maincard" class="body card">
			<div class="questions card-content">
				<div class="container">
					<h4 id="question" class="center-align">Questions appear here</h4>
					<p id="subtext" class="center-align">Please answer these within the context of playing games (video games or otherwise).</p>
					<div class="nopadnomar row">
						<hr class="col l8 offset-l2 m10 offset-m1 s12" />
					</div>
					<div class="row" id="content">
						<p id="instructions" class="l8 offset-l2 m10 offset-m1 s12 center-align"></p>
						<a id="one" class="answer col l10 offset-l1 m12 s12 waves-effect waves-light btn">Option 1 appears here</a>
						<a id="two" class="answer col l10 offset-l1 m12 s12 waves-effect waves-light btn">Option 2 appears here</a>
					</div>
					<div id="progress" class="row">
						<p class="center">Progress:</p>
						<div class="progress col l8 offset-l2 m10 offset-m1 s12">
							<div class="determinate" style="width: 1%"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="gamifiedcard" class="col l3 offset-l1 m12 s12 body card hide">
			<div class="container">
				<div id="gamification" class="row">

				</div>
			</div>
		</div>


	</div>
</div>

<!-- Card wrapper -->
</div>

<script src="includes/survey/questions.js"></script>
<script src="includes/survey/stroop_colors.js"></script>
<script src="includes/underscore-min.js"></script>
<script src="includes/survey/survey.js"></script>

<script>
	if  ( Math.random < .5 ) {
		var gamification = true	
	} else {
		var gamification = false
	}
</script>

<script>
var demographics = {
		age: "default",
		gender: "default",
		email: "default"
	}
	demographics['age'] = "<?php if (isset($_POST['age']) ) {echo $_POST['age'];} ?>"
	demographics['gender'] = "<?php if (isset($_POST['gender']) ) {echo $_POST['gender'];} ?>"
	demographics['email'] = "<?php if (isset($_POST['email']) ) {echo $_POST['email'];} ?>"
</script>


<!-- HTML segment start -->

<?php

REQUIRE ( 'includes/footer.php' ); 

?>