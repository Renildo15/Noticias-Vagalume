const fazerGet = (url) => {
    let request = new XMLHttpRequest();
    request.open("GET",url, false);
    request.send();
    return request.responseText;
}

const createTag = (news) =>{
    console.log(news);
    let div = document.createElement("div")
    let test = document.createElement("h1");

    test.innerHTML = "Teste"

    div.appendChild(test);

    return div;
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