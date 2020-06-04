

$(document).ready(function(){
	$(window).scroll(function(){
		var scroll=$(window).scrollTop();
		if(scroll>50){
			$("#nav").css("background","#f04a29");
		}
		else{
			$("#nav").css("background","transparent");
		}
	})
})

// --------------------------------
// PRELOADER
// --------------------------------

    setTimeout(function(){
        $('.preloader').fadeToggle();
    }, 9000);