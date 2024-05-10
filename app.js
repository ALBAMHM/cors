const express = require ('express')
const axios=require ('axios')
const cors=require('cors')
const app=express()
currentPage=1

app.use(cors())

app.get(`/characters/:characterName`, async(req,res)=>{
const characterName=req.params.characterName
const url=`https://rickandmortyapi.com/api/character/?name=${characterName}`
try{
    const response = await axios.get(url)
    const {name,status,species,gender,origin,image}=response.data.results[0]
    res.json({name,status,species,gender,origin,image})
} catch(ERROR){
    res.status(404).json({error:'objeto no encontrado'})

}
})
app.get(`/characters/`, async (req, res) => {
    try {
        
        let allCharacters = [];

        for (let i = 1; i <= 42; i++) {
            const url = `https://rickandmortyapi.com/api/character/?page=${i}`;
            const response = await axios.get(url);
            allCharacters = allCharacters.concat(response.data.results);
        }

        res.json({ allCharacters });
    } catch (error) {
        res.status(404).json({ error: 'objeto no encontrado' });
    }
});
  
app.listen(3000,()=>{
    console.log('express esta escuchando en el puerto http://localhost:3000/characters/')
})