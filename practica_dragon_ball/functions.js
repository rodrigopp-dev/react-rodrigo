console.log("Dragon Ball API");

async function obtenerPersonajes() {
    const response = await fetch("http://dragonball-api.com/api/characters");
    const data = await response.json();
    console.log('Personajes:', data.items);
    return data.items;
}

console.log(obtenerPersonajes());

function pintarPersonajes(personajes) {
    console.log("Pintando personajes:", personajes);
    let tarjetasHTML = "";
    console.log("Tarjetas HTML:", tarjetasHTML);
    
    personajes.forEach(personaje => {
        tarjetasHTML += `
        <div class="card">
            <div class="card-image-container">
                <img src="${personaje.image}" alt="${personaje.name}">
            </div>
                <h3>${personaje.name}</h3>
                <p class="ki">Ki: ${personaje.ki}</p>
                <p class="race">Race: ${personaje.race}</p>
            
        </div>
        `;
    });
    
    document.getElementById("main-container").innerHTML = tarjetasHTML;
}

obtenerPersonajes().then(pintarPersonajes);