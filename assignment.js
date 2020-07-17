1.

function feetToMile(feet){
    convertToMile = feet /5280;
    convertToMile = convertToMile.toFixed(6);
    return convertToMile ;
}
// checked with example.
 Mile = feetToMile(5280);
console.log(Mile);


2.

function woodCalculator(chair,table,bed){
    let chairWoodFeet = chair * 1;
    
    let tableWoodFeet = table * 3;

    let bedWoodFeet = bed * 5;

    let sumOfWood = chairWoodFeet + tableWoodFeet + bedWoodFeet;

    return sumOfWood;
}

// checked with example.

    let totalWood = woodCalculator(5,5,5);
    console.log ("You need" ,totalWood ,"cubic wood for your furniture");


3.

function brickclculator(floor){
    let perFitBrick =1000;
       if(floor <=0 ){
           console.log("a floor can't 0 or less then it")
           
       }
       else if (floor <=10){
           brickIsNeeded = floor * 15 *perFitBrick;
           console.log("You need full of",brickIsNeeded ,"bricks");
       }
       else if(floor<=20){
           brickIsNeeded = (10*15*perFitBrick) + ((floor-10) *12 * perFitBrick);
           console.log("You need full of",brickIsNeeded ,"bricks");
       }
       else{
           brickIsNeeded = (10*15*perFitBrick) + (10*12*perFitBrick) + ((floor-20)*10*perFitBrick);
           console.log("You need full of",brickIsNeeded ,"bricks");
       }
   }
   // checked with example.
   let floorIs = brickclculator(25);

   4.

   function tinyFriend(friendList){
    var mrTiny = friendList[0];
    for(var i = 0; i < friendList.length;i++){
        var currentPosition = friendList[i];
        if (currentPosition.length < mrTiny.length){
            mrTiny = currentPosition;
        }
      
    }
    return mrTiny;
}
// checked.
friendName =tinyFriend(["hasib","heemal", "rafi", "fatin","jeion"]);
console.log(friendName);

// last er ta obossho onekta jhanker vaiyer vedio dekhe korsi..but 1st 3 ta nijey nijey korsi..esy chilo.