window.onload = () => {
    let anime = JSON.parse(localStorage.getItem('anime'));
    let detalle = document.getElementById('detalle')

    let tarjeta = document.createElement('div')
            tarjeta.classList.add('tarjeta')
            tarjeta.innerHTML =`<img src="${anime.image_url}" alt="" class="anime-image">
                                <h1 class="title">${anime.title}</h1>
                                <p class="synopsis">${anime.synopsis}</p>
            `
    detalle.appendChild(tarjeta)



}