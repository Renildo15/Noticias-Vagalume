const fazerGet = (url) => {
    let request = new XMLHttpRequest();
    request.open("GET",url, false);
    request.send();
    return request.responseText;
}

const data = (news) =>{
    let div = document.createElement("div");
    let span = document.createElement("span");

    div.classList.add("data");
    span.innerHTML = "Publicado em: " + news.inserted + `<br>`;
    div.appendChild(span);

    return div;
}

const image = (news) =>{
    let div= document.createElement("div")
    let anc = document.createElement("a")
    let img = document.createElement("img");
    let title = document.createElement("h4");
    let kicker = document.createElement("span");

    div.classList.add("image");
    title.innerHTML = news.headline;
    kicker.innerHTML = news.kicker;
    img.innerHTML = img.setAttribute("src", "https://www.vagalume.com.br"+news.pic_src);
    img.innerHTML = "";
    anc.innerHTML = anc.setAttribute("href", news.url);
    anc.innerHTML = "";
    
    div.appendChild(data(news));
    div.appendChild(img);
    anc.appendChild(title);
    div.appendChild(anc);
    div.appendChild(kicker);
    

    return div;
}
const createTag = (news) =>{
    console.log(news);
    let div = document.createElement("div");
    div.classList.add("conteudo-news")
    div.appendChild(image(news));
    return div;
}


const main = () =>{
    let data = fazerGet("https://www.vagalume.com.br/news/index.js");
    let news = JSON.parse(data);
    let noticias = news.news;
    let conteudo = document.getElementById("conteudo");
    let secNews = document.getElementById("news")

    noticias.forEach(element =>{
        let tag = image(element);
        secNews.appendChild(tag);
    })

}


main();