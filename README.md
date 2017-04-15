# To find Object length
 
var obj = [{name: "suguna", age: 29}, {name: "Karthi", age: 1}, {name: "Raja", age: 34}];
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Object.Length = function(obj){
	var size = 0, key;
  for (key in obj){
  	if(obj.hasOwnProperty(key))  size++;
  }
  return size;
};
var size = Object.Length(obj);
alert("ArrayLength: "+ size + " First Object's length: " + Object.Length(obj[0])); // Returns ArrayLength: 3 First Object's length: 2 
