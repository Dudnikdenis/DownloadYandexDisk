import axios from "axios";

const instance = axios.create({
    baseURL: 'https://cloud-api.yandex.net/',
    headers: {
      'Authorization': 'OAuth y0_AgAAAAA2Ijq0AADLWwAAAADoxMUNK34U9J4kT8iIDgmwk0hNxTs7ug4',        
      'Accept': 'application/json'
  }});

export const diskAPI = {


    async GetResources() //changingIsFetching, setAssortiment - я незнаю зачем эти параметры
    {
        let response = await instance.get("v1/disk/resources?path=disk:/Загрузки/");
        return response.data.name;
        
    },
    
    async GetDisk() //changingIsFetching, setAssortiment - я незнаю зачем эти параметры
    {
        let response = await instance.get("v1/disk");
        return response.data.system_folders;
        
    },

    async GetDisk() //changingIsFetching, setAssortiment - я незнаю зачем эти параметры
    {
        let response = await instance.get("v1/disk/resources/files");
        return response.data.items;
        
    }
    
}