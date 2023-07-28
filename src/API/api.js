import axios from "axios";

const instance = axios.create({
    baseURL: 'https://cloud-api.yandex.net/',
    headers: {
      'Authorization': 'OAuth нужно укозать свой токен yandex',        
      'Accept': 'application/json'
  }});

export const diskAPI = {


    async GetResources(path) 
    {
        let response = await instance.get(`v1/disk/resources?path=${path}&limit=100`);
        return response.data._embedded.items;
        
    },
    
    async GetDisk() 
    {
        let response = await instance.get("v1/disk");
        return response.data.system_folders;
        
    }
};
