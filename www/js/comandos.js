// JavaScript Document

var x;
	x=$(document);
	x.ready(inicio);
	
	function inicio(){
		var x=$("#menuicono");
		x.click(muestrame);
	}
	function muestrame(){
		var x=$("#menu");
		x.toggle("slow");//slidetoggle
	}