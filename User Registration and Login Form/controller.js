angular.module("fromApp", [])
	.controller("formController",function(){
		var form = this;
		form.login = false;
		form.register = false;
		form.chec = false;
		form.successful = false;
		form.data = [];
		form.save = function(){
			form.data.push({firstName:form.registerUser.firstName ,surName:form.registerUser.SurName, email:form.registerUser.email, mobile:form.registerUser.mobile, password:form.registerUser.password});
			form.successful = true;
		};
		form.check = function(){
			angular.forEach(form.data, function(User){
				if(User.email == form.loginUser.userName){
					if(User.password == form.loginUser.password){
						form.successful = true;
						return ;
					}
				}	
					
			});
			if(!form.successful){
				form.loginUser=''
				form.chec = true;
			}
		}
	});