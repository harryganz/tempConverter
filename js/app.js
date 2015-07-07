(function(){
  var app = angular.module('tempconverter',[]);
  app.controller('TempController', function(){
    this.result = 0;
    this.temp = '';
    this.fromUnits = null;
    this.toUnits = null;
    this.convert = function(){
      var kelvin = -999;
      if (this.temp != '' && this.fromUnits && this.toUnits){
        if (isNaN(this.temp)){
          alert("temperature must be a number");
          return 1;
        }
        switch(this.fromUnits){
          case 'kelvin':
            kelvin = parseFloat(this.temp);
            break;
          case 'celsius':
            kelvin = parseFloat(this.temp) + 273.15;
            break;
          case 'fahrenheit':
            kelvin = (parseFloat(this.temp) + 459.67)*5/9;
            break;
        };
        switch(this.toUnits){
          case 'kelvin':
            this.result = parseFloat(kelvin);
            break;
          case 'celsius':
            this.result = parseFloat(kelvin) - 273.15;
            break;
          case 'fahrenheit':
            this.result = parseFloat(kelvin)*9/5 - 459.67;
            break;
          };
        this.temp = '';
      } else {
        alert("please enter temperature and units");
      }
    };
  });
})();
