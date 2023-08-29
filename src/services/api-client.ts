import axios, { CanceledError }  from "axios"

export default axios.create({
    baseURL: "http://ergast.com/api/f1"
})

export {CanceledError}