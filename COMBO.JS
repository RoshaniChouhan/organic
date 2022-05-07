
var searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle("active");

}










var bestsellar = [
   


 {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-Glow-Face-Wash_-Exfoliate-Scrub-Combo_360x.jpg?v=1647864479",
    name:"Brighter Days Combo",
     des:"C-Glow Face Wash & Exfoliate Face & Body Scrub",
     price:"RS 375/-",
 },

 {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/LipBalm_-NicoLips-Lip-Scrub-Combo_700x.jpg?v=1647863372",
    name:"Lip Love Combo",
     des:"Nicolips & The Lip Balm",
     price:"RS 575/-",
 },

 {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hair-For-You-Combo-01_360x.jpg?v=1651698311",
    name:"Hair For You Combo",
     des:"Growth Protein Shampoo, Growth Protein Conditioner",
     price:"RS 675/-",
 },

 {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Anti-Acne-Face-wash_-Anti-Acne-Face-Gel-Cream-Combo_360x.jpg?v=1647864525",
    name:"Acne Be Gone Combo",
     des:"Anti-Acne Face Wash & Anti-Acne Face Gel Cream",
     price:"RS 575/-",
 },

 {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Love-Is-In-The-Roll-On-Combo-01_360x.jpg?v=1651698338",
    name:"Love Is In The Roll-On Combo",
     des:"Roll On Deo - Men & Women",
     price:"RS 375/-",
 },

 {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/DeoWhiteRollonDeodorantMenPackof2Combo_1_360x.jpg?v=1651698356",
    name:"Love Is In The Roll-On Combo",
     des:"Roll On Deo - Men ",
     price:"RS 375/-",
 },

 {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Deo-White-WomenPackof2_360x.jpg?v=1651698292",
    name:"Love Is In The Roll-On Comb",
     des:"Roll On Deo -Women ",
     price:"RS 375/-",
 },

 {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Not-Just-Lip-Service-Combo-01_360x.jpg?v=1651698355",
    name:"Not Just Lip Service Combo",
     des:"The Lip Balm (Pack Of 2)",
     price:"RS 355/-",
 },

 {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Wake-Up-_-Glow-Combo-01_360x.jpg?v=1651698446",
    name:"Wake Up & Glow Combo",
     des:"Glowner Toner, C Glow Face Wash",
     price:"RS 465/-",
 },

 {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hair-Us-Out-Combo-01_360x.jpg?v=1651698312",
    name:"Hair Us Out Combo",
     des:"Growth Protein Shampoo, Growth Protein Conditioner, Growth Protein Hair Oil",
     price:"RS 875/-",
 },

 {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/SupremeWomenCombo-EyeLift_CGlowFacewash_Exfoliate_DeoWhite-Woen_Nicolips_360x.jpg?v=1649311611",
    name:"Supreme Women Combo",
     des:"Eye Lift, C-Glow Face Wash , Exfoliate Scrub, Deo White - Women, Nicolips",
     price:"RS 1075/-",
 },

 {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Two_s-A-Lippy-Party-Combo-01_360x.jpg?v=1651698436",
    name:"Two's A Lippy Party Combo",
     des:"Nicolips (Pack Of 2)",
     price:"RS 699/-",
 },

 {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/61bR3rrlDhL._SX425_360x.jpg?v=1649247617",
    name:"Mini Face Pack Brush For Women & Men - Pack Of 2",
     des:"Mini Face Pack Brush For Women & Men - Pack Of 2",
     price:"RS 375/-",
 },

 {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Ready_Set_Glow_Combo-01_360x.jpg?v=1651698376",
    name:"Ready, Set, Glow! Combo",
     des:"C-Glow Face Pack & C-Glow Face Gel",
     price:"RS 675/-",
 },

 {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/TheMatteRouteCombo-01_360x.jpg?v=1651698407",
    name:"The Matte Route Combo",
     des:"C-Glow Face Wash & C-Glow Face Cream",
     price:"RS 575/-",
 },

 {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Supreme-Men-Combo-01_360x.jpg?v=1651698398",
    name:"Supreme Men Combo",
     des:"Eye Lift, C Glow Face Wash , Exfoliate , Deo White - Men & Nicolips",
     price:"RS 999/-",
 },


];








localStorage.setItem("best",JSON.stringify(bestsellar));



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

pro.append(img,name,des,price,btn);

product.append(pro);

   });



}
display(bestsellar);
