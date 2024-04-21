


function payment(){
    let Name = document.getElementById("Name").value;
    let Phone = document.getElementById("Phone").value;
    let Email = document.getElementById("Email").value;
    let Place = document.getElementById("Place").value;
    let Starters = document.getElementById("Starters").value;
    let Biryani = document.getElementById("Biryani").value;
    let Chicken = document.getElementById("Chicken").value;
    let Dessarts = document.getElementById("Dessarts").value;
    let Drinks = document.getElementById("Drinks").value;
    let GST = document.getElementById("GST").value;

   
 let array = [parseInt(Starters), parseInt(Biryani), parseInt(Chicken), parseInt(Dessarts), parseInt(Drinks), parseInt(GST)];
 let sum = 0;
  for (let i = 0; i < array.length-1; i++){
  sum = sum + array[i];
  }


  GST = (sum * GST)/100;
  let Total = GST + sum;
  const Tip = 1000;
  let tiptotl=Tip+Total;
    let result = "Name : " + Name +"<br>" + "Phone : " + Phone + "<br>"+ "Email : " + Email + "<br>" + "Place : " + Place + "<br>" +
  "TotalSum : " + sum + "<br>" + "TotalSum with Gst :" + Total + "<br>" + "Total amout with tip : "+tiptotl;

   document.getElementById("PaymentDetails").innerHTML = result;

}

function navList (){
   let nav = document.querySelector(".Navbar");
   let menu = document.querySelector(".Menu");
   let burger = document.querySelector(".Burger");
   
   burger.addEventListener ('click', () => {
   menu.classList.toggle ("nav-active");

   burger.classList.toggle ("toggle");
   });
}

navList();

