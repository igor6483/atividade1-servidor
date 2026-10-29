import express from "express"
const app = express()

const PORT = 3000

app.get("/",(req, res) => {
    res.send("boas-vindas à Central de Informações da Escola!")
})

app.get("/status",(req,res) => {
    res.json({status:'online',sprint: 1})
})

app.get("/escola",(req,res)=>{
    res.json({nome:'SENAI',cidade:'Valinhos',tipo:'escola tecnica'})
})

app.get("/cursos",(req,res) => {
    res.json([{id:1,nome:"Desenvolvimento de sistemas"},{id:2,nome:"Redes de computadores"},{id:3,nome:"Administração"}])
})

app.get("/professor",(req,res)=>{
    res.json([{nome:'Felipe',disciplina:"Desenvolvimento de sistemas"},{nome:'Carlos',disciplina:"Redes de computadores"},{nome:'Renato',disciplina:"Administração"}])
})

app.get("/ajuda",(req, res) => {
    res.send(`Rotas:
            /: pagina inicial \n
            /status: checar status do servidor \n
            /escola: informações da escola \n
            /cursos: cursos disponiveis \n
            /professor: nome e curso do professor \n`)
})

app.get("/requisicao",(req, res) => {
    res.send(`Solicitação foi recebida! metodo usado é: ${req.method}`)
})

app.listen(PORT,() => console.log(`Servidor em http://localhost:${PORT}`))