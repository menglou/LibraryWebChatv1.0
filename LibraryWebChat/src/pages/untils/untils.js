import Taro from '@tarojs/taro'

const base_url="http://localhost:31449/api/"
export function TaroRequest({url,data,header = { 'Content-Type': 'application/json' }, method = 'GET', dataType = 'text', responseType = 'text' })
{
     let allurl=base_url+url;
    
    return Taro.request({
          url: allurl,
          data,
          header,
          method,
          dataType,
          responseType,
          fail:(result=>{
                 
          }),
          success:(res)=>{
              
               if(res.statusCode==200){
                   return JSON.parse(res.data)
               }
               else{
                   throw new error(res.data.message);
               }
          },
      });
}