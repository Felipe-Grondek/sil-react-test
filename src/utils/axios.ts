import axiosClass from 'axios'

// Use to deployed database
// export const deployURL = 'https://sil-cards-test-database.vercel.app'

// Use to local requests
export const localURL = 'http://localhost:3000'

export const axios = axiosClass.create({
  baseURL: localURL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})
