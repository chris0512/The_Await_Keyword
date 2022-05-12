// function getPlanets(){
//     return axios.get('https://swapi.dev/api/planets/');
// }
//
// getPlanets().then((res) => {
//     console.log(res.data);
// })

async function getPlanets(){
    try {
        const res =  await axios.get('https://swapi.dev/api/planetssf/');
        console.log(res.data);
    } catch(e) {
        console.log('IN catch!', e);
    }

}

getPlanets();


