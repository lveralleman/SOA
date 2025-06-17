app.service('myserv', function() {
          this.getServiceList = function () {
    return [{"serviceName":"Package_Bidon_For_Testing_Purpose.pub:test","description":"sdfsdfsdfd","serviceinputs":[{"inputName":"toto","inputType":"String","inputComments":"no comment","required":true,"wrapperType":"--"},{"inputName":"tata","inputType":"String","inputComments":"no comment","required":true,"wrapperType":"--"},{"inputName":"titi","inputType":"Document","inputComments":"no comment","required":true,"wrapperType":"--"}],"serviceoutputs":[{"outputName":"bidule","outputType":"Document","outputComments":"no comment","required":true,"wrapperType":"--"}]},{"serviceName":"Package_Bidon_For_Testing_Purpose.pub:test_bleurg","description":"sfsdfdsfs","serviceinputs":[{"inputName":"toto","inputType":"String","inputComments":"no comment","required":true,"wrapperType":"--"},{"inputName":"tata","inputType":"String","inputComments":"no comment","required":true,"wrapperType":"--"},{"inputName":"titi","inputType":"Document","inputComments":"no comment","required":true,"wrapperType":"--"}],"serviceoutputs":[{"outputName":"bidule","outputType":"Document","outputComments":"no comment","required":true,"wrapperType":"--"}]}];
}
this.getISEndpoint = function() { 
 return 'http://um.webmethods.dev.cyvbgroup.com:5555/';
}
this.getAPIList = function() { 
 return [];
}
this.getCreatedTime = function() { 
 return "11-10-2024 12:50:37 CEST";
}
this.getPackageInfo = function(){
 return{"packageName":"Package_Bidon_For_Testing_Purpose","displayName":"","status":"Development","tags":[""],"version":"1.0","buildNumber":"","description":""};
}
});
