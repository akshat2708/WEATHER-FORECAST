const fs=require('fs');
const http=require('http');
const requests=require("requests");




const readfo=fs.readFileSync("home.html","utf-8");
const replaceval=(tempval,orgval)=>{
  let temperature=tempval.replace(" {%temp%}",orgval.main.temp);
  temperature=temperature.replace("{%mintemp%}",orgval.main.temp_min);
  temperature=temperature.replace("{%maxtemp%}",orgval.main.temp_max);
  temperature=temperature.replace("{%location%}",orgval.name);
  temperature=temperature.replace("{%country%}",orgval.sys.country);
  return temperature;

};
const server=http.createServer((req,res)=>{
    if(req.url="/"){
        requests('https://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=886705b4c1182eb1c69f28eb8c520e20')
        .on('data',  (chunk)=> {
            const obj=JSON.parse(chunk)
            const arr=[obj]
           const realt=arr.map((val)=>replaceval(readfo,val)).join("");
           
        
            
           res.write(realt);
         
        })
        .on('end', (err)=> {
          if (err) return console.log('connection closed due to errors', err);
         res.end();
        });
    }
})
server.listen(5000,()=>{
    console.log("working properly")
})
