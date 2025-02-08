// Fetch the charities data from the JSON file
fetch('charities.json')
  .then(response => response.json())
  .then(data => {
    const charityList = document.getElementById('charity-list');
    
    data.forEach(charity => {
      const charityCard = document.createElement('div');
      charityCard.classList.add('charity-card');
      
      charityCard.innerHTML = `
        <img src="${charity.image}" alt="${charity.name}" class="charity-image">
        <h3>${charity.name}</h3>
        <p>${charity.description}</p>
        <a href="donate.html?id=${charity.id}" class="donation-button">Donate with XRP</a>
      `;
      
      charityList.appendChild(charityCard);
    });
  })
  .catch(error => {
    console.error('Error loading charity data:', error);
  });
