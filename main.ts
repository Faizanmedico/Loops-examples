//   for (starting value, condition, step increment)   FOR LOOP

    for (let i = 0; i < 3; i++) {
        console.log ("Block statement execution no." +i);
      }
      

      //for(setup; condition; counter_increment) 
       // {
          // execution code
       // }
        

       var i : number = 1;

for(var i : number = 1; i <= 5; i++)  
 {
   console.log("Iteration no till now: " + i);
   i++;
 }



 var arr = [10, 20, 30, 40];

for (var val of arr) {
  console.log(val); // prints values: 10, 20, 30, 40
}




var str = "Hello World";

for (var char of str) {
  console.log(char); // prints chars: H e l l o  W o r l d
}





var ar = [10, 20, 30, 40];

for (var index in ar) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(ar[index]); // prints elements: 10, 20, 30, 

}


for(let i = 0 ; i <= 5 ; i++) {
    console.log("Iteration number: "+ String(i+1));
  }


//   uuuuu



var person = { name: "Bob", age: 20, profession: "Lawyer" , gender: "male" };

for (var key in person) { 
    console.log(key +" : "+ person[key])
}



var xyz: string[] = [ "dog" , "cat" , "goat" , "sheep" ] 

for( var idx in xyz ) {
   console.log( xyz[idx] )  
}




var x : number = 0;

while (x < 10) {
  console.log(x);
  x++;
}






//      for(Initialization; Condition; Updation)
    

    for(let i = 45; i < 50; i++) 
        {
            // This statement is repeated
            console.log(i);
        }
    






        var colors: string[]= ['red', 'black', 'blue', 'white', 'pink']
     
for(let i of colors) 
 {
    // Print each element of the array
    console.log(i);
 }





 var country = ['Pakistan','India', 'Bangladesh', 'USA', 'UK', 'UAE', 'Russia']
     
    for(let i in country) 
    {
        // Print each element of the array
        console.log(i, country[i]);
    }





        






