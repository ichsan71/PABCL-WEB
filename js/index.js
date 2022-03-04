const IMAGEBASEURL = 'https://image.tmdb.org/t/p/w500'

const showData = (movies) => {
    let HTMLCard = ''
    let HTMLCard2 = ''
    let click = true  
    const container = document.getElementById('container')

    for (let index = 0; index < movies.length; index++) {
        const data = movies[index]
        
        const year = new Date(data.release_date).getFullYear()
        const detailData =`/detail/${data.id}`

        HTMLCard += `
        <a href="#" class="card">
            <img class="card__image" src="${IMAGEBASEURL}/${data.poster_path}"/>
            <div class="card__content">
                <p class="card__title">${data.title} (${year})</p>
            </div>
        </a>
        `
        container.addEventListener("click", function(){
            var x = document.getElementById("myBtn");
            do {
                HTMLCard2 = `
                <a href="#" class="card">
                    <img class="card__image" src="${IMAGEBASEURL}/${data.poster_path}"/>
                    <div class="card__content">
                        <p class="card__title">${data.title} (${year})</p>
                        <p class="card__title">${data.overview})</p>
                        <a href="/index.html">
                            <button type="button" id="myBtn" onclick="myFunction()">BACK HOME</button>
                        </a>
                    </div>
                </a>
                `
                console.log(data.title+"wkwk")
                container.innerHTML = HTMLCard2
        
            } while (!click);
        });
        
        console.log(HTMLCard)
        container.innerHTML = HTMLCard
    }
    }

function myFunction() {
    var x = document.getElementById("myBtn");
    x.disabled = true;
    click = false;
  }

window.addEventListener('DOMContentLoaded', () =>{
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${'e020b4926367bed54b0932937c78afd1'}`)
    .then((res) => res.json())
    .then((data) => {
        const results = data.results

        showData(results)
    })
})





