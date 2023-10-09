import express from "express";

 
const app = express()
app.set("view engine", "ejs")
app.set("views", "./views")
app.use(express.static("views"))
app.use(express.json())


 
app.get("/", (req,res)=>{
    res.render("./pages/index.ejs")
})
app.get("/tech", (req, res)=>{ 
    res.render("./pages/services.ejs")
})

//respostas tech service
app.get("/tech/services", (req,res) => {
    res.render("./pages/services.ejs")

})
 
//retorna dados do servicos do
app.get("/tech/services/data", (req,res) => {
    console.log("requisitado"); 
    console.log(req.query); 
    //busca no banco de dados registros do techUser
        //....

    //retorna um objeto contendo dados do tech, como servicos e historico dele
        //...
    const data = [
        {
            title: "concerto de motor modelo cd35",
            description: "servico previsto para dia 13/09/2023 as 15:00. material nescessario: solda, chave alguma coisa, fios e etc...",
            status: "pendente",
            idService: 1
        },
        {
            title: "concerto de motor modelo cd35",
            description: "servico previsto para dia 13/09/2023 as 15:00. material nescessario: solda, chave alguma coisa, fios e etc...",
            status: "pendente",
            idService: 2
        },
        {
            title: "concerto de motor modelo cd35",
            description: "servico previsto para dia 13/09/2023 as 15:00. material nescessario: solda, chave alguma coisa, fios e etc...",
            status: "pendente",
            idService: 3

        },
        {
            title: "concerto de motor modelo cd35",
            description: "servico previsto para dia 13/09/2023 as 15:00. material nescessario: solda, chave alguma coisa, fios e etc...",
            status: "pendente",
            idService: 4
        }
    ]
    res.send(data)

    
})


app.get("/tech/service", (req, res)=>{
    console.log("servico requisitado");
    console.log(req.query);
    res.render("./pages/service-description.ejs")
})
app.get("/tech/service/data", (req, res)=>{
    const data = 
    {
        title: "concerto de motor modelo cd35",
        description: "servico previsto para dia 13/09/2023 as 15:00. material nescessario: solda, chave alguma coisa, fios e etc...",
        status: "pendente",
        idService: 1,
        fullDescription: {
            title: "concerto de motor modelo cd35",
            endereco: "av brigadeiro eduardo gomes, mecejana, 23",
            cliente: "detran",
            problema: "manutencao mo gerador de energia",
            produtoDefeituoso: "motor modelo cd35",
            horasPrevistas: "7:00",
            custoServico: "5000",
            status: "pedente",
            observacoes: "o produto encontra-se deteriorado devido ao tempo de uso. Recomenda-se a troca de todos os materias originais. Eventualmente, o motor sera incapaz de suprir energia nescesaria por pelo menos 7 horas. Aos tecnicos responsaveis recomenda-se uso das ferramentas tal, tal, talo produto encontra-se deteriorado devido ao tempo de uso. Recomenda-se a troca de todos os materias originais. Eventualmente, o motor sera incapaz de suprir energia nescesaria por pelo menos 7 horas. Aos tecnicos responsaveis recomenda-se uso das ferramentas tal, tal, talo produto encontra-se deteriorado devido ao tempo de uso. Recomenda-se a troca de todos os materias originais. Eventualmente, o motor sera incapaz de suprir energia nescesaria por pelo menos 7 horas. Aos tecnicos responsaveis recomenda-se uso das ferramentas tal, tal, talo produto encontra-se deteriorado devido ao tempo de uso. Recomenda-se a troca de todos os materias originais. Eventualmente, o motor sera incapaz de suprir energia nescesaria por pelo menos 7 horas. Aos tecnicos responsaveis recomenda-se uso das ferramentas tal, tal, talo produto encontra-se deteriorado devido ao tempo de uso. Recomenda-se a troca de todos os materias originais. Eventualmente, o motor sera incapaz de suprir energia nescesaria por pelo menos 7 horas. Aos tecnicos responsaveis recomenda-se uso das ferramentas tal, tal, talo produto encontra-se deteriorado devido ao tempo de uso. Recomenda-se a troca de todos os materias originais. Eventualmente, o motor sera incapaz de suprir energia nescesaria por pelo menos 7 horas. Aos tecnicos responsaveis recomenda-se uso das ferramentas tal, tal, talo produto encontra-se deteriorado devido ao tempo de uso. Recomenda-se a troca de todos os materias originais. Eventualmente, o motor sera incapaz de suprir energia nescesaria por pelo menos 7 horas. Aos tecnicos responsaveis recomenda-se uso das ferramentas tal, tal, talo produto encontra-se deteriorado devido ao tempo de uso. Recomenda-se a troca de todos os materias originais. Eventualmente, o motor sera incapaz de suprir energia nescesaria por pelo menos 7 horas. Aos tecnicos responsaveis recomenda-se uso das ferramentas tal, tal, talo produto encontra-se deteriorado devido ao tempo de uso. Recomenda-se a troca de todos os materias originais. Eventualmente, o motor sera incapaz de suprir energia nescesaria por pelo menos 7 horas. Aos tecnicos responsaveis recomenda-se uso das ferramentas tal, tal, tal",
            idService: req.query.idService
        }

    }
    console.log(req.query);
    res.send(data)
})



//rotas report

app.get("/tech/report", (req, res)=>{
    res.render("./pages/report.ejs")
})

//rotas admim

app.get("/admin", (req,res)=>{
    res.render("./pages/admin.ejs")
})

app.get("/admin/data", (req, res)=>{
    let services = [
        {
            title: "motor do atacadao",
            customers: "atacadao",
            problem: "peca n34 danificada",
            id: "0001",
            responsible: [{name: "junior"},{name: "joao"}, {name: "gabriel"}]
        }
    ]
    res.send({services: services})
})

app.listen(7080) 
