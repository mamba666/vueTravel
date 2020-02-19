// 在使用localStorage时，为了防止兼容使用try catch
let DEFAULT_CITY="北京"
try {
    if(localStorage.city){
        DEFAULT_CITY=localStorage.city
    }
} catch (error) {
    
}

export default {
    city:DEFAULT_CITY
}