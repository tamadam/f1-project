import axios, { CanceledError }  from "axios"

export default axios.create({
    baseURL: "https://ergast.com/api/f1"
})

export {CanceledError}