console.log('Works! 🙌')

// Check if serverless functions are working
fetch('/api/hello')
  .then(response => response.json())
  .then(data => {
    console.log(data.message)
  })
