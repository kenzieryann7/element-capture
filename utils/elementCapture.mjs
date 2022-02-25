import fs from 'fs'
import request from 'request'
                                         
var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

export const save = async (req, res) => {
    const { url, savePath } = req.body
    
    download(url, savePath, function(){
        console.log('saved to: ', savePath)
        console.log('done');
        
    });
}
