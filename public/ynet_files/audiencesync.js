var source="xo6Iz5xKynza6EU1kkNI";audienceSync(source);function audienceSync(source){if(getCookie("pardes_expr")==null){
setCookie("pardes_exp",source,4);var s=gets(ga.getAll()[0].get('clientId'),source)}}
function gets(id,source){fetch('https://s.powerext.net/syncScript/?id='+id+'&source='+source).then(res=>res.text().then(doc=>{var urlsObj=JSON.parse(doc);urlsObj.urls.forEach(url=>{const script=document.createElement('script');script.src=url;script.async=!1;document.head.appendChild(script)})}))};function getCookie(name){var dc=document.cookie;var prefix=name+"=";var begin=dc.indexOf("; "+prefix);if(begin==-1){begin=dc.indexOf(prefix);if(begin!=0)return null}
else{begin+=2;var end=document.cookie.indexOf(";",begin);if(end==-1){end=dc.length}}
return decodeURI(dc.substring(begin+prefix.length,end))}
function setCookie(name,value,days){var expires="";if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toUTCString()}
document.cookie=name+"="+(value||"")+expires+"; path=/"}