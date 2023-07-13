const apiUrl = 'https://api.waifu.im/search';  // Replace with the actual API endpoint URL
const params = {
  included_tags: 'maid',
  height: '>=2000'
};

const queryParams = new URLSearchParams(params);
const requestUrl = `${apiUrl}?${queryParams}`;

fetch(requestUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed with status code: ' + response.status);
    }
  })
  .then(data => {
    // Process the response data as needed
    console.log(data);
    
  })
  .catch(error => {
    console.error('An error occurred:', error.message);
  });

  const imgc= 'https://api.waifu.im/image_id'
  let imagecard=new Image();
  imagecard.src = imgc
  imagecard.onload = function() {
    // 5. Access the <img> element in your HTML
    const imgElement = document.getElementsByClassName("card"); // Replace 'yourImgId' with the actual ID of your <img> element
  
    // 6. Set the src attribute of the <img> element
    imgElement.src = img.src;
  };