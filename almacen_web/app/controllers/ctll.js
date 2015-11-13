app.controller("ctll",function($scope){

		//$scope.nombre="Miguel";
		$scope.saludo=function(){
			console.log("Hola "+$scope.nombre);
		}
		$scope.list=[
					    {
					        "id": 2,
					        "codigo": "02",
					        "nombre": "Laptop",
					        "activo": true,
					        "fecha": "2015-11-08T15:31:08Z"
					    },
					    {
					        "id": 3,
					        "codigo": "03",
					        "nombre": "Electrodomesticos",
					        "activo": false,
					        "fecha": null
					    },
					    {
					        "id": 4,
					        "codigo": "04",
					        "nombre": "Monitores",
					        "activo": false,
					        "fecha": null
					    }
					]
	});