$(document).ready(function(){
	var fizz = "fizz"
	var buzz = "buzz"

	for(var i = 1;i<=100;i++){

		if(!(i % 5)){

			if(!(i % 3)){

				$('body').append('<p>').append(fizz+buzz);

			} else {

				$('body').append('<p>').append(buzz);

			}

		} else if(!(i % 3)){

			$('body').append('<p>').append(fizz);

		} else {

			$('body').append('<p>').append(i);
			
		}

	}

})