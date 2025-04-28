async function getPeliculas() {

    try {

        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0');

        if (res.status !== 200) throw new Error(`API Error - Status Code: ${res.status}`);
        
        const pokemons = await res.json();

        console.log(pokemons)

        const html = pokemons.results.map(pokemon => {
            const { name, url } = pokemon;
            return `
            <div class="card">
            <h4>POKEMON</h4>
                <div class="card-body">
                    <p><b>Pokemon:</b> ${name}</p>
                    <p><b>Url:</b> ${url}</p>
                </div>
            </div>
                `;
        }).join('');

        const main = document.getElementById('main-body');
        main.innerHTML = html;

    }catch(error) {
        console.log('Se produjo un ERROR: ', error.message);
    }


}
