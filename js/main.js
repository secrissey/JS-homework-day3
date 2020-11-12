
const form = document.getElementById("f1RacerForm");
    form.onsubmit = submitForm;


function getJson() {
    let season = document.getElementById("season").value;
    let round = document.getElementById("round").value;
    
    fetch(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < 7; i++) {
            let first_name = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName;
            let last_name = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName;
            let driver_url = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.url;
            let nationality = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality;
            let sponsor = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name;
            let points = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points;
            let full_name = `${first_name} ${last_name}`
            const info = [full_name, nationality, sponsor, points]
        }
    })
}