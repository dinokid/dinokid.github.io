function loadXMLDoc(url,cfunc)
{
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=cfunc;
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}

var newsImageList;
function getNewsImage() {
    loadXMLDoc("newsImageList", function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            newsImageList = xmlhttp.responseText;
            newsImageList.parse(newsImageList);
        }
        setInterval(changeNewsImage, 5000);
    });
}

var imageIndex = 1;
function changeNewsImage() {
    $('#newsImage')[0].src = newsImageList[imageIndex];
    imageIndex++;
    imageIndex %= newsImageList.length;
}