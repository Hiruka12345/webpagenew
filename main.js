document.getElementById('toggleNavButton').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'none' || navLinks.style.display === '') {
      navLinks.style.display = 'block';
    } else {
      navLinks.style.display = 'none';
    }
  });
  
  
  
  const MANUFACTURER_NAME = "Badminton committe"; // Replace with your actual manufacturer name
      function calculateTotal() {
        const ticketType = document.getElementById('ticketType').value;
        const numChildren = parseInt(document.getElementById('numChildren').value) || 0;
        const numAdults = parseInt(document.getElementById('numAdults').value) || 0;
        const duration = parseInt(document.getElementById('duration').value) || 0;
        const foodTokens = parseInt(document.getElementById('foodTokens').value) || 0;
        const rackets = parseInt(document.getElementById('rackets').value) || 0;
  
        let totalCost = 0;
  
        totalCost += numChildren * 350; // Example cost calculation for children
        totalCost += numAdults * 500; // Example cost calculation for adults
        totalCost += (duration / 60) * 250; // Example cost calculation for duration
        totalCost += foodTokens * 500; // Example cost calculation for food tokens
        totalCost += rackets * 1000; // Example cost calculation for rackets
  
        document.getElementById('totalCost').innerText = totalCost + ' LKR';
  
        return totalCost;
      }
      function addToOrder() {
    const ticketType = document.getElementById('ticketType').value;
    const numChildren = document.getElementById('numChildren').value;
    const numAdults = document.getElementById('numAdults').value;
    const duration = document.getElementById('duration').value;
    const foodTokens = document.getElementById('foodTokens').value;
    const rackets = document.getElementById('rackets').value;
  
    const currentOrder = `
        <strong>Ticket Type:</strong> ${ticketType}<br>
        <strong>Children:</strong> ${numChildren}<br>
        <strong>Adults:</strong> ${numAdults}<br>
        <strong>Duration:</strong> ${duration} mins<br>
        <strong>Food Tokens:</strong> ${foodTokens}<br>
        <strong>Rackets:</strong> ${rackets}<br><br>
    `;
  
    const totalCost = calculateTotal();
  
    let overallOrderElement = document.getElementById('overallOrder');
    let overallCostElement = document.getElementById('overallCost');
  
    // Update the overall cost element
    overallCostElement.innerText = totalCost + ' LKR';
  
    // If the overall order is empty, set the current order directly
    if (overallOrderElement.innerText === 'No overall order') {
        overallOrderElement.innerHTML = currentOrder;
    } else {
        overallOrderElement.innerHTML += currentOrder; // Append the current order
    }
  
    // Store the current order, overall order, and overall cost in localStorage
    localStorage.setItem('currentOrder', currentOrder);
    localStorage.setItem('overallOrder', overallOrderElement.innerHTML);
    localStorage.setItem('overallCost', totalCost + ' LKR');
  
    // Display the total cost
    document.getElementById('totalCost').innerText = '0 LKR';
  }
  
  
  
  function placeOrder() {
    const overallCost = localStorage.getItem('overallCost');
    
    // Display the overall cost without ' LKR'
    document.getElementById('overallCost').innerText = overallCost + ' LKR';
  
    alert(`Thank you for your custom reservation with ${MANUFACTURER_NAME}!`);
  
  
    document.getElementById('overallOrder').innerText = 'No overall order';
    document.getElementById('overallCost').innerText = '0 LKR';
  
  }
  
  
  
  
  
  function saveFormDataToLocalStorage() {
        const ticketType = document.getElementById('ticketType').value;
        const numChildren = document.getElementById('numChildren').value;
        const numAdults = document.getElementById('numAdults').value;
        const duration = document.getElementById('duration').value;
        const foodTokens = document.getElementById('foodTokens').value;
        const rackets = document.getElementById('rackets').value;
  
        // Create an object to hold the form data
        const formData = {
          ticketType,
          numChildren,
          numAdults,
          duration,
          foodTokens,
          rackets,
        };
  
        // Store the form data in local storage
        localStorage.setItem('reservationFormData', JSON.stringify(formData));
      }
      function updateOverallCostOnFirstPage() {
    const overallCost = localStorage.getItem('overallCost');
  
    // Check if the overallCost is null or not in the localStorage
    // If it's null, set the default value to "0 LKR"
    if (!overallCost) {
      localStorage.setItem('overallCost', '0 LKR');
      document.getElementById('overallCost').innerText = '0 LKR';
    } else {
      document.getElementById('overallCost').innerText = overallCost;
    }
  }
  
  // ... [Previous code]
  
  // Function to add to favourites
  function addToFavourites() {
    const currentOrder = localStorage.getItem('currentOrder');
    const overallCost = localStorage.getItem('overallCost'); // Get current overall cost
    if (currentOrder && overallCost) {
      localStorage.setItem('favouriteOrder', currentOrder);
      localStorage.setItem('favouriteOrderCost', overallCost); // Store the cost of the favourite order
      alert('Order added to favourites!');
    } else {
      alert('No order to add to favourites!');
    }
  }
  
  // Function to order favourite
  function orderFavourite() {
    const favouriteOrder = localStorage.getItem('favouriteOrder');
    const favouriteOrderCost = localStorage.getItem('favouriteOrderCost'); // Retrieve the cost of the favourite order
  
    if (favouriteOrder && favouriteOrderCost) {
      const currentOverallCost = parseInt(localStorage.getItem('overallCost').replace(' LKR', ''), 10); // Convert the overall cost to a number
      const newOverallCost = currentOverallCost + parseInt(favouriteOrderCost.replace(' LKR', ''), 10); // Calculate the new overall cost
  
      // Update the overall cost in localStorage and on the page
      localStorage.setItem('overallCost', newOverallCost + ' LKR');
      document.getElementById('overallCost').innerText = newOverallCost + ' LKR';
  
      document.getElementById('currentOrder').innerHTML = favouriteOrder;
      alert('Favourite order added to the current order!');
    } else {
      alert('No favourite order set!');
    }
  }
  
  // Add event listeners for the buttons
  document.getElementById('addToFavouritesButton').addEventListener('click', addToFavourites);
  document.getElementById('orderFavouriteButton').addEventListener('click', orderFavourite);
  
  // ... [Remaining code]
  
  
  
  
  
      // Event listener for the Next button
      document.getElementById('nextButton').addEventListener('click', function() {
        saveFormDataToLocalStorage();
        // Redirect to the desired page
        window.location.href = 'http://127.0.0.1:5500/Html2.html'; // Replace with your desired page URL
      });
  
      