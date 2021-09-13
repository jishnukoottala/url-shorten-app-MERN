const Url = require("../models/url");
const isUrl = require("is-valid-http-url");



exports.addUrl = async  (req,res, next)=>{
    try {
        
        const urlObj = req.body
        console.log("urlobject ",urlObj)

        const { url } = urlObj
        const baseUrl = process.env.BASEURI
     
        if(!isUrl(baseUrl)){
            return res.status(401).json({
                success: false,
                error: 'Invalid base url'
              })
        }
        if(isUrl(url)){
            const newUrl = await Url.create({url});
            console.log('url is ',url)
            const shortUrl = baseUrl + "/" + newUrl.code 
            newUrl.shortUrl = shortUrl
            await newUrl.save()


            return res.status(201).json({
                success: true,
                data: newUrl
              }); 


        }else{
            return res.status(401).json({
                success: false,
                error: 'Invalid url entered'
              });
        }
    
       
      } catch (err) {
        if(err.name === 'ValidationError') {
          const messages = Object.values(err.errors).map(val => val.message);
    
          return res.status(400).json({
            success: false,
            error: messages
          });
        } else {
          return res.status(500).json({
            success: false,
            error: 'Server Error'+err.toString()
          });
        }
      }
}






exports.getUrl = async (req,res,next)=> {
    try {

     
      
        const urls = await Url.find();
        if(!urls){
            return res.status(204).json({
                success:true,
                data:[],
                count:0
            })
        }
    
        return res.status(200).json({
          success: true,
          count: urls.length,
          data: urls
        });
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: 'Server Error'+err.toString()
        });
      }
}