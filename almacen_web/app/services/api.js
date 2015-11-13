app.factory("Categoria",function function_name ($http) {
	var url="http://localhost:8000/productos/categorias/";
	return {
		"list": function () {
			return $http.get(url).then(function (r) {
				return r;
			});
		},
		"create":function (d) {
			return $http.post(url,d).then(function (r) {
				return r;
			});
		},
		"get":"list",
		"update":function (d) {
			return $http({
				method:"PUT",
				data: d,
				url:url+d.id+"/",

			}).then(function (r) {
				return r;
			});
		},
		"delete":function (d) {
			return $http.delete(url+d.id+"/").then(function (r) {
				return r;
			});
		},
	};
});