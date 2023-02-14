const BASE_URL = '/'

export default async function sendRequest(url, method='GET', payload=null) {
    const options = { method }
    if (payload) {
        // set headers for content if there's a payload
        options.headers = { 'Content-Type': 'application/json' }
        options.body = JSON.stringify(payload)
    }
    // if there's a token, include it in the request
    // const token = getToken()
    // if(token) {
    //     // make sure we have headers on our options
    //     options.headers = options.headers || {}
    //     // add in our token with an Auth header
    //     options.headers.Authorization = `Bearer ${token}`
    // }
    const res = await fetch(url, options)
    if(res.ok) {
        return res.json()
    } else {
        throw new Error('Bad Request')
    }
}

export async function createNote() {

}