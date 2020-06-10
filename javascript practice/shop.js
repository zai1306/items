var sumUp = document.getElementById("shoes1");
       var button = document.getElementById("button");
       var cart = document.getElementById("cart");

       function grab(){

            var add = document.getElementById("add");
            add = 0;
            for(i=0; i<=5; i++){
                add += i;
            }       
            cart.appendChild(add)
       }

       console.log("\n-----------------\n  Deleting Task  \n-----------------\n")