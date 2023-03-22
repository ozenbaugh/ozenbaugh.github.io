function tier1show() {
	var x = document.getElementById("tier1");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function tier2show() {
	var x = document.getElementById("tier2");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function tier3ashow() {
	var x = document.getElementById("tier3a");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function tier3bshow() {
	var x = document.getElementById("tier3b");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function tier4show() {
	var x = document.getElementById("tier4");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

function borderChange(id, color) {
	document.getElementById(id).style.borderColor = color;
  }