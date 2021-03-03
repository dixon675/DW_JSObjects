// var quotes = [
// '"Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure." - Mariann Williamson',
// '"Life is only precious because it ends." - Rick Riordan'
// ]

// var quoteString = "";
// quotes.forEach(function(quote){
// 	console.log("x = " + quote);

// 	quoteString += "<p>" + quote + "</p>";

// 	console.log(quoteString);
// })

// $("body").html(quoteString);


function Quote(quoteText, author, tags, color) {
	this.quote = quoteText;
	this.author = author;
	this.tags = tags;
	this.color = color;
	this.display = function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
		})
		container.css("background", this.color);
		container.addClass("quote");

		var quoteString = "";
		quoteString += "<p>" + this.quote + "</p>";
		quoteString += "<cite>" + this.author + "</cite>";

		container.html(quoteString)
		$(".quotes").prepend(container);
	}
}

var quotes = [
	new Quote('"Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure."', "- Marianne Williamson", ["Author", "Inspiration", "Introspective"], "#9BA1D1"),
	new Quote('"Life is only precious because it ends."', "- Rick Riordan", ["Author", "Life", "Introspective"], "#BAE2DD")
]


// Global taglist
var tagList = [];

quotes.forEach(function(quote){
	quote.display();
	quote.tags.forEach(function(tag){
		// Check to see if tag has already been added
		if(!tagList.includes(tag)) {

			// if it isn't added, add it
			tagList.push(tag);

			// and make a button for it
			$(".buttons").prepend("<button class='filter'>" + tag + "</button>");
		}
	})

});
console.log(tagList);

$(".filter").on("click", function() {
	var tag = $(this).text();
	console.log(tag);

	$(".quote").not("." + tag).hide();
	$("."+ tag).fadeIn();

	$('.filter').removeClass("active");
	$(this).addClass("active");
})