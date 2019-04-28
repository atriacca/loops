var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", 
"stapler", "computer",  "computer"];
var computerQty = 0;
for (var i = 0; i < officeItems.length; i++) {
   if (officeItems[i] === "computer") {
    computerQty++ ;
   }
}
console.log(computerQty);

var movieGoers = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
 
  for (var i = 0; i < movieGoers.length; i++) {
    if (movieGoers[i].age >= 18) {
        console.log(movieGoers[i].name + ' is old enough');
    } else {
        console.log(movieGoers[i].name + ' is NOT old enough');
    }
 }
 /*
 ternary method(from Reg): console.log(movieGoers[t].age <= 18 ? movieGoers[t].name + " is not old enough to go to the movies." : movieGoers[t].name + " is old enough to go to the movies.");
*/