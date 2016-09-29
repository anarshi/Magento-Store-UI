<?php
		

?>


<!DOCTYPE html>
<html>
<head>
	<title>Calculator</title>

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

</head>
<body>	
<div class="container">
	<div class="col-md-12 col-xs-12 col-lg-12">
		<div class="form-group">
		    <label for="bid">Bid</label>
		    <input type="text" class="form-control" id="bid" placeholder="EG: ¥ 10,000" required="true">
	  	</div>
	    <div class="form-group">
	        <label for="nz-dollar" id="nz-dollar">NZ $</label>
	    </div>
	    <div class="checkbox">
	       <label id="nz-gst">NZ GST $ </label>
	    </div>
	    <div class="checkbox">
	       <label id="imporer-exporter">IMPOERTER / EXPORTTER FEE ¥ </label>
	    </div>
	    <div class="form-group">
		  <label for="sel1">Select list:</label>
		  <select class="form-control" id="sel1">
		    <option data-id = "1">AERO KITS (small)</option>
		    <option data-id = "2">AERO KITS (large)</option>
		    <option data-id = "3">AERO LIPS / BOOT SPOILERS ETC</option>
		    <option data-id = "4">AERO SIDESTEPS</option>
		  </select>
		</div>
	    <button type="submit" class="btn btn-default">Submit</button>
	</div>
</div>
</body>	
</html>>

