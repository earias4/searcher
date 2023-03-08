



let URLj = "https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.json"
let URLx = "https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.xml"


let cargarXML = (myURLx)=>{
    let jsonProds = [];
    fetch( myURLx )
    .then(response => response.text() ) 
    .then(result => {

        let xml=(new DOMParser()).parseFromString(result,'application/xml');
        

        let listaProductos = xml.getElementsByTagName("product");
        

        for (let elem of listaProductos){
            let hijos = elem.children;
            let name = hijos[0].innerHTML;
            let price = hijos[1].innerHTML;
            let src = hijos[2].innerHTML;
            let type = hijos[3].innerHTML;
            
            let child = {'name':name,'price':price,'src':src,'type':type}
            
            jsonProds.push(child);
            
        }
        
        
    
    })
    .catch(error => {
      /* Callback por fallo: Procese el error */
      console.log( error );
    });

    return jsonProds;

    
}

let loadProducts = ( myURLj, jsonProd,keyword = "") => {

  fetch( myURLj )
    .then(response => response.json() ) 
    .then(result => {  
        
        let elem = document.getElementById("llenar");
        elem.innerHTML = ""
        
        let result2 = result.concat(jsonProd);
        
        
        
        let filtrados = result2.filter(item => item.type.includes(keyword) || item.name.includes(keyword));
        let tamano = filtrados.length;

        if (tamano>0){
            result2=[...filtrados];
        }
        else{
            if (keyword !=""){
                alert("No se encontraron productos con esa descripción");
            }
            
            
            
        }
        

        result2.forEach((item) => {
            let src = item.src;
            let name = item.name;
            let type = item.type;
            let price = item.price;

            plantilla = `
            <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
            <div class="card card-blog card-plain">
              <div class="card-header p-0 mt-n4 mx-3">
                <a class="d-block shadow-xl border-radius-xl">
                  <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
                </a>
              </div>
              <div class="card-body p-3">
                <p class="mb-0 text-sm">${type}</p>
                <a href="javascript:;">
                  <h5>
                    ${name}
                  </h5>
                </a>
                <p class="mb-4 text-sm">
                  <b>Price: </b> $ ${price}
                </p>
              </div>
            </div>
          </div>
          `
          elem.innerHTML+=plantilla;
        
          });
    
    })}







let element = document.getElementById('filter');

element.onclick = (event) => {
    let keyword = document.getElementById('text').value;
    loadProducts(URLj,jsonX,keyword);
};

let jsonX = cargarXML(URLx);

loadProducts(URLj,jsonX);

  