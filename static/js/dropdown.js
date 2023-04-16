// Display the sample metadata, i.e., an golfers information.
// const url = "https://raw.githubusercontent.com/Tsmoore002900/Project_Par_3/main/merged_golf_data.json"
const url = "https://raw.githubusercontent.com/Tsmoore002900/Project_Par_3/main/test_golf_data.json"

d3.json(url).then(function(data) {
    console.log(data);
});

function init() {
    let dropDownMenu = d3.select("#selDataset");
    let dataset = dropdownMenu.property("value");
};