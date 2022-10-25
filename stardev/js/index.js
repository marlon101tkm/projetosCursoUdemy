const persons = document.getElementById('persons');
const starships = document.getElementById('starships');
const planets = document.getElementById('planets');

fillCounters();

function fillCounters(){
    Promise.all([
        getData('people/'),
        getData('starships/'),
        getData('planets/')
    ])
    .then(data =>  {
        persons.style.fontSize = '5em';
        starships.style.fontSize = '5em';
        planets.style.fontSize = '5em';

        persons.textContent = data[0].count;
        starships.textContent = data[1].count;
        planets.textContent = data[2].count;
        
    })
    .catch(err => console.log('Erro:',err))
}

function getData(param){
    return fetch(`https://swapi.dev/api/${param}`)
        .then(res => res.json());
}



function loadPhrase(){
    const btn = document.getElementById('btn-phrases');
    const phrase = document.getElementById('phrase');
    // As Frases dos Star Wars foram desativadas 
    // return fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
    
    //Foi buscada uma API diferente da mostrada no Curso
    return fetch('http://quotes.stormconsultancy.co.uk/random.json')
            .then(data => data.json())
            .then(json =>{
                console.log(json);
                btn.textContent = 'Ver Mais uma frase!';
                // phrase.textContent = `"${json.content}"`;
                phrase.textContent = `"${json.quote}------${json.author}"`;

                phrase.animate([
                    {transform:'translateY(-70px)'},
                    {transform:'translateY(0px)'}
                ],{
                    duration: 500
                })
            })
            .catch(err => 
               
                console.log('Erro: ',err))


}
