// var quotes = [
// '"Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure." - Mariann Williamson',
// '"Life is only precious because it ends." - Rick Riordan'
// ]

var quote1 = {
	quote: '"Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure."',
	author: "Mariann Williamson",
	tags: ["author", "humanity"],
	color: "#0a3410",
	display: function() {
		var quoteString = "";
		quoteString += "<div style='background:" + this.color + "'>";
		quoteString += "<p>" + this.quote + "</p>";
		quoteString += "<cite>" + this.author + "</cite>";
		quoteString += "</div>";
		$("body").prepend(quoteString);
	}
}

// var quoteString = "";
// quotes.forEach(function(quote){
// 	console.log("x = " + quote);

// 	quoteString += "<p>" + quote + "</p>";

// 	console.log(quoteString);
// })

// $("body").html(quoteString);