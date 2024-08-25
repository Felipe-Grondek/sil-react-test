import axiosClass from 'axios'

// Use to deployed database
export const deployURL = 'https://sil-react-test-db.vercel.app/'

// Use to local requests
export const localURL = 'http://localhost:3000'

export const axios = axiosClass.create({
  baseURL: deployURL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})
