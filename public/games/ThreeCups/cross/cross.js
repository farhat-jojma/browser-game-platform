var details;
$(function() {
	var isInIframe = (window.location != window.parent.location) ? true : false;
	var url = (window.location != window.parent.location) ? document.referrer: document.location.href;
	
	details = getSyncScriptParams();
	if(isInIframe){
		checkHostname(url);
	}
});

function loadB(){
	$.get('../../../cross/overlay.html', function(data){
		$('body').prepend(data);
		buildB();
		displayB();
	});		
}

var closeCon = false;
var closeTimer
function buildB(){
	$('#overlayLink').click(function(event){
		event.preventDefault();
		if(!closeCon){
			window.parent.location = details.link;
		}
	});
	$('#overlayClose').click(function(event){
		event.preventDefault();
		$('#overlay').hide();
		closeCon = true;
		clearTimeout(closeTimer);
		closeTimer = setTimeout(function(){ closeCon = false; }, 500);
	});
}

function displayB(){
	$('#overlay').show();	
}

function getSyncScriptParams() {
	 var scripts = document.getElementsByTagName('script');
	 var bannerCon = false;
	 var linkTo;
	 for(scriptNum=0;scriptNum<scripts.length;scriptNum++){
		 var scriptName = scripts[scriptNum];
		 
		 if(scriptName.getAttribute('src')=='../../../cross/cross.js'){
			 bannerCon = scriptName.getAttribute('data-banner');
			 linkTo = scriptName.getAttribute('data-link');
		 }
	 }
	 return {
		 banner : bannerCon,
		 link : linkTo
	 };
}

function checkHostname(url){
	var hostname = url;
	hostname = hostname.substring(0,4) == 'www.' ? hostname.substring(4,hostname.length) : hostname;
	var url = $('meta[property="og:url"]').attr("content");
	
	var newHostname = extractDomain(hostname);
	var newUrl = extractDomain(url);
	
	var redirect = false;
	var urlRequest = ['www.demonisblack.com','demonisblack','codecanyon.net','preview.codecanyon.net','localhost',newUrl];
	details.trust = true;
	
	if(urlRequest.indexOf(newHostname) == -1){
		details.trust = false;
	}
	
	console.log('trust : '+details.trust +', banner : '+details.banner);
	if(!details.trust){
		if( details.banner ){
			loadB();
		}else{
			window.parent.location = details.link;
		}
	}
}

function extractDomain(url) {
    var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];

    return domain;
}