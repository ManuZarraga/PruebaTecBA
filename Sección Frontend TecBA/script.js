document.addEventListener('DOMContentLoaded', function () {
    const addressInput = document.getElementById('addressInput');
    const searchButton = document.getElementById('searchButton');
    const resultsContainer = document.getElementById('resultsContainer');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const errorMessage = document.getElementById('errorMessage');
    const noResultsMessage = document.getElementById('noResultsMessage');

    searchButton.addEventListener('click', searchAddress);
    addressInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchAddress();
        }
    });

    function searchAddress() {
        const searchText = addressInput.value.trim();

        if (!searchText) {
            showError('Por favor ingrese una dirección para buscar');
            return;
        }

        loadingIndicator.style.display = 'block';
        errorMessage.style.display = 'none';
        noResultsMessage.style.display = 'none';
        resultsContainer.innerHTML = '';

        const baseUrl = 'http://servicios.usig.buenosaires.gob.ar/normalizar/';
        const params = new URLSearchParams({
            direccion: searchText,
            maxOptions: 10,
        });

        const url = `${baseUrl}?${params.toString()}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error del servidor');
                }
                return response.json();
            })
            .then(data => {
                loadingIndicator.style.display = 'none';

                if (data && data.direccionesNormalizadas && data.direccionesNormalizadas.length > 0) {
                    displayResults(data.direccionesNormalizadas);
                } else {
                    noResultsMessage.style.display = 'block';
                }
            })
            .catch(error => {
                loadingIndicator.style.display = 'none';
                showError('Error al buscar la dirección.');
                console.error('Error:', error);
            });
    }

    function displayResults(results) {
        resultsContainer.innerHTML = '';

        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';

            const streetName = document.createElement('div');
            streetName.className = 'street-name';
            streetName.textContent = result.nombre_calle || 'Nombre no disponible';

            const address = document.createElement('div');
            address.className = 'address';
            address.textContent = result.direccion || 'Dirección no disponible';

            resultItem.appendChild(streetName);
            resultItem.appendChild(address);

            resultsContainer.appendChild(resultItem);
        });
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
});