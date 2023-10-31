const WURL = "https://api.openweathermap.org/data/2.5/weather?q=tooele&appid=3af9b85e5e77699a72a01952e7b9b73b"

fetch(WURL)

  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    const descrip = jsObject.weather[0].description;  // note how we reference the weather array
    //document.getElementById("one-day").setAttribute('src', jsObject.weather.icon)
    document.getElementById("one-city").textContent = jsObject.name;
    document.getElementById("current-humid").textContent = Math.ceil(jsObject.main.humidity);
    document.getElementById("current-desc").textContent = descrip;
    let T = (document.getElementById("current-temp").textContent = Math.floor(jsObject.main.temp));
    let W = (document.getElementById("current-windSpeed").textContent =Math.ceil(jsObject.wind.speed));
    const wc = 35.74 + 0.6215 * T - 35.75 * W ** 0.16 + 0.4275 * T * W ** 0.16;
    document.getElementById("current-windChill").textContent = Math.floor(wc);
    
  });




  const NURL = "https://newsapi.org/v2/everything?q=tesla&from=&sortBy=language=en&publishedAt&apiKey=7925e6a5cce646bd99df2b1b16b7538c"
 

  fetch(NURL)
  
  .then((response) => response.json())
  .then((jsObject) => {
  //console.log(jsObject);
  document.getElementById("header-img").setAttribute('src', jsObject.articles[0].urlToImage) 
  document.getElementById("header-article").textContent = jsObject.articles[0].title;
  document.getElementById("header-desc").textContent = jsObject.articles[0].description;
  document.getElementById("header-article").setAttribute('href', jsObject.articles[0].url) 

  document.getElementById("article-img-2").setAttribute('src', jsObject.articles[1].urlToImage) 
  document.getElementById("article-link-2").textContent = jsObject.articles[1].title;
  document.getElementById("article-desc-2").textContent = jsObject.articles[1].description;
  document.getElementById("article-link-2").setAttribute('href', jsObject.articles[1].url) 

  document.getElementById("article-img-3").setAttribute('src', jsObject.articles[2].urlToImage) 
  document.getElementById("article-link-3").textContent = jsObject.articles[2].title;
  document.getElementById("article-desc-3").textContent = jsObject.articles[2].description;
  document.getElementById("article-link-3").setAttribute('href', jsObject.articles[2].url) 

  document.getElementById("article-img-4").setAttribute('src', jsObject.articles[3].urlToImage) 
  document.getElementById("article-link-4").textContent = jsObject.articles[3].title;
  document.getElementById("article-desc-4").textContent = jsObject.articles[3].description;
  document.getElementById("article-link-4").setAttribute('href', jsObject.articles[3].url) 

  document.getElementById("article-img-5").setAttribute('src', jsObject.articles[4].urlToImage) 
  document.getElementById("article-link-5").textContent = jsObject.articles[4].title;
  document.getElementById("article-desc-5").textContent = jsObject.articles[4].description;
  document.getElementById("article-link-5").setAttribute('href', jsObject.articles[4].url) 
});