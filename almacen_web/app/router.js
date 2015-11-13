app.config(function ($routeProvider){
	$routeProvider.when("/saludo",{
		"templateUrl": "app/views/saludo.html"
	});
	$routeProvider.when("/categoria",{
		"templateUrl": "app/views/categoria.html"
	})

});