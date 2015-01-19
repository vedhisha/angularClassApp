'use strict';

angular.module('angularClassApp').directive('numbersOnly',function(){
	return{
		restrict:'A',//defines whether it is element or an attritube for html(A or E)then in html we can give as a tag like if it is an attribute(numbers-only/>) if it is element(<numbers-only>.........</numebers-only>)
		
		require: ['ngModel','^form'],//it is optional..for example if given ng-model in html numberonly has to work for it orelse not...
		
		link: function(scope,element,attrs,ctrl){
			ctrl[0].$parsers.push(function(inputValue){
			if(inputValue == undefined || inputValue == null)
				return '';

			var tempVar = inputValue.replace(/[^0-9.]/g,'');
			if(inputValue != tempVar){
				ctrl[0].$setViewValue(tempVar);
				ctrl[0].$render();
			}
			return tempVar;
			});
		}//links the directive name to the element
	};
});