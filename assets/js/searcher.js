



let URLj = "https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.json"
let URLx = "https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.xml"

let loadProducts = ( myURLj, myURLx  ) => {

  fetch( myURLj )
    .then(response => response.json() ) 
    .then(result => {

        
        let elem = document.getElementById("llenar");

        //let filtrados = result.filter(item => item.type == busqueda || item.name == busqueda )

        result.forEach((item) => {
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
    
    })
    fetch( myURLj )
    .then(response => response.json() ) 
    .then(result => {

        
        let elem = document.getElementById("llenar");

        //let filtrados = result.filter(item => item.type == busqueda || item.name == busqueda )

        result.forEach((item) => {
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
    
    })
    .catch(error => {
      /* Callback por fallo: Procese el error */
      console.log( error );
    });
  
}

loadProducts(URLj,URLj);



// let element = document.getElementById('filter');

// element.onclick = (event) => {
//     console.log("Click");
//     let busqueda = document.getElementById('text').value;
//     loadProducts(URL,busqueda);
// };

// let xml=(new DomParser()).parseFromString(result,'application/xml');

  