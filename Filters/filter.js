angular.module('filterApp', [])
	.controller('filterController',['$http', function($http){
		var filter = this;
		filter.searchData = [
			{key:"properties.id", value:"id"},
			{key:"properties.name", value:"Name"},
			{key:"properties.price", value:"Price"}
		];
		filter.sort = filter.searchData[0];
		filter.priceCheck = function(obj){
			console.log("fdf "+filter.minPrice +"  "+filter.maxPrice);
			if(filter.minPrice!=undefined && filter.maxPrice!=undefined && filter.maxPrice!="")
			 return obj.properties.price >= filter.minPrice && obj.properties.price <= filter.maxPrice;
			else if(filter.minPrice!=undefined)
			 return obj.properties.price >= filter.minPrice;
			else if(filter.maxPrice!=undefined)
			 return obj.properties.price <= filter.maxPrice;
			else
				return true;
		}
		filter.data = [
			{
				"name":"Apple",
				"properties":
				{
					"id":12,
					"name":"Apple",
					"price":60,
					"tags":[
						"Red",
						"Sweet",
						"Fruit",
						"Apple"
					]
				}
			},
			{
				"name":"Potato",
				"properties":
				{
					"id":14,
					"name":"Potato",
					"price":20,
					"tags":[
						"Yellow",
						"Vegetable",
						"Potato"
					]
				}
			},
			{
				"name":"Banana",
				"properties":
				{
					"id":13,
					"name":"Banana",
					"price":30,
					"tags":[
						"Yellow",
						"Sweet",
						"Fruit",
						"Banana"
					]
				}
			},
			{
				"name":"Orange",
				"properties":
				{
					"id":15,
					"name":"Orange",
					"price":50,
					"tags":[
						"Orange",
						"fruit"
					]
				}
			},
			{
				"name":"Ladiesfinger",
				"properties":
				{
					"id":16,
					"name":"Ladiesfinger",
					"price":16,
					"tags":[
						"Green",
						"Vegetable",
						"Ladiesfinger"
					]
				}
			}
		];
		
		/*$http.get('data.json').success(function(data){
			filter.data = data[0];
		});*/
	}]);