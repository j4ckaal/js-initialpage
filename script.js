function loading() {
    var msg = document.getElementById('mensagem')
    var img = document.getElementById('img')
    
    var data = new Date()
    
    var dia = data.getDate()
    var mes = data.getMonth()
    var ano = data.getFullYear()
    var hora = data.getHours()

    msg.innerHTML = `Hoje é <strong>${dia}/${mes}/${ano}</strong>, e são <strong>${hora} hora(s)!</strong>`
    if (hora >= 6 && hora < 12) {
        img.src = 'amanhecer.jpg'
        document.body.style.background = '#f0bb62'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#95d1cc'
    } else if (hora > 18 || hora < 6)
        img.src = 'noite,jpg'
        document.body.style.background = '22577e'
}


const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input")
const suggBox = searchWrapper.querySelector(".autocom-box")
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;



inputBox.onkeyup = (e)=>{
    let userData = e.target.value;
    let emptyArray = [];
    if(userData) {
        icon.onclick = ()=> {
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }        
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active");
    }
}

function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}



function showSuggestions(list) {
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}