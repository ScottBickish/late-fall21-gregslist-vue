import { AppState } from "../AppState"
import { House } from "../Models/House"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class HousesService{
async getAll(houseQuery = ""){
  const res = await api.get('api/houses'+ houseQuery)
  logger.log(res.data)
  AppState.houses = res.data.map(h => new House(h))
}
async create(data){
  // debugger
  const res = await api.post('api/houses', data)
  AppState.houses.push(new House(res.data))
}
}

export const housesService = new HousesService()