// This is a remake of JSON.stringify called Stringfy it uses the underscore library


var stringfy = function(n){


	var pattern = '"' + n + '"'

	var string="";

	if(typeof n === undefined){
		return n;
	}

	if(typeof n === "boolean"){ 
		return n;
	}

	if(typeof n === "number"){
		return pattern;
	}

	if(typeof n === "string"){
		return pattern;
	}

	if(Array.isArray(n)){ 

		var newArray = [] 
		
		 _.each(n, function(value){
		 
			var step1 = (stringfy(value));
			
			newArray.push(step1);

		})
		 
		return "[" + newArray + "]";

	}

	if(typeof n === "object"){ 

		var newArray = [];

		_.each(n, function(value, key){

		 	var stringKey = (stringfy(key));

			var stringValue = (stringfy(value));
			
			var pattern = stringKey + ":" + stringValue;

			newArray.push(pattern);

			})
		
		return "{" + newArray + "}";

	}

	

};







