// Display the sample metadata, i.e., an golfers information.
const url = "https://raw.githubusercontent.com/Tsmoore002900/Project_Par_3/main/merged_golf_data.json"
const url2 = "https://raw.githubusercontent.com/Tsmoore002900/Project_Par_3/main/test_golf_data.json"
const url3 = "https://raw.githubusercontent.com/Tsmoore002900/Project_Par_3/main/test_golf_data_2.json"

d3.json(url3).then(function(data) {
    console.log(data);
});

// Call updatePlotly() when a change takes place to the DOM

function init() {
    let dropDownMenu = d3.select("#selDataset");
    d3.json(url3).then((data) => {
        let names = data.data;
        names.forEach((id) => {
            console.log(id);
            dropDownMenu.append("option")
            .text(id.Name)
            .property("value", id);
        });
        let sample_one = names[0];
        console.log(sample_one);
        buildMetaData(sample_one);
    });
};

// Display the sample Data.
function buildMetaData() {
    d3.json(url3).then((data) => {
        let metadata = data.data;
        let value = metadata;
        console.log(value)
        let valueData = value[0];
        d3.select("#sample-metadata").html("");
        Object.entries(valueData).forEach(([key, value]) => {
            console.log(key, value);
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });
};

// Update all the plots when a new sample is selected.
function optionChanged(value) {
    console.log(value);
    buildMetaData(value);
};

init();

