describe("DessertManager", function(){
	var values, factory;

	beforeEach(function(){
		module('dessert');

		inject(function($injector){
			values = $injector.get('DessertValues');
			factory = $injector.get('DessertManager');
		});
	});

	describe("DessertValues", function(){
		it("should instantiate with 3 pie flavors", function(){
			expect(values.pies).toEqual([
					{flavor: "Cherry", score: 6},
					{flavor: "Apple", score: 7.5},
					{flavor: "Peach", score: 4},
			]);	
		});
	});

	describe("DessertManager", function(){
		describe("pieFlavors", function(){
			it("Should return the 3 pie flavors string", function(){
				var flavors = factory.pieFlavors();
				expect(flavors.length).toEqual(3);
				expect(flavors[0]).toEqual("Cherry");
				expect(flavors[1]).toEqual("Apple");
				expect(flavors[2]).toEqual("Peach");

			});

			it("should throw an error if there are no pies",function(){
				values.pies = null;

				expect(function(){
					factory.pieFlavors();
				}).toThrow();

				values.pies = [
					{flavor: "Cherry", score: 6},
					{flavor: "Apple", score: 7.5},
					{flavor: "Peach", score: 4},
			]
			});
		});
	});
});