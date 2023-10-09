const moduleRoutes = (name, route, type)=>{
    class Routes{
        constructor(name, route, type){
            this.name = name
            this.route = route
            this.type = type
        }


    }

    
    const name = new Routes(name, route, type)
    return name
    // const home = new Routes("home", "home", "get")
    // const admLogin = new Routes("admLogin", "admlogin", "post")
    // const techLogin = new Routes("techLogin", "techlogin", "post")
}

export default moduleRoutes


