
const input = document.querySelector("#input-box")
const div = document.querySelector(".container")

function Weather(){
fetch(`https://api.weatherapi.com/v1/current.json?key=7a4a9dc8a0e54b0083194004242011&q=${input.value}&aqi=no;`)
.then((res)=>res.json())
.then((res)=>{
    console.log(res)
    
    const current = res.current
    const location = res.location

        div.innerHTML = `<div class="data">
        <li>Country: ${location.country}</li>
        <li>Name: ${location.name}</li>
        <li>Region: ${location.region}</li>
        <li>Temp_C: ${current.temp_c}°C</li>
        <li>Temp_F: ${current.temp_f}°F</li>
        <li>Weather: ${current.condition.text}</li>
        <li>Time: ${location.localtime}</li>

        </div>`
        input.value = ""
   
}).catch(err=>console.log(err))
}

















