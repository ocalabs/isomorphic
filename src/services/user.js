import axios from 'axios'
import config from '../config'
import authService from './auth'

const create = params =>
  axios.post(`${config.baseUrl}/users`, params, {
    headers: {
      Authorization: authService.getAuthorization()
    }
  })

const read = () =>
  axios.get(`${config.baseUrl}/users`, {
    headers: {
      Authorization: authService.getAuthorization()
    }
  })

const update = params =>
  axios.put(`${config.baseUrl}/users`, params, {
    headers: {
      Authorization: authService.getAuthorization()
    }
  })

export default { create, read, update }
