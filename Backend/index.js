const axios = require('axios');

// Set up API credentials
const apiKey = 'eyJraWQiOiJHNzFrRHI0VzZKTTBSREJUam1mU19WMlNhbVl2SkFrUzRqbGVQc2kzaFdrIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlBMaFNCUUhBTjVWZVh3S05CVDc0Qmd6R1NGa2VpSmF6dmRicDJaNDVOa0EiLCJpc3MiOiJodHRwczovL2xvZ2luLmd1ZXN0eS5jb20vb2F1dGgyL2F1czFwOHFyaDUzQ2NRVEk5NWQ3IiwiYXVkIjoiaHR0cHM6Ly9vcGVuLWFwaS5ndWVzdHkuY29tIiwiaWF0IjoxNjc4ODk2NjczLCJleHAiOjE2Nzg5ODMwNzMsImNpZCI6IjBvYTZienJ0eXRuV2gzM2xMNWQ3Iiwic2NwIjpbIm9wZW4tYXBpIl0sInJlcXVlc3RlciI6IkVYVEVSTkFMIiwiYWNjb3VudElkIjoiNjMwNzYxN2E0YTg0ZjQwMDMzYmQ2Yzg1Iiwic3ViIjoiMG9hNmJ6cnR5dG5XaDMzbEw1ZDciLCJ1c2VyUm9sZXMiOlt7InJvbGVJZCI6eyJwZXJtaXNzaW9ucyI6WyJhZG1pbiJdfX1dLCJyb2xlIjoidXNlciIsImlhbSI6InYzIiwiYWNjb3VudE5hbWUiOiJLdW5kYSBIb3VzZSIsIm5hbWUiOiJLdW5kYSBIb3VzZSJ9.irEtXCw6NW-6q4YHDiSTZSjqXyr1djesrY2vKqHg70Uf-ZacWfByeLWKQTDGSN0oSFK3WMlb_1Q0US44RladlYXFEWeX6V4gIAPCtfHF_NxyvwjOHBCRD9ZaVHBjz8P79SlgRbbCU4xvNqRhIi6SR_ta854701b0sabO1yKT1iY6ekDMP_AlWiknWqv9HtwsW6iZm7ZsG3df4npAAT8gLCBpI1LrCnnPV_TL-E4atCD2kTpGKuTHrXjHnm1lyBRHq0ZaE4pUqCcbA4NLaFOlS0bd-kB5KzMQdQUBCQ0elSnrcIXA6g9lj5yoxv5vIc6guevyt2p_JsplCbrCmPEAcA';
const apiSecret = 'YOUR_API_SECRET';

// Authenticate with Guesty API to get access token
axios.post('https://api.guesty.com/api/v2/auth', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`
  }
}).then(response => {
  const accessToken = response.data.access_token;

  // Check room availability on specific date
  const date = '2023-04-01';
  axios.get(`https://api.guesty.com/api/v2/listings?availabilityFrom=${date}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  }).then(response => {
    const listings = response.data.listings;
    console.log(listings);
  }).catch(error => {
    console.error(error);
  });
}).catch(error => {
  console.error(error);
});
