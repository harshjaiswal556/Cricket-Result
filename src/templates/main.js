
const dateInput = document.getElementById("dateInput");
const submitbtn = document.getElementById("submitbtn");
const show = document.getElementById("show");



const today_date = new Date();
let match_title = "match";
let venue = "venue";
let match_date = "date";
let result = "result";
dateInput.max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
submitbtn.addEventListener("click", (e) => {
    e.preventDefault();
    let date = dateInput.value;
    show.innerHTML = ``
    console.log(date)
    if (date == "") {
        show.innerHTML += "please enter date."
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com',
            'X-RapidAPI-Key': '213837e410msh864bfa2740321aap131866jsnd50fe9d1c817'
        }
    };
    
    fetch(`https://cricket-live-data.p.rapidapi.com/results-by-date/${date}`, options)
        .then(response => response.json())
        .then(response => {
            for (let i = 0; i < response["results"].length; i++) {
                match_title = response["results"][i]["match_title"]
                venue = response["results"][i]["venue"]
                match_date = response["results"][i]["date"]
                result = response["results"][i]["result"]
                console.log("\nNew Match")
                console.log(match_title)
                console.log(venue)
                console.log(match_date)
                console.log(result)
                show.innerHTML += `<h1>MATCH ${i + 1} RESULT</h1>
                <table>
                <tr>
                <th> Match Title </th>
                <td> ${match_title} </td>
                </tr>
                <tr>
                <th> Match Venue </th>
                <td> ${venue} </td>
                </tr>
                <tr>
                <th> Match Result </th>
                <td> ${result} </td>
                </tr>
                </table>`
            }
        })
        .catch(err => console.error(err));

})

let first = 'Get result date by date';
let second = 'Simple & single page site';
document.getElementById("type").style.fontWeight="1000";
var typed = new Typed('#type', {
  // Waits 1000ms after typing "First"
  strings: ['', first.fontcolor("orange"), second.fontcolor("orange")],
  typeSpeed: 100,
  backSpeed: 150,
  loop:true
});

new WOW().init();