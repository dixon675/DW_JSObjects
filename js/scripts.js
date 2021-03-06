function Image(paintPrev, artist, paintTitle, tags, color) {
	this.painting = paintPrev;
	this.artist = artist;
	this.title = paintTitle
	this.tags = tags;
	this.color = color;
	this.display = function() {

		console.log('entering display function');

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
		})
		container.css("background", this.color);
		container.addClass("paintings");
		container.addClass("All");

		var imageBox = "";
		imageBox += "<img src='" + this.painting + "'>";
		imageBox += "<h2>" + this.title + "</h2>";
		imageBox += "<br><cite>" + this.artist + "</cite>";

		container.html(imageBox)
		$(".images").prepend(container);
	}
}


// Individual images

var paint = [
	new Image('imgs/starry_night_full.jpg', '~ Vincent Van Gogh ~', 'Starry Night', ["All", "Post-Impressionism", "Van Gogh"], "#AAE3A7"),
	new Image('imgs/entry_of_the_crusaders.jpg', '~ Eugene Delacroix ~', 'Entry of the Crusaders in Constantinople', ["All", "Romanticism", "Delacroix"], "#F1C0A0"),
	new Image('imgs/van_gogh_wheatfield.jpg', '~ Vincent Van Gogh ~', 'Wheatfield with Crows', ["All", "Post-Impressionism", "Van Gogh"], "#AAE3A7"),
	new Image('imgs/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg', '~ Leonardo Da Vinci ~', 'The Last Supper', ["All", "Renaissance", "Da Vinci"], "#F2F1D1"),
	new Image('imgs/girl_with_pearl_earring.jpg', '~ Johannes Vermeer ~', 'Girl with a Pearl Earring', ["All", "Dutch Golden Age", "Vermeer"], "#9BA1D1"),
	new Image('imgs/Jan_Vermeer_-_The_Art_of_Painting.jpg', '~ Johannes Vermeer ~', 'The Art of Painting', ["All", "Dutch Golden Age", "Vermeer"], "#9BA1D1"),
	new Image('imgs/libertyLeadingThePeople.jpg', '~ Eugene Delacroix ~', 'Liberty Leading the People', ["All", "Romanticism", "Delacroix"], "#F1C0A0"),
	new Image('imgs/Eugene_delacroix.jpg', '~ Eugene Delacroix ~', 'Self Portrait', ["All", "Romanticism", "Delacroix"], "#F1C0A0"),
	new Image('imgs/mona-lisa.jpg', '~ Leonardo Da Vinci ~', 'The Mona Lisa', ["All", "Renaissance", "Da Vinci"], "#F2F1D1"),
	new Image('imgs/Vincent_van_Gogh_-_Self-Portrait.jpg', '~ Vincent Van Gogh ~', 'Self Portrait', ["All", "Post-Impressionism", "Van Gogh"], "#AAE3A7")

]


// Global taglist
var tagList = [];

paint.forEach(function(image){
	image.display();
	image.tags.forEach(function(tag){
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

	$(".paintings").not("." + tag).fadeOut();
	$("."+ tag).fadeIn();

	$('.filter').removeClass("active");
	$(this).addClass("active");
})