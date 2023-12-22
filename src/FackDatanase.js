function addToCard(id){
   
  let shoppingCard = getShoppingCard ()


    let quantity = shoppingCard [id]



    // localStorage.setItem(id, 1)
    if(quantity){

        // if quantity exist then update the
        const newQuamtity = parseInt(quantity) + 1;
        // localStorage.setItem(id, newQuamtity)
        shoppingCard[id]= newQuamtity;

    }else{
        console.log("new data");
        // localStorage.setItem(id, 1)
        shoppingCard[id] = 1;

    }
    localStorage.setItem("shopping-cart",JSON.stringify (shoppingCard));
}


function removeitem(id){
    

    const storedCard =  localStorage.getItem("shopping-cart");
    if(storedCard){
        let shoppingCard = JSON.parse(storedCard);
        delete shoppingCard[id]
        // for(id in shoppingCard){
        //     delete shoppingCard[id]
        // }
        localStorage.setItem("shopping-cart",JSON.stringify(shoppingCard))
    }

 }
 const getShoppingCard  = ()=> {
  let shoppingCard ;
  // get data from localStorage

const storedCard =  localStorage.getItem("shopping-cart")

//   check if data exist
if(storedCard ){
  shoppingCard=JSON.parse (storedCard);
}else{
  shoppingCard = {};
}
return shoppingCard;
 }
export {addToCard , removeitem , getShoppingCard};