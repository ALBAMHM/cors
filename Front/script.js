function personajeInfo(){
    const personajeInput=document.getElementById("personajeName")
    const personajeInfo=document.getElementById("personajeInfo")

    const personajeName =personajeInput.value.toLowerCase()

    fetch (`http://localhost:3000/characters/${personajeName}`)
        .then(response => response.json())
        .then(data=>{
            const {name,status,species,gender,origin,image}=data
            personajeInfo.innerHTML=`
            <h2>${name}</h2>
            <img src="${image}" alt="${name}"/>
            <p>Estado: ${status}</p>
            <p>Especie: ${species}</p>
            <p>Género: ${gender}</p>
            <p>Origen: ${origin}</p>
            `
        })
        .catch(error=>personajeInfo.innerHTML=`<p>Imposible acceder al personaje</p>`)
}