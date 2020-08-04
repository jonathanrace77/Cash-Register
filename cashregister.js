function checkCashRegister(price, cash, cid) {
  var change = [];
  var changeArray = [];
  var cidNum = [];
  var origCash = cash;
  var changeOwed = cash - price;

  // Change currency names to numbers
  cidNum[0] = "0.01";
  cidNum[1] = "0.05";
  cidNum[2] = "0.10";
  cidNum[3] = "0.25";
  cidNum[4] = "1.00";
  cidNum[5] = "5.00";
  cidNum[6] = "10.00";
  cidNum[7] = "20.00";
  cidNum[8] = "100.00";

  function drawerTotal() {
    let drawerTotalNum = 0;
    for (let i = 8; i >= 0; i--) {
      drawerTotalNum = drawerTotalNum + cid[i][1];
    }
    return drawerTotalNum;
  }

  var ThisIsTheDrawer = drawerTotal();

  if (ThisIsTheDrawer === changeOwed) {
    console.log({ status: "CLOSED", change: [cid][0] });
    return { status: "CLOSED", change: [cid][0] };
  } else if (drawerTotal() < cash - price) {
    console.log({ status: "INSUFFICIENT_FUNDS", change: [] });
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else {
    let newChange = [];
    for (let i = 8; i >= 0; i--) {
      let j = 1;
      if (cash - price > 0) {
        // While the cash is higher than the price

        while (cash - price >= cidNum[i] && cid[i][1] > 0) {
          cash = parseFloat(cash - cidNum[i]).toFixed(2);
          cash;
          // Set the Word
          change[0] = cid[i][0];
          // Set the Number
          change[1] = cidNum[i] * j;

          newChange[0] = change.slice(0);
          newChange[1] = change.slice(1);
          cid[i][1] = cid[i][1] - cidNum[i];

          j++;
        }
        // If there's something to put in then do it
        if (newChange[0]) {
          changeArray.push(newChange[0]);
        }
        newChange[0] = 0;
        newChange[1] = 0;
      }
    }

    if (parseFloat(cash).toFixed(2) == (origCash - changeOwed).toFixed(2)) {
      console.log({ status: "OPEN", change: changeArray });
      return { status: "OPEN", change: changeArray };
    } else {
      console.log('{status: "INSUFFICIENT_FUNDS", change: []}');
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  }
}
