$(document).ready(function(){

	reloadlink();
//esta todo concatenado

$("#addboton")
	.removeAttr("disabled")
	.click(function(){
	
	
		$("#menu").append('<li><a href ="'+$("#addlink").val()+'"></a></li>');
		$("#addlink").val("");
		reloadlink();
	});

	



});

	function reloadlink(){

		$("a").each(function(index){
		
			var that = $(this);
			var enlace = $(this).attr("href");
			that.attr("target","_blank");

			that.text(enlace);
	});

	}