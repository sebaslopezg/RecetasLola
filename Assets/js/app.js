document.addEventListener('DOMContentLoaded', function() {
    let openModal = document.getElementById('openModal')

    let elems = document.querySelectorAll('.modal')
    let instances = M.Modal.init(elems);

    const guardarReceta = document.getElementById('guardarReceta')
    let recetaTitulo = document.getElementById('recetaTitulo') 
    let textoDescipcion = document.getElementById('textoDescipcion') 
    let uriImage = document.getElementById('uriImage') 
    let costoPreparacion = document.getElementById('costoPreparacion') 
    let PrecioSugerido = document.getElementById('PrecioSugerido') 
    const dataZone = document.getElementById('dataZone')

    guardarReceta.addEventListener('click', () => {
        const formularioRecetas = document.getElementById('formularioRecetas')
        let textoJSON = "";

        textoJSON = `
        {
          "titulo":"${recetaTitulo.value}",
          "descripcion":"${textoDescipcion.value}",
          "uriImg":"${uriImage.value}",
          "costoPreparacion":${costoPreparacion.value},
          "precioSugerido":${PrecioSugerido.value}
        }
        `

        localStorage.setItem(localStorage.length+1, textoJSON);

        formularioRecetas.reset()
        window.location.reload()



        
    
    })

    if (localStorage.length > 0) {
        //localStorage.clear()
        mostrarRecetas() 
    }

    function mostrarRecetas(){
        let JSONString = "";
        let data
        let index = localStorage.length
        do {
            JSONString = localStorage.getItem(index)

            try {
                data = JSON.parse(JSONString)
                dataZone.innerHTML += `
                <div class="row">
                    <div class="col s3"><img src="${data.uriImg}"></div>
                    <div class="col s9">
                        <h4 class="receta-title">${data.titulo}</h4>
                        <p class="receta-content">${data.descripcion}</p>
                        <p class="receta-costo"><b>Costo de fabricación:</b> $${data.costoPreparacion}</p>
                        <p class="receta-precio"><b>Precio sugerido:</b> $${data.precioSugerido}</p>
                    </div>
                </div>
                ` 
            } catch (error) {
                
            }
            index--
        } while (index > 1);
    }

    //console.log(localStorage.key(2))

});