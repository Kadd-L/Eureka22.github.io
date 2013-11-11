---
layout: post
description: "几款主流地图api的试用"
category: "学习"
tags: [地图, api, google, baidu]
---
#几款主流地图api的试用
---
目前地图api有很多，比较常用的有谷歌，百度，必应等，而且有各种版本，有JS的、AJAX的还有若干支持移动应用的版本，之前看到了在HTML5中获取位置的例子，所以迫不及待试一下╮(╯▽╰)╭。

##谷歌地图api

<html>
<body>
<div id="mapholder"></div>

<script src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script src="http://api.map.baidu.com/api?v=1.4" type="text/javascript"></script>  
<script>

var x=document.getElementById("demo");
(function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
  else{x.innerHTML="Geolocation is not supported by this browser.";}
  })()

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
</body>
</html>

##soso地图api

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script charset="utf-8" src="http://map.soso.com/api/v2/main.js"></script>
<script>
function getlocation()
{
    if (navigator.geolocation)
      {
      navigator.geolocation.getCurrentPosition(init);
      }
    else{x.innerHTML="Geolocation is not supported by this browser.";}
}

function init(pos) {
    var map = new soso.maps.Map(document.getElementById("container"), {
        // 地图的中心地理坐标。
        center: new soso.maps.LatLng(pos.coords.latitude,pos.coords.longitude),
		zoom: 15
    });
    var marker=new soso.maps.Marker({
        position:center,
		animation:soso.maps.MarkerAnimation.DROP,
        map:map
    });
	
}
</script>
</head>
<body onload="getlocation();">
	

<div style="width:500px;height:250px" id="container"></div>
</body>
</html>

目前只试了这两个，还会有更多功能的测试，待续。
