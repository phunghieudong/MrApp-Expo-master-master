import instance, { getSecureToken } from "../instance";
import   axios  from 'axios';

export const getPolicy = async (  ) => {
  try {
    console.log('------------------------------------------------------------------------'); 
    // const res = await instance.get("/app-policy" );

    
    
    // return res.data;

    const token = await getSecureToken();
 
    var config:any = {
      method: 'get',
      url: 'https://mrapp-admin.monamedia.net/api/app-policy',
      headers: { 
        'Authorization': "Bearer " + token  
      }
    };

    console.log('-- config: ',config);
    

    axios.get(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        return JSON.stringify(response.data);
      })
      .catch(function (error) {
        console.log('cacccccccccccccccccccccccccccccccccccc',error);
        return error
      });


  } catch (error) {
    
    console.log('----error: ',error);
    return Promise.reject(error);
    
  }
  
};

