
// add event handler to deposit button
document.getElementById("depo-btn").addEventListener("click",function(){
    //  get deposit input box from html using id
    const depoAmount=document.getElementById("depo-text");
    //  get deposit input value
    const depoAmountvaluestring=depoAmount.value;
    // get deposit input value from string to integer
    const depoAmountvalue=parseFloat(depoAmountvaluestring);
       // checking wheather deposit input value is number or string
       if(isNaN(depoAmountvalue)){
        alert("Please provide a valid number");
        return;
    }
    //1...... deposit updated-------
    // a.get deposit box from html using id
    const previousdepo=document.getElementById("depo");
    //b. get deposit value
    const previousdepoValuestring=previousdepo.innerText;
    //c. get deposit value from string to integer
    const previousdepoValue=parseFloat(previousdepoValuestring);
    //c. total deposit amount updated
    const totaldeposit=depoAmountvalue+previousdepoValue;
    // e.update total deposit amount to deposit box
    previousdepo.innerText=totaldeposit;

    // 2...balance updated
     // a.get balance box from html using id
     const previousbalance= document.getElementById("balance");
     //b. get deposit value using innertext
     const previousbalanceValuestring=previousbalance.innerText;
    //c. get deposit value from string to integer
     const previousbalanceValue=parseFloat(previousbalanceValuestring);
    //d. total balance amount updated
     const totalbalance=previousbalanceValue+depoAmountvalue;
    // e.update total balance amount to deposit box
     previousbalance.innerText=totalbalance;

    // clear deposit input box after submiting input
     depoAmount.value="";
   
})

// add event listner to withdraw button
document.getElementById("withdraw-btn").addEventListener("click", function(){
    // a.get withdraw input box from html using id
    const withdraw= document.getElementById("withdraw-text");
     //b. get withdraw input box value using value
    const withdrawvaluestring=withdraw.value;
    //c. get  withdraw input box value from string to integer
    const withdrawvalue=parseFloat(withdrawvaluestring);
    // checking wheather withdraw input is number or string
    if(isNaN(withdrawvalue)){
        alert("Please provide a valid number");
        return;
    }

     
 
    // 2...balance updated
     // a.get balance box from html using id
     const previousbalance= document.getElementById("balance");
     //b. get deposit value using innertext
     const previousbalanceValuestring=previousbalance.innerText;
    //c. get deposit value from string to integer
     const previousbalanceValue=parseFloat(previousbalanceValuestring);

       // clear withdraw input box after submiting input
       withdraw.value="";

        //  checking if withdraw value is grater than blanace value then it will stop
        if(withdrawvalue>previousbalanceValue){
            alert("please enter valid amount");
            return;
        }
        
    //d. total balance amount updated
     const totalbalance=previousbalanceValue-withdrawvalue
    // e.update total balance amount to deposit box
     previousbalance.innerText=totalbalance;

    // 1.....withdraw box updated----
     // a.get withdraw box from html using id
     const withdrawbox=document.getElementById("withdraw");
     //b. get withdraw box value using innertext
   const withdrawboxValuestring=withdrawbox.innerText;
    //c. get  withdraw input box value from string to integer
   const withdrawboxValue=parseFloat(withdrawboxValuestring);
     //d.update total withdraw amount
   const totalwithdrawboxValue=withdrawboxValue+withdrawvalue;
       // e.update total withdraw amount to withdraw box
   withdrawbox.innerText=totalwithdrawboxValue;

})

