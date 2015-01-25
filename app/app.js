var APP = (function(){

	var privateVar = "I'm super private";

	var privateFunc = function() {
		return privateVar;
	}

	return {

		publicFunc : function() {
			return "I'm super public"
		},

		getPrivate : function(){
			return privateFunc();
		}

	}

}());