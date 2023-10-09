import {ReqServiceDescription} from "./request.js";
import {FrontServiceDescription} from "./dynamic-front.js" 
import {login} from "./login.js"
import { techServiceRoute } from "./rotas.js";


const urlParams = new URLSearchParams(window.location.search)
const idService = {idService: urlParams.get("idService")}
const boxHtml = document.querySelector("#main-service-description")

const route = techServiceRoute.serviceData
const page = "/tech/service"

async function requestServiceDescription(route, idService){
    const RSD = new ReqServiceDescription(route, idService)
    const data = await RSD.makeRequisition()
    return data
}

function createserviceDescription(data, page, boxHtml){
    const FSD = new FrontServiceDescription(data, page, boxHtml)
    const htmlFragment = FSD.createHtml()
    FSD.addHtml(htmlFragment)
}

async function main(route, idService, page, ){
    const data = await requestServiceDescription(route, idService, page)
    createserviceDescription(data, page, boxHtml)
}

main(route, idService, page)

