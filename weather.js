let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう

let b = document.querySelector('#kensaku');
b.addEventListener('click', kensaku);

function kensaku() { 
  let i = document.querySelector('input[name="tosi"]');
  let tosi = i.value;
  console.log(tosi);
}  

console.log(data.name);
console.log(data.weather[0].description);
console.log(data.coord.lon); 
console.log(data.coord.lat); 
console.log(data.main.temp_max);
console.log(data.main.temp_min);
console.log(data.main.humidity); 
console.log(data.wind.speed); 
console.log(data.wind.deg);

let div = document.querySelector('div#result');

let k =document.createElement("p");
k.textContent = '世界の天気(検索結果1件)';
div.insertAdjacentElement('beforeend',k);

let divw = document.createElement("div");
divw.id = 'w';
let di = document.createElement("div");

let p =document.createElement("p");
p.id = 'tosi';
p.textContent = data.name;

di.insertAdjacentElement('beforeend',p);
divw.insertAdjacentElement('beforeend',di);

di = document.createElement("div");
let table = document.createElement("table");
let tbody = document.createElement("tbody");

let tr = document.createElement("tr");
let th = document.createElement("th");
th.textContent = '天気';
tr.insertAdjacentElement('beforeend',th);
let td = document.createElement("td");
td.textContent = data.weather[0].description;
tr.insertAdjacentElement('beforeend',td);
tbody.insertAdjacentElement('beforeend',tr);

tr = document.createElement("tr");
th = document.createElement("th");
th.textContent = '緯度';
tr.insertAdjacentElement('beforeend',th);
td = document.createElement("td");
td.textContent = data.coord.lon;
tr.insertAdjacentElement('beforeend',td);
tbody.insertAdjacentElement('beforeend',tr);

tr = document.createElement("tr");
th = document.createElement("th");
th.textContent = '経度';
tr.insertAdjacentElement('beforeend',th);
td = document.createElement("td");
td.textContent = data.coord.lat;
tr.insertAdjacentElement('beforeend',td);
tbody.insertAdjacentElement('beforeend',tr);

tr = document.createElement("tr");
th = document.createElement("th");
th.id = 'saikou'
th.textContent = '最高気温';
tr.insertAdjacentElement('beforeend',th);
td = document.createElement("td");
td.textContent = data.main.temp_max;
tr.insertAdjacentElement('beforeend',td);
tbody.insertAdjacentElement('beforeend',tr);

tr = document.createElement("tr");
th = document.createElement("th");
th.id = 'saitei'
th.textContent = '最低気温';
tr.insertAdjacentElement('beforeend',th);
td = document.createElement("td");
td.textContent = data.main.temp_min;
tr.insertAdjacentElement('beforeend',td);
tbody.insertAdjacentElement('beforeend',tr);

tr = document.createElement("tr");
th = document.createElement("th");
th.textContent = '湿度';
tr.insertAdjacentElement('beforeend',th);
td = document.createElement("td");
td.textContent = data.main.humidity;
tr.insertAdjacentElement('beforeend',td);
tbody.insertAdjacentElement('beforeend',tr);

tr = document.createElement("tr");
th = document.createElement("th");
th.textContent = '風速';
tr.insertAdjacentElement('beforeend',th);
td = document.createElement("td");
td.textContent = data.wind.speed;
tr.insertAdjacentElement('beforeend',td);
tbody.insertAdjacentElement('beforeend',tr);

tr = document.createElement("tr");
th = document.createElement("th");
th.textContent = '風向';
tr.insertAdjacentElement('beforeend',th);
td = document.createElement("td");
td.textContent = data.wind.deg;
tr.insertAdjacentElement('beforeend',td);
tbody.insertAdjacentElement('beforeend',tr);




table.insertAdjacentElement('beforeend',tbody);
di.insertAdjacentElement('beforeend',table);
divw.insertAdjacentElement('beforeend',di);

div.insertAdjacentElement('beforeend',divw);