const catalogue = document.getElementById("catalogue");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const plantImage = modal.querySelector('.description img');
const plantName = modal.querySelector('.description div h2');
const plantDescriptionList = modal.querySelector(".description div div")

fetch('./data/plantData.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        data.forEach((plant, i) => {
            const plantCard = document.createElement('div');
            plantCard.className = 'catalogue-item';

            const plantImage = document.createElement('img');
            plantImage.src = `./img/${plant.image}`;
            plantImage.alt = plant.name;
            plantCard.appendChild(plantImage);

            plantCard.addEventListener('click', () => {
                setModalContent(plant);
                showModal(true);
            });

            catalogue.appendChild(plantCard);
        });
    })
    .catch(error => {
        console.error('Error loading plant data:', error);
        const catalogue = document.getElementById("catalogue");
        catalogue.innerHTML = '<p class="error">Помилка завантаження даних про рослини</p>';
    });

const setModalContent = (plant) => {
    plantImage.src = `./img/${plant.image}`;
    plantImage.alt = plant.name;
    plantName.textContent = plant.name;

    // Clear previous description
    plantDescriptionList.innerHTML = '';

    plant.description.forEach(desc => {
        const descItem = document.createElement('p');
        descItem.textContent = desc;
        plantDescriptionList.appendChild(descItem);
    });
}

const showModal = (state) => {
    if (state) {
        modal.style.display = "flex";
    }
    else {
        modal.style.display = "none";
    }
}

closeModal.addEventListener('click', () => showModal(false));
