import {ReqTechService} from "./request.js";
import {FrontTechSevice} from "./dynamic-front.js" 
import {login} from "./login.js"
import { techServiceRoute } from "./rotas.js";


const boxHtml = document.querySelector("#tech-services")
const userLogin = login.user
const route = techServiceRoute.servicesData
const page = "services"
async function requestTechService(url, user){
    const RTS = new ReqTechService(url, user) 
    const response = await RTS.makeRequisition()
    return response 
}

function createFrontTechService(data, page, boxHtml){
        const FTS = new FrontTechSevice(data, page, boxHtml)
        const htmlFragment = FTS.createHtml()
        FTS.addHtml(htmlFragment)
}

async function main(route, userLogin, page){
    const data = await requestTechService(route, userLogin) 
    createFrontTechService(data, page, boxHtml)
}

main(route, userLogin, page)



