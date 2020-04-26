const request = require("request");


const geocode = (address,callback) => {
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiYWhtZWR5YXNzZXIxNyIsImEiOiJjazh6ZmtxNmEwMzdnM2VtajBrYXB6a3R2In0.ug5-0n1CJpeJAel00WV33w";
      request({url,json:true},(error,response)=>{
      if(error)
      {
       callback ('error in connecting',undefined);
      }
      else if(response.body.features.length===0)
      {
       callback ('error in connecting with response from geoCode',undefined);
    
      }
      else
      {
       callback(undefined,
           {latitude:response.body.features[0].center[1],
            longitude:response.body.features[0].center[0],
            location:response.body.features[0].place_name})      
      }
      
   });
      };
   
      module.exports=geocode;