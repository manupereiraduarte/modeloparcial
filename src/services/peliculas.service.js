import axios from 'axios'

const URL = "http://localhost:3001/api/peliculas"

async function getByFilters(filter){
    let apiUrl = (filter)? URL +'?titulo=' + filter : URL
    const res = await fetch(apiUrl,{method: 'GET'})

    return await res.json()
}

async function save(data){    
    /*console.log(data)
   
    axios.put(URL, data)
    axion.POST(URL, {params: {id: data.id}})*/
    console.log(data.Id)
    let res = null
    if(data.Id === undefined)
        res = await fetch(URL,{method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)})
    else    
        res = await fetch(URL,{method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)})
    return await res.json()
}

async function remove(id){
    const res = await fetch(URL+'/'+id,{method: 'DELETE'})
    return await res.json()
}


export default {getByFilters, save, remove}