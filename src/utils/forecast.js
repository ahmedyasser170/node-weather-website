

const request = require("request");

const forecast=(lat,long,callback)=>{
    const url='http://api.openweathermap.org/data/2.5/forecast?units=metric&lat='+lat+'&lon='+long+'&APPID=bf6a7a9312de5f4062984dd0f7bbd245';
    request({url: url,json:true},(error,response)=>{
    if(error)
    {
        callback('eror in connecting',undefined);   
    }
    else if(response.body.error){
        callback('eror in response',undefined);   
 
    }
    else{
        const{temp}=response.body.list[0].main;
        callback(undefined,temp);
    }
    });
  
    
};
module.exports=forecast;

// request({url: url},(error,response)=>{
//     if(error)
//     {
//         console.log('eror in connecting');    
//     }
//     else if(response.body.error){
//         console.log('error in response');   
//     }
//     else{
//         const data =JSON.parse(response.body);
//     console.log(data.list[0]);
// }
// });
