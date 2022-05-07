


var searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle("active");

}








var bestsellar = [
   


    

    {
       img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Fresh-01_360x.jpg?v=1651698290",
      name:"FRESH UNISEX",
        des:"Eau De Parfum",
     
        
        
        price:"RS 240/-",
        
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/WhiteOUD-01_1_360x.jpg?v=1651698440",
        name:"WHITE OUD UNISEX",
        des:"Eau De Parfum",
        price:"RS 775/-",
    },
    {
       img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/WhiteOUD-01_360x.jpg?v=1651698440",
       name:"WHITE OUD UNISEX",
       des:"Eau De Parfum",
       price:"RS 375/-",
   },
   {
       img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/OUD-01_1_360x.jpg?v=1651698362",
       name:"OUD UNISEX",
       des:"Eau De Parfum",
       price:"RS 775/-"
   
   },
   {
       img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/OUD-01_360x.jpg?v=1651698361",
       name:"OUD UNISEX",
       des:"Eau De Parfum",
       price:"RS 349/-",
   },
  
   {
       img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/GlamWomen-01_1_360x.jpg?v=1651698294",
       name:"GLAM WOMAN ",
       des:"Eau De Parfum",
       price:"RS 879/-",
   },
   {
       img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Rose-04_c7986f45-83dc-4711-ae68-b7d2e1b6f29b_360x.jpg?v=1651814116",
       name:"ROSE WOMAN ",
       des:"Eau De Parfum",
       price:"RS 550/-",
   },

   {
       img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/GlamWomen-01_0e4e2570-e0e5-4905-989a-3f7ac0aed641_360x.jpg?v=1651698295",
       name:"GLAM WOMAN ",
       des:"Eau De Parfum",
       price:"RS 299/-",
   },
   {
       img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/CEOWOMAN-01_360x.jpg?v=1651698241",
       name:"CEO WOMAN",
       des:"Eau De Parfum",
       price:"RS 275/-",
   },

   {
       img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/CEOWOMAN-01_1_360x.jpg?v=1651698240",
       name:"CEO WOMAN",
       des:"Eau De Parfum",
       price:"RS 549/-",
   },

   {
       img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/UnisexBox-01_360x.jpg?v=1649529395",
       name:"Unisex Perfume Gift Set",
       des:"Eau De Parfum",
       price:"RS 549/-",
   },

   {
       img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Fresh-01_971d0d79-99b4-48ff-bb7e-bf58fa6a2de0_360x.jpg?v=1651696593",
       name:"FRESH UNISEX",
       des:"Eau De Parfum",
       price:"RS 439/-",
   },
   {
       img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/CEO-MAN-01_360x.jpg?v=1651698241",
       name:"CEO MAN",
       des:"Eau De Parfum",
       price:"RS 349/-",
   },

   {
       img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/CEO-MAN-01_1_360x.jpg?v=1651698239",
       name:"CEO MAN",
       des:"Eau De Parfum",
       price:"RS 375/-",
   },

   {
       img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ManBox-01_360x.jpg?v=1651505874",
       name:"Luxury Perfumes Gift Set For Man",
      
     
       des:"Eau De Parfum",
       price:"RS 1299/-",
   },


   {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/WomanBox-01_1a300167-8b5a-4abc-acee-af15009058f3_360x.jpg?v=1651698450",
    name:"Luxury Perfumes Gift Set For WOMAN",
   
  
    des:"Eau De Parfum",
    price:"RS 1299/-",
},





];








localStorage.setItem("best",JSON.stringify(bestsellar));

var cart=JSON.parse(localStorage.getItem("best"))||[];


var product=document.querySelector(".bestsellar");
function display(data){
   product.innerHTML=null;

   data.forEach(function(elem){
var pro=document.createElement("div");
var img=document.createElement("img");
img.src=elem.img;
var name=document.createElement("h2");
name.innerText=elem.name;

var des=document.createElement("p");
des.innerText=elem.des;

var price=document.createElement("h2");
price.innerText=elem.price;
var btn=document.createElement("button");
btn.innerText="ADD TO CART";
btn.addEventListener("click",function(){
    AddTocart(elem);
})


pro.append(img,name,des,price,btn);

product.append(pro);

   });



}
display(bestsellar);
function AddTocart(elem){
    cart.push(elem);
    localStorage.setItem("best",JSON.stringify(cart));
    
    alert("Add to product")
    }