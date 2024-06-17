const getCharactersButton = document.getElementById('getCharactersButton');
const getCharacters = async () => {
    const charactersList = document.getElementById('charactersList');
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();

        const characters = data.results;

        charactersList.innerHTML = '';

        characters.forEach((character) => {
            const li = document.createElement('li');
            li.textContent = character.name;
            charactersList.appendChild(li);
        });

        //Garantizar que se obtengan todos los personajes
        let nextPage = data.info.next;
        while (nextPage) {
            const nextPageResponse = await fetch(nextPage);
            const nextPageData = await nextPageResponse.json();

            const nextPageCharacters = nextPageData.results;

            nextPageCharacters.forEach((character) => {
                const li = document.createElement('li');
                li.textContent = character.name;
                charactersList.appendChild(li);
            });

            nextPage = nextPageData.info.next;
        }
    } catch (error) {
        charactersList.innerHTML = 'Ha ocurrido un error al intentar obtener los personajes.';
    }
};
getCharactersButton.addEventListener('click', getCharacters);

const filterButton = document.getElementById('filterButton');
const filterCharacters = async () => {
    const nameFilter = document.getElementById('nameFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;
    const speciesFilter = document.getElementById('speciesFilter').value;
    const typeFilter = document.getElementById('typeFilter').value;
    const genderFilter = document.getElementById('genderFilter').value;

    const charactersList = document.getElementById('charactersList');

    try {
        let nextPage = 'https://rickandmortyapi.com/api/character';
        let allCharacters = [];

        while (nextPage) {
            const response = await fetch(nextPage);
            const data = await response.json();

            const characters = data.results;

            //Se filtran los personajes de acuerdo a los filtros
            const filteredCharacters = characters.filter((character) => {
                return (
                    character.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
                    character.status.toLowerCase().includes(statusFilter.toLowerCase()) &&
                    character.species.toLowerCase().includes(speciesFilter.toLowerCase()) &&
                    character.type.toLowerCase().includes(typeFilter.toLowerCase()) &&
                    character.gender.toLowerCase().includes(genderFilter.toLowerCase())
                );
            });

            //Verificar si se han introducido valores en los filtros
            if (nameFilter === '' && statusFilter === '' && speciesFilter === '' && typeFilter === '' && genderFilter === '') {
                charactersList.innerHTML = 'Por favor, introduzca al menos un filtro.';
                return;
            }

            //Agregamos los personajes filtrados a la lista de personajes
            allCharacters = allCharacters.concat(filteredCharacters);

            nextPage = data.info.next;
        }

        // Limpiar la lista de personajes
        charactersList.innerHTML = '';

        allCharacters.forEach((character) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>Nombre:</strong> ${character.name}, <strong>Estado:</strong> ${character.status}, <strong>Especie:</strong> ${character.species}, <strong>Tipo:</strong> ${character.type}, <strong>Género:</strong> ${character.gender}`;
            charactersList.appendChild(li);
        });
    } catch (error) {
        charactersList.innerHTML = 'Ha ocurrido un error al intentar obtener los personajes filtrados.';
    }
};
filterButton.addEventListener('click', filterCharacters);