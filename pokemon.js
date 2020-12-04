const pokemon = document.getElementById('input');
const btn = document.getElementById('searchbtn');
const img = document.getElementById('pokeimage')
const name =document.getElementById('pokename')
const pknum = document.getElementById('pokenumber');
const type =document.getElementById('poketype1')
const move = document.getElementById('moves')
btn.addEventListener('click',(e)=>{
    axios
    .get(`http://pokeapi.co/api/v2/pokemon/${(pokemon.value).toLowerCase()}`, {
     
    })
    .then((res) => {
        console.log(res.data.moves)
        img.setAttribute("src",res.data.sprites.front_default);
        name.innerHTML=`<p><b>Name :</b> ${res.data.name}</p>`;
        pknum.innerHTML=`<p> <b>Number :</b>  ${res.data.id}`
        type.innerHTML=`<p>  <b>Pokemon type:</b> ${res.data.types[0].type.name}`
        move.innerHTML=`<p> <b>Pokemon Moves :</b>${res.data.moves[0].move.name} ,${res.data.moves[1].move.name} , ${res.data.moves[2].move.name} ,${res.data.moves[3].move.name} ,${res.data.moves[4].move.name}`
    }
    )
    .catch(err => console.error(err));
     e.preventDefault()
     }
  
)
