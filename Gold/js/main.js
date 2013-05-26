//Gary W. Hunter Looney
//Project 3
//Add Character Java
//Term 1305
		


var saveData = function (key) {
	if (!key){
		var id = Math.floor(Math.random()*10000001);
	} else { 
		id = key;
	}

	var item = {};
		item.name = ["Name: ", cname.value];
		item.glasses = ["Glasses: ", glassesValue.value];
		item.sex = ["Sex: ", sex.value];
		item.birthdate = ["Birthdate: ", birthdate.value];
		item.race = ["Race: ", race.value];
		item.height = ["Height: ", height.value];
	localStorage.setItem(id, JSON.stringify(item));
	alert("Character Added!");
};

$('index.html').on('#additem', function(){


		var myForm = $('#addcharacter'),
			submit = $('#submitButton');
		
		var myForm.validate({
				invalidHandler: function(form, validator) {
					submit.click();
					var html = '';
					for(var key in validator.submitted){
						var label = $('label[for^="'+ key +'"]').not('[generated]');
						var legend = label.closet('fieldset').find('.ui-controlgroup-label');
						var fieldName = legend.length ? legend.text() : label.text();
						html += '<li>'+ fieldName +'</li>';
					};
					$("#error ul").html(html);
				},
			
				submitHandler: function() {
					var data = myForm.serializeArray();
					saveData(data);
				}
			});	
});