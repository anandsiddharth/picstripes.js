/*
 +	
|| Picstripes.js
|| Anand Siddharth
|| (C) Copyright 2014
|| Version 1.0	
 +
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Make Your Configration Here
var animation_delay = "1s";  //in seconds example : "1s" for 1 second
var effect = "fade_zoom";
var image_title = true;
/*
List of Defined Effects:-
effect_0 : appear
effect_1 : fade_zoom;
effect_2 : rotate_on_own;
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("Starting Picstripes JS.");
console.log("Script by Anand Siddharth");
switch(effect){
	case "appear":
		console.log("[*] Setting up appear effect...");
		hide = "0";
		show = "0";
		break;
	case "fade_zoom":
		console.log("[*] Setting up fade_zoom effect...");
		hide = "scale(0.6,0.6)";
		show = "scale(1,1)";
		break;
	case "rotate_on_own":
		console.log("[*] Setting up rotate_on_own effect...");
		show = "rotatey(180deg)";
		hide = "rotatey(90deg)";
		break;
	default:
		console.log("[*] Undefined effect: "+effect+". Choosing \"fade_zoom\" as default effect.");
		hide = "scale(0.6,0.6)";
		show = "scale(1,1)";
		break;
};
var pic1 = $(".picstripes-js .box .pic-1");
var pic2 = $(".picstripes-js .box .pic-1");
var oneTimeImageLoader;
var imageLocation;
$(document).ready(function(){
	$("html").css({
		margin : "0",
		padding : "0"
	});
	$("body").css({
		margin : "0",
		padding : "0"
	});
	$(".images").css("display","none");
	loadPicstripes();
	$(".picstripes-js .box").click(function(){
		if($(".picstripes-js").attr("preview") != "active"){
			$(this).addClass("active-image");
			$(".picstripes-js").attr("preview","active");
			clicked = $(this).index() + 1;
			pic1 = $(".picstripes-js .box:nth-child("+clicked+") .pic-1").css("opacity");
			if(pic1 == "1"){
				image = $(".picstripes-js .box:nth-child("+clicked+") .pic-1").css("backgroundImage");
			}else{
				image = $(".picstripes-js .box:nth-child("+clicked+") .pic-2").css("backgroundImage");
			};
			$(".picstripes-js .preview-image").css({
				visibility : "visible",
				opacity : "1"
			});
			$(".picstripes-js .preview-image img").css({
				backgroundImage : image,
				transform : "scale(0.9,0.9)",
				opacity : "1",
				visibility : "visible"
			});
			if(image_title == true){
				titleCreator();
			};
		};
	});
	$(".picstripes-js .preview-image .close-preview").click(function(){
		closePreview();
	});
	$(".picstripes-js .preview-image .close-preview").mouseover(function(){
		$(this).css({
			backgroundColor: "rgba(0,0,0,0.5)",
			boxShadow: "0 0 10px 1px silver"
		});
	});
	$(".picstripes-js .preview-image .close-preview").mouseout(function(){
		$(this).css({
			backgroundColor: "rgba(0,0,0,0.3)",
			boxShadow: "0 0 0px 0px black"
		});
	});
});
$(window).resize(function(){
	$(".picstripes-js .box").remove();
	$(".picstripes-js .preview-image").remove();
	document.write("Resizing the browser has crashed the plugin plz wait while the page reloads");
	location.reload();
});
function loadPicstripes(){
	$("body").css("overflow","hidden");
	$(".picstripes-js").css({
		display : "inline-block",
		height : "100%",
		width : "100%",
		top: "0",
		left : "0",
		background : "rgba(0,0,0,1)"	
	});
	var avail_width = window.innerWidth;
	var avail_height = window.innerHeight;
	if(avail_width <= 800){
		box_width = avail_width / 2;
	}else{
		box_width = avail_width / 4 ;
	};	
	if(avail_height <= 500){
		box_height = avail_height /2;
	}else{
		box_height = avail_height /4;
	};
	for(var i = 1; i<=16; i++){
		$(".picstripes-js").append("<div class=\"box\"></div>");
	};
	$(".picstripes-js .box").css({
		display : "inline-block",
		width : box_width,
		height : box_height,
		margin : "0",
		border : "0",
		position : "relative",
		overflow : "hidden",
		cursor : "pointer"
	});
	$(".picstripes-js .box").append("<div class='pic pic-1'></div>");
	$(".picstripes-js .box").append("<div class='pic pic-2'></div>");
	$(".picstripes-js").append("<div class=\"preview-image\"></div>");
	$(".picstripes-js .preview-image").append("<div  class=\"close-preview\"><span>X</span></div>");
	$(".picstripes-js .preview-image .close-preview").css({
		height: "150px",
		width: "150px",
		position: "relative",
		backgroundColor: "rgba(0,0,0,0.3)",
		borderRadius: "0 1% 100% 0",
		zIndex: "100",
		cursor: "pointer"
	});
	$(".picstripes-js .preview-image .close-preview span").css({
		fontSize: "80px",
		color : "#fff",
		fontFamily: "sans-serif",
		position: "relative",
		top : "15px",
		right: "-30px"
	});
	$(".picstripes-js .preview-image").append("<img />");
	$(".picstripes-js .box div").css({
		backgroundSize : "99%",
		backgroundPosition : "center",
		backgroundRepeat : "no-repeat",
		height : "100%",
		width : "100%",
		transition : animation_delay,
		top : "0",
		left : "0"
	});
	$(".picstripes-js .box .pic-1").css({
		opacity : "0",
		transform : hide
	});
	$(".picstripes-js .box .pic-2").css({
		opacity : "0",
		position : "absolute",
		transform : hide
	});
	$(".picstripes-js .preview-image").css({
		top : "0",
		left : "0",
		right : "0",
		bottom : "0",
		backgroundColor : "rgba(0,0,0,0.8)",
		height : "100%",
		width : "100%",
		opacity : "0",
		visibility : "hidden",
		transition : "0.2s",
		position :"absolute"
	});
	$(".picstripes-js .preview-image img").css({
		top : "0",
		left : "0",
		transform : "scale(0.8,0.8)",
		transition : "0.7s",
		position : "absolute",
		height : "100%",
		width : "100%",
		opacity : "0",
		visibility : "hidden",
		backgroundSize : "100%",
		backgroundPosition : "center",
		backgroundRepeat : "no-repeat",
		border : "0 transparent"
	});
	a = 1;
	oneTimeImageLoader =setInterval(function(){
						imageChosen = chooseRandomImage();
						$(".picstripes-js .box:nth-child("+a+")").attr("location",imageLocation);
						$(".picstripes-js .box:nth-child("+a+") .pic-1").css({
							opacity : "1",
							transform : show,
							backgroundImage : imageChosen
						});
						a++;
					}, 150);
	timeOut = $(".images img").size() * 200;
	setTimeout(function(){
		clearInterval(oneTimeImageLoader);
		setInterval(function(){
			choose = Math.ceil(Math.random() * $(".picstripes-js .box").size());
			imageChosen = chooseRandomImage();
			$(".picstripes-js .box:nth-child("+choose+")").attr("location",imageLocation);
			if($(".picstripes-js .box:nth-child("+choose+") .pic-1").css("opacity") == "1"){
				$(".picstripes-js .box:nth-child("+choose+") .pic-1").css({
					transform : hide,
					opacity : "0"
				});
				$(".picstripes-js .box:nth-child("+choose+") .pic-2").css({
					transform : show, 
					opacity : "1",
					backgroundImage : imageChosen
				});
			} else {
				$(".picstripes-js .box:nth-child("+choose+") .pic-1").css({
					transform : show,
					opacity : "1",
					backgroundImage : imageChosen
				});
				$(".picstripes-js .box:nth-child("+choose+") .pic-2").css({
					transform : hide,
					opacity : "0"			
				});
			}
		}, 4000);
	}, timeOut);
};
function chooseRandomImage(){
	choosePic = Math.ceil(Math.random() * $(".images img").size());
	imageSrc = $(".images img:nth-child("+choosePic+")").attr("src");
	imageLocation = choosePic;
	return "url('"+imageSrc+"')";
};
$(document).keyup(function(e){
	if($(".picstripes-js").attr("preview") == "active"){
		if(e.keyCode == 27){
			closePreview();
		};
	};
});
function closePreview(){
	$(".box").removeClass("active-image");
	$(".picstripes-js").attr("preview","inactive");
	$(".picstripes-js .preview-image img").css({
		backgroundImage : "url('http://')",
		transform : "scale(0.8,0.8)",
		opacity : "0",
		visibility : "hidden"
	});
	$(".picstripes-js .preview-image").css({
		visibility : "hidden",
		opacity : "0"
	});
	$(".picstripes-js .preview-image .image-title").remove();
};
function titleCreator(){
	selected= $(".active-image").attr("location");
	selected = parseInt(selected);
	current_image = $(".images img:nth-child("+selected+")").attr("data-title");
	if(current_image.length > 0){
		$(".picstripes-js .preview-image").append("<div class=\"image-title\"><h1>"+current_image+"</h1></div>");
		$(".picstripes-js .preview-image .image-title").css({
			position: "absolute",
			bottom: "0",
			width: "100%",
			height: "100px",
			backgroundColor: "rgba(0,0,0,0.3)",
			zIndex: "100"
		});
		$(".picstripes-js .preview-image .image-title h1").css({
			fontSize: "60px",
			fontFamily: "sans-serif",
			marginTop: "20px",
			color: "#fff",
			marginRight: "20px",
			textAlign: "right"
		});
	};
};