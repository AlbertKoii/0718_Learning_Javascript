// courseInfo.js

let lindyHop = document.getElementById('lindyHop');
let charleston = document.getElementById('charleston');
let bachata = document.getElementById('bachata');
let salsa = document.getElementById('salsa')
const displayContainer = document.getElementById('display');

function fetchAndDisplayData(jsonFile) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            let htmlContent = '';
            data.courses.forEach(course => {
                htmlContent += `
                <div class="allInfo">   
                    <img src="${courses.img}">
                    <div class="activity01">
                        <div class="activity001">
                            <h1>${courses.title}</h1>
                            <p>活動名稱: ${courses.name}</p>
                            <p>活動地址: ${courses.address}</p>
                            <p>活動時間: ${courses.time}</p>
                            <p>活動金額: ${courses.price}</p>
                        </div>
                        <a class="activity002" href="${    "activities": [
      { "img": "https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/362940990_609246031315904_8985946730456035592_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=340051&_nc_ohc=8GnL5MpuGtEAX-vg59A&_nc_ht=scontent-tpe1-1.xx&oh=00_AfAYZApLVAspEYCVlw1ZHVqmXjfIZ0MpOwDwgUem_3J3_Q&oe=64C75B14",
        "title": "Swing Party info",
        "name": "📍無邊境市集：浪漫七夕大安森",
        "address": "大安森林公園捷運站 陽光大廳",
        "time": "2023-08-13 15:00 - 16:30 ",
        "price": "NT$ 0",
        "link": "https://swingtaiwan.shoplineapp.com/products/230813"
      },.link}">
                        <button>報名連結</button>
                        </a>
                    </div>
              </div> 
                `;
            });

            displayContainer.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error loading course data:', error);
        });
}

// Add click event listeners to the h4 elements inside the summary tags
lindyHop.addEventListener('click', function() {
    fetchAndDisplayData('lindyhop.json');
});

charleston.addEventListener('click', function() {
    fetchAndDisplayData('charleston.json');
});

bachata.addEventListener('click', function() {
    fetchAndDisplayData('bachata.json');
});

salsa.addEventListener('click', function() {
    fetchAndDisplayData('salsa.json');
});
