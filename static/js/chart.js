// JavaScript source code

// Get the select element
const playerSelect = document.getElementById('http://localhost:8888/edit/merged_golf_data.json');

// Create an object to hold the data for each player
const playersData = {};

// Function to create a bar chart for a given player
function createBarChart(playerName) {
    const data = playersData[playerName];

    // Get the canvas element and create a new chart instance
    const canvas = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(data),
            datasets: [{
                label: 'playerSelect',
                data: Object.values(data),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]                
        }
    });
}

// Function to populate the select element with options
function populateSelectOptions() {
    // Fetch the data from the JSON file
    fetch('http://localhost:8888/edit/merged_golf_data.json')
        .then(response => response.json())
        .then(data => {
            // Populate the playersData object with the data
            for (const player of Object.keys(data)) {
                playersData[player] = data[player];
            }

            // Add the player names to the select element as options
            for (const player of Object.keys(playersData)) {
                const option = document.createElement('option');
                option.value = player;
                option.text = player;
                playerSelect.appendChild(option);
            }

            // Create the initial bar chart using the first player in the object
            createBarChart(Object.keys(playersData)[0]);
        })
        .catch(error => console.error(error));
}

                // Event listener for when a new player is selected
                playerSelect.addEventListener('change', (event) => {
                    const selectedPlayer = event.target.value(Name);
                    createBarChart(selectedPlayer);
                });

// Call the populateSelectOptions