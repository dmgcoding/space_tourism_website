// import data from './data.json' assert { type: 'JSON' };
let data = {}

//planet elements
const planet_img = document.getElementById("planet_img");
const planet_title = document.querySelector(".planet_title");
const planet_desc = document.querySelector(".planet_desc");
const planet_avg_dis = document.querySelector(".planet_avg_dis");
const planet_est_time = document.querySelector(".planet_est_time");

const moon = document.getElementById("moon");
const mars = document.getElementById("mars");
const europa = document.getElementById("europa");
const titan = document.getElementById("titan");

fetchData();

function fetchData(){
    fetch('app/js/data.json')
    .then(response=>response.json())
    .then(json=>{
        data=json;
        onPageLoad();
    });

}

function onPageLoad(){
    selectTech(0);
}

function selectPlanet(planet){
    const selected_planet = document.querySelector(".selected_planet")
    selected_planet.classList.remove("selected_planet");

    if(planet == "moon"){
        moon.classList.add("selected_planet");

        const planet = data.destinations[0];
        planet_img.src = planet.images.png;
        planet_title.innerHTML = planet.name;
        planet_desc.innerHTML = planet.description;
        planet_avg_dis.innerHTML = planet.distance;
        planet_est_time.innerHTML = planet.travel;
    }else if(planet == "mars"){
        mars.classList.add("selected_planet");

        const planet = data.destinations[1];
        planet_img.src = planet.images.png;
        planet_title.innerHTML = planet.name;
        planet_desc.innerHTML = planet.description;
        planet_avg_dis.innerHTML = planet.distance;
        planet_est_time.innerHTML = planet.travel;
    }else if(planet == "europa"){
        europa.classList.add("selected_planet");

        const planet = data.destinations[2];
        planet_img.src = planet.images.png;
        planet_title.innerHTML = planet.name;
        planet_desc.innerHTML = planet.description;
        planet_avg_dis.innerHTML = planet.distance;
        planet_est_time.innerHTML = planet.travel;
    }else if(planet == "titan"){
        titan.classList.add("selected_planet");

        const planet = data.destinations[3];
        planet_img.src = planet.images.png;
        planet_title.innerHTML = planet.name;
        planet_desc.innerHTML = planet.description;
        planet_avg_dis.innerHTML = planet.distance;
        planet_est_time.innerHTML = planet.travel;
    }
}


//crew page
const crew_img = document.getElementById("crew_member_img");
const crew_member_post = document.querySelector(".crew_member_post");
const crew_member_name = document.querySelector(".crew_member_name");
const crew_member_desc = document.querySelector(".crew_member_desc");

const cm1 = document.getElementById("crew_member_1");
const cm2 = document.getElementById("crew_member_2");
const cm3 = document.getElementById("crew_member_3");
const cm4 = document.getElementById("crew_member_4");

function selectCrew(num){
    let crew_m = data.crew[num];
    crew_img.src = crew_m.images.png;
    crew_member_post.innerHTML = crew_m.role;
    crew_member_name.innerHTML = crew_m.name;
    crew_member_desc.innerHTML = crew_m.bio;

    const selected_crew_member = document.querySelector(".crew_member_selected");
    selected_crew_member.classList.remove("crew_member_selected");

    switch (num) {
        case 0:
            cm1.classList.add("crew_member_selected");
            break;
        case 1:
            cm2.classList.add("crew_member_selected");
            break;
        case 2:
            cm3.classList.add("crew_member_selected");
            break;
        case 3:
            cm4.classList.add("crew_member_selected");
             break;      
        default:
            break;
    }
}


//tech page
const tech_img = document.getElementById("tech_img");
const tech_details_name = document.querySelector(".tech_details_name");
const tech_details_desc = document.querySelector(".tech_details_desc");

const tech1 = document.getElementById("tech_select_1");
const tech2 = document.getElementById("tech_select_2");
const tech3 = document.getElementById("tech_select_3");

function selectTech(num){
    const selected_tech = document.querySelector(".tech_selected");
    let a = data.technology[num];
    tech_details_name.innerHTML = a.name;
    tech_details_desc.innerHTML = a.description;

    //set image src according to screen size
    let size = window.innerWidth;
    if(size > 768){//desktop > potrait
        tech_img.src = a.images.portrait;
    }else{//landscape
        tech_img.src = a.images.landscape;
    }

    //change the selected dot
    selected_tech.classList.remove("tech_selected");
    switch (num) {
        case 0:
            tech1.classList.add("tech_selected");
            break;
        case 1:
            tech2.classList.add("tech_selected");
            break;
        case 2:
            tech3.classList.add("tech_selected");
            break;
    
        default:
            break;
    }
}