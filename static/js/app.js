// Use the D3 library to read in samples.json from the URL 
const options = {
  method: 'GET',
  url: 'https://golf-leaderboard-data.p.rapidapi.com/tour-rankings/2/2021',
  headers: {
    'X-RapidAPI-Key': 'c59c4f72e5msh5e78b6408f4d584p186cf2jsn70eb2106de23',
    'X-RapidAPI-Host': 'golf-leaderboard-data.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

d3.json(options).then(function(data) {
    console.log(data);
});

function init() {
    let dropDownMenu = d3.select("#selDataset");
    d3.json(url).then((data) => {
        let names = data.names;
        names.forEach((id) => {
            console.log(id);
            dropDownMenu.append("option")
            .text(id)
            .property("value", id);
        });
        let sample_one = names[0];
        console.log(sample_one);
        buildMetaData(sample_one);
    });
};
// Display the sample metadata, i.e., an golfers information.


// Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard.
function optionChanged(value) {
    console.log(value);
    buildMetaData(value);
};
// Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo.
