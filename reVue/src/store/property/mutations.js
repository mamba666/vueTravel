export default {
    changeCity(state,city){
        console.log("mutations",state)
        state.city=city
        localStorage.city=city
    }
}