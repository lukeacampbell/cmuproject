// Get the charity ID from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const charityId = urlParams.get('id');

// Fetch the charity data from the JSON file
fetch('charities.json')
  .then(response => response.json())
  .then(data => {
    const charity = data.find(c => c.id == charityId);
    
    if (charity) {
      // Update the page with the charity's data
      document.getElementById('charity-name').textContent = charity.name;
      document.getElementById('charity-description').textContent = charity.description;
      document.getElementById('xrp-address').textContent = charity.xrp_address;
      document.getElementById('donation-link').href = charity.donation_link;
    } else {
      // If charity not found, show an error
      document.getElementById('charity-name').textContent = 'Charity not found';
      document.getElementById('charity-description').textContent = 'We could not find the charity you were looking for.';
    }
  })
  .catch(error => {
    console.error('Error loading charity data:', error);
  });
