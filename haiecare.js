var searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle("active");

}


var bestsellar = [

   




    

     {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/GrowthProteinHairShampoo-01_360x.jpg?v=1651700606",
       name:"Growth Protein Shampoo",
         des:"Balances The Scalp, Soothes, Anti-Dandruff",
      
         
         
         price:"RS 240/-",
         
     },
     {
         img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NeemCombDualTeeth-01_360x.jpg?v=1633437311",
         name:"Neem Wooden Dual Tooth Comb",
         des:"Nourished The Scalp, Boosts Growth, Anti-Dandruff",
         price:"RS 175/-",
     },
     {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hair-For-You-Combo-01_360x.jpg?v=1651698311",
        name:"Hair For You Combo",
        des:"Growth Protein Shampoo, Growth Protein Conditioner",
        price:"RS 475/-",
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Hair-Us-Out-Combo-01_360x.jpg?v=1651698312",
        name:"Hair Us Out Combo",
        des:"Hair Us Out Combo",
        price:"RS 475/-"
    
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth--Protein-Hair-Mask-01_360x.jpg?v=1651698302",
        name:"Growth Protein Hair Mask",
        des:"Anti-Frizz, Hairfall Control & Anti-Dandruff",
        price:"RS 349/-",
    },
   
    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth--Protein-Hair-Mask-01.jpg?v=1651698302",
        name:"Growth Protein Hair Mask",
        des:"Anti-Frizz, Hairfall Control & Anti-Dandruff",
        price:"RS 579/-",
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ReverseShampoo_Conditinor-01_1_360x.jpg?v=1651698374",
        name:"Reverse Hairwash Pack",
        des:"Anti Frizz, Anti Hairfall & Nourishing",
        price:"RS 550/-",
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth--Protein-Hair-Mask-01_360x.jpg?v=1651698302",
        name:"Growth Protein Hair Mask",
        des:"Anti-Frizz, Hairfall Control & Anti-Dandruff",
        price:"RS 599/-",
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth-Protein-Hair-Oil-01_360x.jpg?v=1651698303",
        name:"Growth Protein Hair Oil",
        des:"Anti Frizz, Hairfall Control & Anti Dandruff",
        price:"RS 275/-",
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HairPerfume-01_360x.jpg?v=1626681100",
        name:"Hair Perfume Mist Spray For All Hair Types  50 ML",
        des:"Hair Perfume Mist Spray 50 ML",
        price:"RS 249/-",
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ReverseShampoo_Conditinor-01_1_360x.jpg?v=1651698374",
        name:"Reverse Hairwash Pack",
        des:"Anti Frizz, Anti Hairfall & Nourishing",
        price:"RS 549/-",
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NeemCombWideTeeth-01_360x.jpg?v=1633438457",
        name:"Neem Wooden Wide Tooth Comb",
        des:"Nourished The Scalp, Boosts Growth, Anti-Dandruff",
        price:"RS 139/-",
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth--Protein-Hair-Conditioner-01_ef846ab9-d1dc-4c51-ab39-41a3031812dd_360x.jpg?v=1651698301",
        name:"Growth Protein Hair Conditioner",
        des:"Anti Frizz, Nourishing & Hair Strengthening",
        price:"RS 349/-",
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth--Protein-Hair-Mask-01_360x.jpg?v=1651698302",
        name:"Growth Protein Hair Mask",
        des:"Anti-Frizz, Hairfall Control & Anti-Dandruff",
        price:"RS 375/-",
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/GrowthProteinHairShampoo-01_360x.jpg?v=1651700606",
        name:"Growth Protein Shampoo",
       
      
        des:"Balances The Scalp, Soothes, Anti-Dandruff",
        price:"RS 299/-",
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