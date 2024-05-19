const getPokemon = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!res.ok) {
            throw new Error('Pokemon not found');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error(`failed to fetch with Pokemon With Id : ${id}`);
    }
};

export default getPokemon;