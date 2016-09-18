describe("titleCase", function(){
	var $filter, filter;

	beforeEach(function (){
		module('filters');
		inject(function ($injector){
			$filter = $injector.get('$filter');
			filter = $filter('titleCase');
		});
	});

	it("Should return undefined when undefined is passed in", function(){
		expect(filter(undefined)).toBeUndefined();
	});

	it("should return null when null is passed in", function(){
		expect(filter(null)).toBeNull();
	});

	it("Should return a blank string when a blank string is passed in", function(){
		expect(filter("")).toEqual("");
	});

	it("Should change the casing of lower cased word", function(){
		expect(filter("george harrison")).toEqual("George Harrison");
	});

	it("should change the casing of an upper case word", function(){
		expect(filter("GEORGE BUSH")).toEqual("George Bush");
	})

	it("should change the casing of random", function(){
		expect(filter("the QUIck broWN foX")).toEqual("The Quick Brown Fox");
	});
	
	it("should play nice with a normal phrase", function(){
		expect(filter("This Is A Control")).toEqual("This Is A Control");
	})
})