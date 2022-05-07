
var searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle("active");

}






























var bestsellar = [
   


    

    {
       img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/EYEWINKKAJAL-01_fe8358fb-02ca-4179-9434-d83b041cc95f_360x.jpg?v=1646289482",
      name:"Eyewink Kajal",
        des:"Long Lasting & Smudge Resistant",
     
        
        
        price:"RS 240/-",
        
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Pomegrante-01_d9d5f704-3016-43ef-9922-e653ecef78e1_360x.jpg?v=1651696009",
        name:"Pomegranate Maroon",
        des:"3 In 1 Lip Cheek & Eye Tint",
        price:"RS 275/-",
    },
    {
       img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Peach-01_1_db911486-b81f-4538-b4b2-f73dac8ddd47_360x.jpg?v=1651698419",
       name:"Pomegranate Pichhy",
       des:"3 In 1 Lip Cheek & Eye Tint",
       price:"RS 275/-",
   },
   {
       img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Strawberry-01_b11313b0-3145-4596-acb3-ce3440cb8929_360x.jpg?v=1651696073",
       name:"Pomegranate pink blush",
       des:"3 In 1 Lip Cheek & Eye Tint",
       price:"RS 275/-"
   
   },
   {
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Raspberry-01_ae61d162-baf4-454e-acff-03cbd874f8ec_360x.jpg?v=1651696029",
    name:"Pomegranate Red blush",
    des:"3 In 1 Lip Cheek & Eye Tint",
    price:"RS 275/-",
},
{
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/RedGrape-01_1_360x.jpg?v=1651698420",
    name:"Pomegranate Grapes wine blush",
    des:"3 In 1 Lip Cheek & Eye Tint",
    price:"RS 275/-",
},
{
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Choco-01_14075eb8-a705-4582-9a3c-2948714b536e_360x.jpg?v=1651695921",
    name:"Pomegranate Coffie blush",
    des:"3 In 1 Lip Cheek & Eye Tint",
    price:"RS 275/-",
},
{
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Coffee-01_1_360x.jpg?v=1651698417",
    name:"Pomegranate  Chocko browen blush",
    des:"3 In 1 Lip Cheek & Eye Tint",
    price:"RS 275/-",
},
{
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Herbal-Sindoor-Red-01_360x.jpg?v=1651698315",
    name:"Herbal Sindoor",
    des:"Long Lasting & Smudge Proof",
    price:"RS 125/-",
},
{
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/CelebshineNude-01_700x.jpg?v=1651698235",
    name:"Celeb Shine Body Lotion - Nude",
    des:"Illuminate, Moisturise, Nourish",
    price:"RS 399/-",
},
{
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/CelebshineGold-01_360x.jpg?v=1631698378",
    name:"Celeb Shine Body Lotion - Gold",
    des:"Illuminate, Moisturise, Nourish",
    price:"RS 375/-",
},
{
    img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Rose-01_de775454-c884-4207-a779-bf285c99258b_360x.jpg?v=1651696054",
    name:"Pomegranate Rose pink blush",
    des:"3 In 1 Lip Cheek & Eye Tint",
    price:"RS 275/-",
},
// {
//     img:"",
//     name:"",
//     des:"",
//     price:"RS 375/-",
// },



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
