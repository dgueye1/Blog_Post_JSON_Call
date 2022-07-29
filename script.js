const content = document.querySelector('.content');

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json =>{
        const articles = json.map(article => {
            const color_name = article.id % 2 !== 0 ? 'world' : 'design'

            return `
                <article class="article">
                    <div class="article_border">
                        <div class="${color_name}">${color_name}</div>
                        <div class="article_title">
                            <h3>${article.title.substr(0,9)}</h3>  
                        </div>
                        <div class="date">Nov 12</div>
                        <div class="paragraph">${article.body}</div>
                        <div class="continue_reading"><a href="#">Continue reading</a></div>
                    </div>
                </article> 
            `
        }).join("");

        content.innerHTML = articles;
    })