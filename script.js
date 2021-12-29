const fazerGet = (url) => {
    let request = new XMLHttpRequest();
    request.open("GET",url, false);
    request.send();
    return request.responseText;
}

const data = (news) =>{
    let sec = document.createElement("section");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let span_2 = document.createElement("span");

    div.classList.add("data");
    span.innerHTML = news.inserted;
    span_2.innerHTML = news.modified;

    div.appendChild(span);
    div.appendChild(span_2);
    sec.appendChild(div);

    return sec;
}

const image = (news) =>{
    let sec = document.createElement("section");
    let div= document.createElement("div")
    let anc = document.createElement("a")
    let img = document.createElement("img");
    let title = document.createElement("h2");
    let kicker = document.createElement("span");

    div.classList.add("image");
    title.innerHTML = news.headline;
    kicker.innerHTML = news.kicker;
    img.innerHTML = img.setAttribute("src", "https://www.vagalume.com.br"+news.pic_src);
    img.innerHTML = "";
    anc.innerHTML = anc.setAttribute("href", news.url);
    anc.innerHTML = "";

    div.appendChild(img);
    anc.appendChild(title);
    div.appendChild(anc);
    div.appendChild(kicker);
    sec.appendChild(div);
    

    return sec;
}
const createTag = (news) =>{
    console.log(news);
    let sec = document.createElement("section")
    let div = document.createElement("div");
    sec.classList.add("conteudo");
    div.classList.add("conteudo-news")
    div.appendChild(data(news));
    div.appendChild(image(news));
    sec.appendChild(div);
    return sec;
}


const main = () =>{
    let data = fazerGet("https://www.vagalume.com.br/news/index.js");
    let news = JSON.parse(data);
    let noticias = news.news;
    let conteudo = document.getElementById("conteudo");

    noticias.forEach(element =>{
        let tag = createTag(element);
        conteudo.appendChild(tag);
    })

}


main();