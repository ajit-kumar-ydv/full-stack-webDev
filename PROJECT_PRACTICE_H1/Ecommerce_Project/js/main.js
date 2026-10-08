

let API = "https://dummyjson.com/products?limit=0"
let CATEGORY_API="https://dummyjson.com/products/categories"

const productContainer=document.querySelector("#products-container")
const categoryFilters = document.querySelector("#category-filters")

let allCategory = [];

async function products(url){
  const response = await fetch(url);
  const data = await response.json();
  const products = data.products;
  productsRender(products)

}
products(API)

function formatCategory(category) {
  return category.replace("-", " ");
}
categories()
function productsRender(products) {
  productContainer.innerHTML = "";
  products.forEach(product => {
    let card = document.createElement("div");
    card.innerHTML=`                                                                                                        
           <article class="bg-white border border-slate-200 rounded-lg p-4 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition">
             <div class="h-48 w-full flex items-center justify-center p-3 mb-4 bg-white">                                                            
               <img src=${product.images[0]} class="max-h-full max-w-full object-contain" loading="lazy">                                    
             </div>                                                                                                                                  
             <div class="flex-grow flex flex-col">                                                                                                   
               <span class="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1">                                                      
                 ${formatCategory(product.category)}                                                                                                                             
               </span>                                                                                                                               
               <h2 class="font-semibold text-slate-900 text-sm mb-2 line-clamp-2" title="Essence Mascara Lash Princess">                             
                 ${product.title}                                                                                                      
               </h2>                                                                                                                                 
               <div class="mt-auto pt-2">                                                                                                            
                 <span class="text-lg font-bold text-slate-900">                                                                                     
                  $ ${product.price}                                                                                                                           
                 </span>                                                                                                                             
               </div>                                                                                                                                
               <a href="product-details.html" class="mt-4 block w-full text-center bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium py-2 px-4 rounded transition">    
                 View Details                                                                                                                        
               </a>                                                                                                                                  
             </div>                                                                                                                                  
           </article >
           `
    productContainer.append(card)
  });

}     
 
async function categories() {
  const response = await fetch(CATEGORY_API);
  const data = await response.json()
  //console.log(data)
  allCategory=[{slug: 'all', name: 'All', url: API},...data]
  renderCategories()
  
}


              
function renderCategories(currCat="all") {
  categoryFilters.innerHTML=""
   allCategory.forEach(category => {
    const categoryBox = document.createElement("div")
    categoryBox.innerHTML =`
    <button type="button"
     data-slug=${category.slug}
     data-url=${category.url}
     class="px-4 py-1.5 rounded-md text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-100 transition">
     ${category.name}                                                                                                                          
     </button> `  
     if (currCat == category.slug) {
       categoryBox.className="px-1 py-1 rounded-md text-sm font-medium bg-pink-400  border border-slate-300 hover:bg-slate-100 transition"
     }     
    categoryFilters.append(categoryBox)
                           
   }) 
  
}

// event handler on categoryFilters

categoryFilters.addEventListener("click", (e) => {
  e.stopPropagation()
  if (e.target?.type) { //button
    const slug = e.target.dataset.slug;
    const url = e.target.dataset.url
    renderCategories(slug)
    products(url)
  }
})
          
