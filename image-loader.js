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
	for (var image in images) {
		if (!images.hasOwnProperty(image)) {
			alert("!");
		}
		var newLink = document.createElement("a");
		newLink.setAttribute("class", "image");
		newLink.setAttribute("href", image);
		imageContainer.appendChild(newLink);
		
		var newImage = document.createElement("img");
		newImage.setAttribute("src", image);
		newImage.setAttribute("class", "thumb");
		newLink.appendChild(newImage);
	}
}