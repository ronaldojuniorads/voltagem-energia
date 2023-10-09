
    //clasess pai

    //class get
    class getRequsition {
        constructor(url, params){
            this.url = url
            this.params = params
        }

        async makeRequisition(){
            let paramsKeyValue = Object.entries(this.params)
            let params = paramsKeyValue.map( param => param.join("=")).join("&")
            console.log(params);
            let url = `${this.url}?${params}`
            try{
                let response = await fetch(url)
                let data = await response.json() //para usar dados retornados da respostya do servidor é nescessario transforma a resposta e json
                return data
            }catch(error){ 
                return error
            }
            
        }
    }
        // class post
    class postRequisition{

    }
        //class put
    class putRequisition{

    }
        //class patch
    class patchRequisition{

    }
        //class delete
    class deleteRequisition{

    }
    //classes filhas

        //class techService
class ReqTechService extends getRequsition{
    constructor(url, params){
        super(url,params)
    }
    
    async organizeData(data){
            return data
    }
    }
class ReqServiceDescription extends getRequsition{
    constructor(url, params){
        super(url, params)
    }
}

class ReqAdmin extends getRequsition{
    constructor(url, params){
        super(url, params)
    }
}

export {ReqTechService, ReqServiceDescription, ReqAdmin}