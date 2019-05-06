/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description User controller.
 */

import { Plugins } from '@capacitor/core'
import axios from 'axios'
import config from '../config'
import authService from './auth'

const { Geolocation } = Plugins

const save = params =>
  axios.post(`${config.baseUrl}/geolocation`, params, {
    headers: {
      Authorization: authService.getAuthorization()
    }
  })

const getFromGPS = () =>
  new Promise(async (resolve, reject) => {
    try {
      const coordinates = await Geolocation.getCurrentPosition({
        maximumAge: 60000,
        timeout: 5000,
        enableHighAccuracy: true
      })
      resolve(coordinates)
    } catch (e) {
      reject(e)
    }
  })

const keepTracking = () => {
  setInterval(async () => {
    console.log('Here I am, running in background...')
    const position = await getFromGPS()
    console.log(position)
    const response = await save({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
    console.log(response)
  }, 60000)
}

export default { getFromGPS, save, keepTracking }
