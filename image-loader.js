// $('#gallery').load(callForImages());
callForImages();

function callForImages() {
	
	var httpReq = (window.XMLHttpRequest) ? new XMLHttpRequest : 
		new ActiveXObject("Microsoft.XMLHTTP");
	
	httpReq.onload = function() {
		
		//Convert the result back into JSON
		var images = JSON.parse(httpReq.responseText);
		
		loadImages(images);
	}
	
	try {
		httpReq.open("GET", "image-loader.php", true);
		httpReq.send(null);
	} catch (e) {
		console.log(e);
	}
}

function loadImages(images) {
	var imageContainer = document.getElementById("gallery");
	console.log(images);
	for (var image in images) {
		if (!images.hasOwnProperty(image)) {
			alert("!");
		}
		console.log(image);
		var newLink = document.createElement("a");
		newLink.setAttribute("class", "image");
		newLink.setAttribute("href", image);
		imageContainer.appendChild(newLink);
		
		var newImage = document.createElement("img");
		newImage.setAttribute("src", image);
		newImage.setAttribute("class", "thumb");
		newImage.width = images[image]["width"];
		// newImage.height = images[image]["height"];
		// newImage.width = 365;
		var w = newImage.width *= 0.5;
		// var w = newImage.getAttribute("width");
		// var newWidth = w * 0.5;
		// newImage.setAttribute("width", newWidth);
		newLink.appendChild(newImage);
	}
}