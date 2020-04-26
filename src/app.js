const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
const geocode=require('./utils/geocode');
const forecast=require('./utils/forecast');

const publicDirectoryPath=path.join(__dirname,'../public');
const viewsPath=path.join(__dirname,'../templates/views');
const partialsPath=path.join(__dirname,'../templates/partials');

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('',(req,res)=>
{
res.render('index',{
    title: 'weather',
    name:'ahmed '
});
});

app.get('/about', (req,res)=>{
    res.render('about',{
        title: 'ABOUT',
        name:'ahmed yasser '
    });
    });

app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help',
        helpText:'this is some useful message'
    });
    });
    
app.get('/weather',(req,res)=>{

   if(!req.query.address)
   {
       return res.send({error:'please enter the address'});
   }
      
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{    
        if(error)
        {
            return res.send({error});
        }

        forecast(latitude,longitude,(error,forecastData)=>{
            if(error)
            {
                return res.send({error});
            }

            res.send({forecast:forecastData,
                location,
            });

        });
    });
    
 });

 app.get('/help/*',(req,res)=>{
    res.send('404 not found from help');
 });

 app.get('*',(req,res)=>{
    res.render('404',{
        name:'ahmed' ,
        title:'404 Not Found',
        errorMessage:'this is Error Message'
    });
 });
 
 
 

app.listen(3000,()=>{
    console.log('server is up to 3000');
});