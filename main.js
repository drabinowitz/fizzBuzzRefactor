var fizz = "fizz";
var buzz = "buzz";

$(document).ready(function(){
 
 fizzInput(+prompt('enter fizz number'))

})

var fizzInput = function (inputVal){

	if (inputVal && Math.floor(inputVal) == inputVal){

		for(var i = 1;i<=inputVal;i++){

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

	} else {

		alert('must enter an integer value!');
		location.reload();

	}

}