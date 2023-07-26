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
  let i = document.querySelectorAll('input[name="tosi"]');
  let t;
  for (let r of i) {
    if (r.checked) {        
      console.log(r.value);
      t = r.value;
    }
  }
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + t + '.json';

  axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理

}

function showResult(resp) {

let div = document.querySelector('div#result');
div.textContent = "";



let data = resp.data;

if (typeof data === 'string') {
  data = JSON.parse(data);
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

div = document.querySelector('div#result');
let divw = document.createElement("div");
divw.id = 'w';
let di = document.createElement("div");

let p =document.createElement("p");
p.id = 'tosi';
p.textContent = data.name;

let i = document.querySelectorAll('input[name="tosi"]');
  let t;
  for (let r of i) {
    if (r.checked) {        
      console.log(r.value);
      t = r.value;
    }
  }

let img = document.createElement("img");
if(t === '360630'){
  img.src = 'Egypt.png';
}
else if(t === '524901'){
  img.src = 'Russia.png';
}
else if(t === '993800'){
  img.src = 'South-Africa.png';
}
else if(t === '1816670'){
  img.src = 'China.png';
}
else if(t === '1850147'){
  img.src = 'Japan.png';
}
else if(t === '1880252'){
  img.src = 'Singapore.png';
}
else if(t === '2147714'){
  img.src = 'Australia.png';
}
else if(t === '2643743'){
  img.src = 'United-Kingdom.png';
}
else if(t === '2968815'){
  img.src = 'France.png';
}
else if(t === '3451189'){
  img.src = 'Brazil.png';
}
else if(t === '5128581'){
  img.src = 'United-States-of-America.png';
}
else{
  img.src = 'United-States-of-America.png';
}
div.insertAdjacentElement('beforeend',img);

  if(t === '2968815' || t === '3451189'){
    p.style.writingMode='horizontal-tb';
    if(t === '3451189'){
      p.style.marginTop='0';
    }
  }
else if(t === '993800'){
  p.style.fontSize='100px';
  p.style.marginLeft='40%';
}
else if(t === '1880252' || t === '5128581' || t === '5368361'){
  p.style.fontSize='130px';
  p.style.marginLeft='40%';
}
else{
  p.style.marginLeft='40%';
}

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

let h1 = document.querySelector('h1');		
h1.style.margin= '0px'; 

}

function showError(err) {
  console.log(err);
}

function finish() {
  console.log('Ajax 通信が終わりました');
}
