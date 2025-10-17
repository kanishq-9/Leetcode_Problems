const UUID = require("uuid");
class Shortner {
    url="";
    baseURL = "https://shortner.com/";
    constructor(url) {
    this.url = url;
    this.map = new Map();
    }
    simpleURL(){
        const length = String(this.map.size);
        this.map.set(length,this.url);
        return this.baseURL+length;
    }
    simpleURLWithUUID(){
        const uuid = UUID.v1();
        this.map.set(uuid,this.url);
        return this.baseURL+uuid;
    }
    simpleURLWithDate(){
        const date = String(Date.now());
        this.map.set(date,this.url);
        return this.baseURL+date;
    }

    getMyString(shortUrl){
        const mapped = shortUrl.split("/").splice(-1);
        return this.map.get(mapped[0]);
    }
}
const url = "https://www.google.com/hidhqjihdiqhwidLKJSLj";
const urlShortner = new Shortner(url);
const shortUrl = urlShortner.simpleURL();
const shortUrlUUID = urlShortner.simpleURLWithUUID();
const shortUrlDate = urlShortner.simpleURLWithDate();
console.log("myShortUrl"+shortUrl);
console.log("myShortUrl"+shortUrlUUID);
console.log("myShortUrl"+shortUrlDate);
console.log("myLongUrl"+urlShortner.getMyString(shortUrl));
console.log("myLongUrl"+urlShortner.getMyString(shortUrlUUID));
console.log("myLongUrl"+urlShortner.getMyString(shortUrlDate));