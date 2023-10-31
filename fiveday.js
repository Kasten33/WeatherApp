const day1 = "https://api.openweathermap.org/data/2.5/forecast?q=tooele&appid=3af9b85e5e77699a72a01952e7b9b73b"
const day2 = "https://api.openweathermap.org/data/2.5/forecast?q=tooele&appid=3af9b85e5e77699a72a01952e7b9b73b"
const day3 = "https://api.openweathermap.org/data/2.5/forecast?q=tooele&appid=3af9b85e5e77699a72a01952e7b9b73b"
const day4 = "https://api.openweathermap.org/data/2.5/forecast?q=tooele&appid=3af9b85e5e77699a72a01952e7b9b73b"
const day5 = "https://api.openweathermap.org/data/2.5/forecast?q=tooele&appid=3af9b85e5e77699a72a01952e7b9b73b"

let iconsForWeather = [];
let iconURL = [];
let iconNum = 0;

fetch(day1)

  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    document.getElementById("future-humid").textContent = Math.ceil(jsObject.list[1].main.humidity);
    document.getElementById("future-desc").textContent = (jsObject.list[1].weather[0].description);
    let T1 = (document.getElementById("future-temp").textContent = Math.floor(jsObject.list[1].main.temp));
    let W1 = (document.getElementById("future-windSpeed").textContent = Math.ceil(jsObject.list[1].wind.speed));
    const wc1 = 35.74 + 0.6215 * T1 - 35.75 * W1 ** 0.16 + 0.4275 * T1 * W1 ** 0.16;
    document.getElementById("future-windChill").textContent = Math.floor(wc1);
    for (let x = 0; x < 6; x++) {
        if (jsObject.list[x].dt_txt.includes("00:00")) {
          iconsForWeather[x] = jsObject.list[x].weather[0].icon;
  
          iconURL[x] =
            "http://openweathermap.org/img/w/" + iconsForWeather[x] + ".png";
  
          document
            .getElementById(`img${iconNum + 1}`)
            .setAttribute("src", iconURL[x]);
          iconNum++;
        }
      }
  
});
fetch(day2)

  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
  
    document.getElementById("future-humid2").textContent = Math.ceil(jsObject.list[2].main.humidity);
    document.getElementById("future-desc2").textContent = (jsObject.list[2].weather[0].description);
    let T1 = (document.getElementById("future-temp2").textContent = Math.floor(jsObject.list[2].main.temp));
    let W1 = (document.getElementById("future-windSpeed2").textContent = Math.ceil(jsObject.list[2].wind.speed));
    const wc1 = 35.74 + 0.6215 * T1 - 35.75 * W1 ** 0.16 + 0.4275 * T1 * W1 ** 0.16;
    document.getElementById("future-windChill2").textContent = Math.floor(wc1);
});
fetch(day3)

  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    document.getElementById("future-humid3").textContent = Math.ceil(jsObject.list[3].main.humidity);
    document.getElementById("future-desc3").textContent = (jsObject.list[3].weather[0].description);
    let T1 = (document.getElementById("future-temp3").textContent = Math.floor(jsObject.list[3].main.temp));
    let W1 = (document.getElementById("future-windSpeed3").textContent = Math.ceil(jsObject.list[3].wind.speed));
    const wc1 = 35.74 + 0.6215 * T1 - 35.75 * W1 ** 0.16 + 0.4275 * T1 * W1 ** 0.16;
    document.getElementById("future-windChill3").textContent = Math.floor(wc1);
});
fetch(day4)

  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
  
    document.getElementById("future-humid4").textContent = Math.ceil(jsObject.list[4].main.humidity);
    document.getElementById("future-desc4").textContent = (jsObject.list[4].weather[0].description);
    let T1 = (document.getElementById("future-temp4").textContent = Math.floor(jsObject.list[4].main.temp));
    let W1 = (document.getElementById("future-windSpeed4").textContent = Math.ceil(jsObject.list[4].wind.speed));
    const wc1 = 35.74 + 0.6215 * T1 - 35.75 * W1 ** 0.16 + 0.4275 * T1 * W1 ** 0.16;
    document.getElementById("future-windChill4").textContent = Math.floor(wc1);
});
fetch(day5)

.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);

  document.getElementById("future-humid5").textContent = Math.ceil(jsObject.list[5].main.humidity);
  document.getElementById("future-desc5").textContent = (jsObject.list[5].weather[0].description);
  let T1 = (document.getElementById("future-temp5").textContent = Math.floor(jsObject.list[5].main.temp));
  let W1 = (document.getElementById("future-windSpeed5").textContent = Math.ceil(jsObject.list[5].wind.speed));
  const wc1 = 35.74 + 0.6215 * T1 - 35.75 * W1 ** 0.16 + 0.4275 * T1 * W1 ** 0.16;
  document.getElementById("future-windChill5").textContent = Math.floor(wc1);
});