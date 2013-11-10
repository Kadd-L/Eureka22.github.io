---
layout: page
bootstrap: true
title: Happy Birthday
image:
  feature: bkgimg/present3.jpg
description: "An archive of posts."
permalink: /present/
---


  <body>

	<h1>Hello, world!</h1>
	<div class="btn-group">
	  <button type="button" class="btn btn-default">Left</button>
	  <button type="button" class="btn btn-default">Middle</button>
	  <button type="button" class="btn btn-default">Right</button>
	</div>
	<div class="progress progress-striped active">
	  <div class="progress-bar"  role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%">
	    <span class="sr-only">45% Complete</span>
	  </div>
	</div>
	<!-- Button trigger modal -->
	<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
	  Launch demo modal
	</button>
	
	<!-- Modal -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
	      </div>
	      <div class="modal-body">
	        ...
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	        <button type="button" class="btn btn-primary">Save changes</button>
	      </div>
	    </div><!-- /.modal-content -->
	  </div><!-- /.modal-dialog -->
	</div><!-- /.modal -->
	
	<form role="form">
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
	  </div>
	  <div class="form-group">
	    <label for="exampleInputFile">File input</label>
	    <input type="file" id="exampleInputFile">
	    <p class="help-block">Example block-level help text here.</p>
	  </div>
	  <div class="checkbox">
	    <label>
	      <input type="checkbox"> Check me out
	    </label>
	  </div>
	  <button type="submit" class="btn btn-default">Submit</button>
	</form>
	
	<ul class="pagination">
	  <li><a href="#carousel-example-generic">&laquo;</a></li>
	  <li><a href="#">1</a></li>
	  <li><a href="#">2</a></li>
	  <li><a href="#">3</a></li>
	  <li><a href="#">4</a></li>
	  <li><a href="#">5</a></li>
	  <li><a href="#">&raquo;</a></li>
	</ul>
	<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
	  <!-- Indicators -->
	  <ol class="carousel-indicators">
	    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
	    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
	    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
		<li data-target="#carousel-example-generic" data-slide-to="3"></li>
	  </ol>

	  <!-- Wrapper for slides -->
	  <div class="carousel-inner">
	    <div class="item active">
	      <img src="{{site.url}}/images/snowball.jpg" alt="Snowball">
	      <div class="carousel-caption">
			  Snowball
	      </div>
	    </div>
		
	    <div class="item">
	      <img src="{{site.url}}/images/snowball.jpg" alt="Snowball">
	      <div class="carousel-caption">
			  Snowball
	      </div>
	    </div>
		
	    <div class="item">
	      <img src="{{site.url}}/images/snowball.jpg" alt="Snowball">
	      <div class="carousel-caption">
			  Snowball
	      </div>
	    </div>
		
	    <div class="item">
	      <img src="{{site.url}}/images/snowball.jpg" alt="Snowball">
	      <div class="carousel-caption">
			  Snowball
	      </div>
	    </div>
		
	    ...
	  </div>

	  <!-- Controls -->
	  <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
	    <span class="glyphicon glyphicon-chevron-left"></span>
	  </a>
	  <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
	    <span class="glyphicon glyphicon-chevron-right"></span>
	  </a>
	</div>
	
	

	<p id="demo">点击这个按钮，获得您的位置：</p>
	<button onclick="getLocation()">试一下</button>
	<div id="mapholder"></div>
	<script src="http://maps.google.com/maps/api/js?sensor=false"></script>
	<script>
	var x=document.getElementById("demo");
	function getLocation()
	  {
	  if (navigator.geolocation)
	    {
	    navigator.geolocation.getCurrentPosition(showPosition,showError);
	    }
	  else{x.innerHTML="Geolocation is not supported by this browser.";}
	  }

	function showPosition(position)
	  {
	  lat=position.coords.latitude;
	  lon=position.coords.longitude;
	  latlon=new google.maps.LatLng(lat, lon)
	  mapholder=document.getElementById('mapholder')
	  mapholder.style.height='250px';
	  mapholder.style.width='500px';

	  var myOptions={
	  center:latlon,zoom:14,
	  mapTypeId:google.maps.MapTypeId.ROADMAP,
	  mapTypeControl:true,
	  navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
	  };
	  var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
	  var marker=new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
	  }

	function showError(error)
	  {
	  switch(error.code) 
	    {
	    case error.PERMISSION_DENIED:
	      x.innerHTML="User denied the request for Geolocation."
	      break;
	    case error.POSITION_UNAVAILABLE:
	      x.innerHTML="Location information is unavailable."
	      break;
	    case error.TIMEOUT:
	      x.innerHTML="The request to get user location timed out."
	      break;
	    case error.UNKNOWN_ERROR:
	      x.innerHTML="An unknown error occurred."
	      break;
	    }
	  }
	</script>
	
	
	
	
	
	
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://code.jquery.com/jquery.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
   
   
   
   
   
	
  </body>
