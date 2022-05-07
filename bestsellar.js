

var searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle("active");

}




















var bestsellar= [
    {
       img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceWash-01_2_700x.jpg?v=1651698253",
    
      name:"C-Glow Face Wash",
        des:"Detan & Brightening",
        price:"RS 230/-",
        
    },

    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoLips-01_1_700x.jpg?v=1651698346",
       name:"NicoLips Lip Brightening Scrub",
         des:"Lip Lightening Scrub For Dark, Dry, Chapped & Damaged Lips",
         price:"RS 399/-",
         
     },

     {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/EyeLift-01_1_700x.jpg?v=1651698282",
     
       name:"Eyelift Undereye Gel",
         des:"Repairs Dark Circles, Puffy Eyes & Wrinkles",
         price:"RS 285/-",
         
     },

     {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Anti-AcneFaceGel-01_0b665e08-c71f-409a-82ef-10b68c67e453_700x.jpg?v=1651699935",
     
       name:"Anti-Acne Face Gel",
         des:"Pimple Scar Removal & Skin Clarifying",
         price:"RS 375/-",
         
     },


     {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ManBox-01_700x.jpg?v=1651505874",
       name:"Luxury Perfumes Gift Set For Man",
         des:"Luxury Perfumes Gift Set For Man",
         price:"RS 630/-",
         
     },

     {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/LipBalm_-NicoLips-Lip-Scrub-Combo_700x.jpg?v=1647863372",
     
       name:"Lip Love Combo",
         des:"Nicolips & The Lip Balm",
         price:"RS 538/-",
         
     },
     {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Kumkumadi-Face-Oil-01_1_700x.jpg?v=1651698324",
     
       name:"Kumkumadi Face Oil",
         des:"Skin Brightening & Hydrating For Youthful Skin",
         price:"RS 549/-",
         
     },

     {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/GLOWNER-01_e0fa1e78-3b5f-4fbb-a10d-12f90cf9788d_700x.jpg?v=1647499518",
       name:"Glowner - Face Toner",
         des:"Refreshing, Hydrating & Skin Brightening",
         price:"RS 240/-",
         
     },
     {
         img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glowey-01_700x.jpg?v=1649143813",
         name:"Glowey - Face Pack",
         des:"Deep Cleansing, Hydrating & Skin Reviving",
         price:"RS 375/-",
     },
     {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/UnisexBox-01_360x.jpg?v=1649529395",
        name:"Unisex Perfume Gift Set",
        des:"Eau De Parfum",
        price:"RS 675/-",
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1_360x.jpg?v=1651698280",
        name:"Exfoliate Face & Body Scrub",
        des:"Dirt Removal, Nourishing & Skin Brightening",
        price:"RS 475/-"
    
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Box-2-03_360x.jpg?v=1651474038",
        name:"Everyday Skincare Essentials Mother’s Day Gift Box",
        des:"Everyday Skincare Essentials Mother’s Day Gift Box",
        price:"RS 649/-",
    },
   
    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/WomanBox-01_1a300167-8b5a-4abc-acee-af15009058f3_360x.jpg?v=1651698450",
        name:"Luxury Perfumes Gift Set For Woman",
        des:"Eau De Parfum",
        price:"RS 679/-",
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Box-1-02_360x.jpg?v=1651474036",
        name:"Natural Beauty Mother’s Day Gift Box",
        des:"Natural Beauty Mother’s Day Gift Box",
        price:"RS 879/-",
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

document.querySelector("#sort").addEventListener("change",handlePricesort);
function handlePricesort(){
 var select =document.querySelector("#sort").value;
 console.log(select)

 if(select=="low to high"){
bestsellar.sort(function(a,b){
    if(a.price>b.price){
        return 1;
    }
    if(a.price<b.price){
        return -1;
    }
    
    
}); 
console.log(bestsellar)
 }
 if(select=="high to low"){

 }

}



display(bestsellar);