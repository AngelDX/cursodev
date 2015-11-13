app

.controller("categoriaController", function ($scope, Categoria) {
		$scope.list=[];

		$scope.listar = function  () {

			Categoria.list().then(function (r) {
				$scope.list=r.data;
			}, function (err) {
				console.log("Error: " + err);
			});
		};
		$scope.listar();

		$scope.get = function  (d) {

			$scope.categoria = d;
		};

		$scope.save = function  () {
			if($scope.categoria.id){
				Categoria.update({ id: "" }, $scope.categoria).then(function (r) {
					console.log("update "+r.data);
					$scope.listar();
				}, function (err) {
					console.log("Error: " + err);
				});
			}else{
				Categoria.create($scope.categoria).then(function (r) {
					console.log(r.data);
					$scope.listar();
				}, function (err) {
					console.log("Error: " + err);
				});
			}
		};

		$scope.delete = function  (d) {

			Categoria.delete({ id: d.id }).then(function (r) {
				console.log(r.data);
				$scope.listar();
			}, function (err) {
				console.log("Error: " + err);
			});
		};




		});