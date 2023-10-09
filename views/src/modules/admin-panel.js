import {ReqAdmin} from "./request.js";
import {FrontAdmin} from "./dynamic-front.js"  
const data = [
    {
        title: "motor do atacadao",
        customers: "atacadao",
        problem: "peca n34 danificada",
        id: "0001",
        responsible: [{name: "junior"},{name: "joao"}, {name: "gabriel"}]
    },
    {
        title: "motor do atacadao",
        customers: "atacadao",
        problem: "peca n34 danificada",
        id: "0001",
        responsible: [{name: "junior"},{name: "joao"}, {name: "gabriel"}]
    },
    {
        title: "motor do atacadao",
        customers: "atacadao",
        problem: "peca n34 danificada",
        id: "0001",
        responsible: [{name: "junior"},{name: "joao"}, {name: "gabriel"}]
    },
    {
        title: "motor do atacadao",
        customers: "atacadao",
        problem: "peca n34 danificada",
        id: "0001",
        responsible: [{name: "junior"},{name: "joao"}, {name: "gabriel"}]
    }
]
const boxHtml= document.querySelector("#admin-panel .services")

async function requestData(){
    const RQS = new ReqAdmin("/admin/data", {typeData: "geral"})
    const data = await RQS.makeRequisition()
    console.log(data);
    return data
}
async function teste(){
    const FTA = new FrontAdmin(data, "admin", boxHtml) 
    const html =  await FTA.createHtml()
    console.log(html);
    FTA.addHtml(html)
}
teste()



