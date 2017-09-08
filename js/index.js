function getBeerAPIByName(name,yeast) {
    
	var apiURL="";
	if(name == "" & yeast !=""){
         apiURL = 'https://api.punkapi.com/v2/beers/?yeast=' + yeast 
         document.getElementById('txt').innerHTML = ''
    }	
    else if(name != "" & yeast ==""){ 
        apiURL = 'https://api.punkapi.com/v2/beers/?beer_name=' + name 
        document.getElementById('txt').innerHTML = '';
    }
    else if(name == "" & yeast ==""){ 
        apiURL = 'https://api.punkapi.com/v2/beers'
        document.getElementById('txt').innerHTML = 'SHOW ALL';
    }
    else { 
        apiURL = 'https://api.punkapi.com/v2/beers/?beer_name=' + name + '&?yeast=' + yeast 
        document.getElementById('txt').innerHTML = '';
    }

	return fetch(apiURL).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('fail');
    }).then(function (response) {
        var result = "";
        for (var i = 0; i < response.length; i++) {
            result += "<b>Name : </b>" 
			+ response[i].name + "<br> <b>Tagline : </b>" 
			+ response[i].tagline + "<br> <b>PH : </b>" 
			+ response[i].ph + "<br> <b>Yeast : </b>" 
			+ response[i].ingredients.yeast + "<br> <b>First Brewed : </b>" 
			+ response[i].first_brewed + "<br> <b>Description : </b>" 
			+ response[i].description + "<br><br>" + "<image src =" 
            + response[i].image_url + ' width="150" height="350">'
            + '<hr color="black"/>';
        }		
        
		document.getElementById('result').innerHTML = result;
    });
};

















