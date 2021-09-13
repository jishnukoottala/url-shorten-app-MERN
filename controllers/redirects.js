
const Url = require("../models/url");

exports.redirect = async  (req,res, next)=>{
    try {

        const urlObj = await Url.findOne({ code: req.params.code})
        
        if(urlObj){
            urlObj.count = urlObj.count + 1;
            console.log({urlObj})
            await urlObj.save();
        return res.redirect(urlObj.url)
        }else{
            return res.status(404).json({
                success: false,
                error: 'Not valid'
              });
        }
    
      } catch (err) {
       
          return res.status(500).json({
            success: false,
            error: 'Server Error'+err.toString()
          });
        }
      
}





