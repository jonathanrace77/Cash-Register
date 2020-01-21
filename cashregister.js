function checkCashRegister(price, cash, cid) {
  
  var change = [];
  var changeArray = [];
  var cidNum = [];
  var origCash = cash;
  var changeOwed = cash - price;

  // Change currency names to numbers
  cidNum[0] = '0.01';
  cidNum[1] = '0.05';
  cidNum[2] = '0.10';
  cidNum[3] = '0.25';
  cidNum[4] = '1.00';
  cidNum[5] = '5.00';
  cidNum[6] = '10.00';
  cidNum[7] = '20.00';
  cidNum[8] = '100.00';

function drawerTotal(){
  let i = 0;
  let drawerTotalNum = 0;
  for(i=8; i>=0; i--){   
    drawerTotalNum = drawerTotalNum + cid[i][1];
  }
  return drawerTotalNum
}
  // Here is your change, ma'am.
  //return change;

 var ThisIsTheDrawer = drawerTotal();

  if(ThisIsTheDrawer === changeOwed){
    console.log({status: "CLOSED", change: [cid][0]});
    return {status: "CLOSED", change: [cid][0]};
  } 
  else if(drawerTotal() < (cash - price)){
    console.log({status: "INSUFFICIENT_FUNDS", change: []});
  return {status: "INSUFFICIENT_FUNDS", change: []};
} 

else {
  
  let i = 0;
  let newChange = [];
  for(i=8; i>=0; i--){
    let j = 1;
    if((cash-price)>0){
      //While the cash is higher than the price

  while((cash - price) >= cidNum[i] && cid[i][1] > 0){ 
    
      cash = parseFloat((cash - cidNum[i])).toFixed(2);
      cash
      //Set the Word
      change[0] = cid[i][0];
      //Set the Number
      change[1] = cidNum[i] * j;

      newChange[0] = change.slice(0);
      newChange[1] = change.slice(1);
      cid[i][1] = cid[i][1] - cidNum[i];
      
      j++;
    //console.log(cash); 
    //console.log(cash - price); 
    //console.log(cidNum[i]); 
      }
      //If there's something to put in then do it
      if(newChange[0]){
changeArray.push(newChange[0]);
    }
    newChange[0] = 0;
    newChange[1] = 0;
    }
  
}

if(parseFloat(cash).toFixed(2) == (origCash - changeOwed).toFixed(2)){

console.log({status: "OPEN", change: changeArray});
  return {status: "OPEN", change: changeArray};
} else{
  console.log('{status: "INSUFFICIENT_FUNDS", change: []}');
  return {status: "INSUFFICIENT_FUNDS", change: []};
}


  


  
}

}



// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])