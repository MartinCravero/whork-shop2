window.onload = () => {

let boton = document.getElementById('boton')
let buscador = document.getElementById('buscador')
let infoAnime2 = document.getElementById('cuerpo')
let listaAnime = []

async function getAnime (anime){
    let response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${anime}`)
        response = await response.json()
        return response
    }

    function buscarAnime() {
        boton.addEventListener ('click',()=>{
            let anime = buscador.value
            getAnime(anime)
                .then ((response) => renderView(response))
                .catch ((error) => console.error(error))
            buscador.value = ''
        

    function renderView (infoAnime) {
        for (let i = 0; i < infoAnime.results.length; i++) {
            newItem = document.createElement('div')
            newItem.innerHTML = `<h1>${infoAnime.results[i].title}</h1> <img src="${infoAnime.results[i].image_url}" alt="poster">`
            infoAnime2.appendChild (newItem)
        
        getAnime(anime).then((response) => {
        newItem.addEventListener ('click',() =>{
            console.log(i);
            console.log(response.results[i].title);
            localStorage.setItem('anime', JSON.stringify(response.results[i]))
            window.open ('detalle.html', '_self')

        })
    }
    )}
}
})
}

    buscarAnime()
}