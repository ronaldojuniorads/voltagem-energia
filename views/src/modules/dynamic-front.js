
//classe pai
class DynamicFront {
    constructor(data,  page, boxHtml){
        this.data = data
        this.page = page
        this.boxHtml = boxHtml
    }

    addHtml(htmlFragment){
        this.boxHtml.append(htmlFragment)
    }
}

//classe front dos servicos referente ao tech user

class FrontTechSevice extends DynamicFront{
    constructor(data, page, elementHtml){
        super(data, page, elementHtml)
    }
        
createHtml(){
let htmlFragment = new DocumentFragment()
try {
    //espera se apenas os servicos
    this.data.forEach((service) => {
    //create //***obs*** AGRUPAR ESSES ELEMENTOS HTML EM OBJETOS {DIV: DOCUMENT.CREATEELEMENT DIV}

    //service
    let divService = document.createElement("div")

        //title and status
        let divTitleAndStatus = document.createElement("div")
            //title
            let divTitleAndStatusTitle = document.createElement("div")
                //h1
                let h1TitleService = document.createElement("h1")
                //div icon
                let divDescriptionIcon = document.createElement("a")
                    //img icon
                    let imgDescriptionIcon = document.createElement("img")
            //status
            let divTitleAndStatusStatus = document.createElement("div")
                //span description
                let spanServiceStatus = document.createElement("span")
            
        //service descriptions  
        let divServiceDescription = document.createElement("div")
            let pDescription = document.createElement("p")

//atributos 

    //service
    divService.setAttribute("class", "service") 

        //title and status
        divTitleAndStatus.setAttribute("class", "title-and-status")
            //title
            divTitleAndStatusTitle.setAttribute("class", "title")
                //descriptions icon
                divDescriptionIcon.setAttribute("class", "description-icon")
                divDescriptionIcon.setAttribute("href", `/tech/service?idService=${service.idService}`)
                    //img icon
                    imgDescriptionIcon.setAttribute("src", "../icones/description-icon.svg")
            //status
            divTitleAndStatusStatus.setAttribute("class", "status")

        //service description
        divServiceDescription.setAttribute("class", "service-description")
//conteudo //loop por cada servico do data 

    
    //title 
        //h1
        h1TitleService.innerHTML = service.title
        //
    //status
        //span
        spanServiceStatus.innerHTML = service.status

    //service description
        //p
        pDescription.innerHTML = service.description

//encapsulando
    //title >> <title> h1, descriptiuonIcon <title>
        //h1
        divTitleAndStatusTitle.append(h1TitleService)
        //description icon >> <descriptionIcon> imgIcon <descriptionIcon>
        divTitleAndStatusTitle.append(divDescriptionIcon)
            //img icon
            divDescriptionIcon.append(imgDescriptionIcon) 
    //status >> <status> span <staus>
    divTitleAndStatusStatus.append(spanServiceStatus) 

    //title and status >> <titleAndStatus> title, staus <titleAndStatus>
    divTitleAndStatus.append(divTitleAndStatusTitle, divTitleAndStatusStatus)

    //service description <serviceDescription> pDescription <serviceDescription>
    divServiceDescription.append(pDescription)

    //service <service> titleAndStatus, ServiceDescription <service>
    divService.append(divTitleAndStatus, divServiceDescription)

    htmlFragment.append(divService)
    
    //eventos //esconder todas as descricoes antes de exibir uma
    //description icon
    // imgDescriptionIcon.addEventListener("click", ()=>{

    //     divServiceDescription.classList.toggle("show-description")


    // })
})

            return htmlFragment
            } catch (error) {
                return error
            }
            
    }
}
    
//classse front da descricao completa do servico especifico
class FrontServiceDescription extends DynamicFront{
    constructor(data, page, boxHtml){
        super(data, page, boxHtml)
    }
    createHtml(){
        let htmlFragment = new DocumentFragment()
        const fullDescription = this.data.fullDescription

        const html = `
            <div class="container-service-full-description">
                <div class="title">
                    <h1>${fullDescription.title}</h1>
                </div>
                <div class="cliente"> 
                        <span>Cliente</span>
                        <span>${fullDescription.cliente}</span> 
                </div>
                <div class="endereco"> 
                        <span>Endereço</span>
                        <span>${fullDescription.endereco}</span>
                    
                </div>
                <div class="problema">
                     
                        <span>Problema</span> 
                        <span>${fullDescription.problema}</span>
                    
                </div>
                <div class="produto-defeituoso">
                     
                        <span>produto-defeituoso</span> 
                        <span>${fullDescription.produtoDefeituoso}</span>
                    
                </div>
                <div class="horas-previstas">
                     
                        <span>Horas previstas para solução do problema</span> 
                        <span>${fullDescription.horasPrevistas}</span>
                     
                </div>
                <div class="custo-servico">
                    
                        <span>Custo do serviço</span>  
                        <span>R$${fullDescription.custoServico}</span>
                     
                </div>
                <div class="status-full-description">
                     
                        <span>status</span>
                        <span>${fullDescription.status}</span>
                   
                </div>
                <div class="id-service">
                    <span>id service</span> 
                    <span> ${fullDescription.idService}</span>
                </div>
                <div class="observacoes">
                    <span>Observacões</span>
                    <p>
                        ${fullDescription.observacoes}
                    </p>
                </div>
            </div>
            
            `
            htmlFragment.append(html)
            return html
    }
    addHtml(html){
        this.boxHtml.innerHTML = html
    }
}

//front admin

class FrontAdmin extends DynamicFront{
    constructor(data,page, boxHtml, chartType){
        super(data, page, boxHtml)
        this.chartType = chartType
    }

    createHtml(){
        let htmlFragment = document.createDocumentFragment()
        this.data.forEach((service) =>{
            const html = `
            <div class="service">
                <div class="service-title"><span>${service.title}</span></div>
                <div class="service-customer"><span>${service.customer}</span></div>
                <div class="service-problem"><span>${service.problem}</span></div>
                <div class="service-responsible">${service.responsible.map(tech => tech).join(",")}</div>
            </div>`
            htmlFragment.append(html)
        })
        return htmlFragment
        
    }
    addHtml(htmlFragment){
        this.boxHtml.append(htmlFragment)
    }


}
 //export 
export {FrontTechSevice, FrontServiceDescription, FrontAdmin}