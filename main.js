function calculatePartnerOne() {
    var sponsorSales = parseFloat(document.getElementById("sponsorSales").value);

    var percentRevenue = parseFloat(document.getElementById("percentRevenue").value);
    var percentGrowth = parseFloat(document.getElementById("percentGrowth").value);

    var pointValue = parseFloat(document.getElementById("pointValue").value);

    var dollarValue;
    if (percentRevenue) {
        // Calculate based on percentage of revenue
        dollarValue = sponsorSales * (percentRevenue / 100);
    } else if (percentGrowth) {
        // Calculate based on percentage of growth
        dollarValue = sponsorSales * (percentGrowth / 100);
    } else {
        // Handle the case when neither percentage of revenue nor percentage of growth is provided
        alert("Please provide either the percentage of revenue or the percentage of growth.");
        return;
    }

    var totalPoints = dollarValue / pointValue;
    var pointsValue = totalPoints * pointValue;

    document.getElementById("totalPoints").innerText = "Number of Points: " + totalPoints.toFixed(0);
    document.getElementById("pointsValue").innerText = "Points Value: $" + pointsValue.toFixed(2);
}

// Check this function later.
function calculatePartnerTwo() {
    var annualInvestment = parseFloat(document.getElementById("annualInvestment").value);
    var availablePoints = parseFloat(document.getElementById("availablePoints").value);
    var costPerLead = parseFloat(document.getElementById("costPerLead").value);
    var pointValue = parseFloat(document.getElementById("pointValue2").value); // Corrected ID

    // Check if any input value is NaN
    if (isNaN(annualInvestment) || isNaN(availablePoints) || isNaN(costPerLead) || isNaN(pointValue)) {
        alert("Please enter valid numerical values in all fields.");
        return;
    }

    // Check if pointValue is zero to avoid division by zero
    if (pointValue === 0) {
        alert("Point value cannot be zero.");
        return;
    }

    var pointsPerLead = costPerLead / pointValue;
    var totalLeads = availablePoints / pointsPerLead;

    document.getElementById("pointsPerLead").innerText = "Points Per Lead: " + pointsPerLead.toFixed(0);
    document.getElementById("totalLeads").innerText = "Total Leads: " + totalLeads.toFixed(0);
}

function calculateFan() {
  var seasonTicketRevenue = parseFloat(document.getElementById("seasonTicketRevenue").value);
  var gameTicketRevenue = parseFloat(document.getElementById("gameTicketRevenue").value);
  var percentTicketRevenue = parseFloat(document.getElementById("percentTicketRevenue").value);
  var pointFanValue = parseFloat(document.getElementById("pointFanValue").value);

  var totalRevenue = seasonTicketRevenue + gameTicketRevenue;
  var totalFanPoints = totalRevenue * (percentTicketRevenue / 100);
  var pointsFanValue = totalFanPoints * pointFanValue;

  document.getElementById("totalRevenue").innerText = "Total Revenue: $" + totalRevenue.toFixed(2);
  document.getElementById("totalFanPoints").innerText = "Number of Points To Be Distributed To Buyers: " + totalFanPoints.toFixed(0);
  document.getElementById("pointsFanValue").innerText = "Value of All Distributed Points: $" + pointsFanValue.toFixed(2);
}

function calculateRateOne() {
  var fanValue = parseFloat(document.getElementById("fanValue").value);
  var sponsorValue = parseFloat(document.getElementById("sponsorValue").value);

  var exchangeRate = fanValue / sponsorValue;

  document.getElementById("exchangeRate").innerText = "Exchange Rate: $" + exchangeRate.toFixed(2);
}

function calculateRateTwo() {
  var partnerValueTwo = parseFloat(document.getElementById("partnerValueTwo").value);
  var sponsorValueTwo = parseFloat(document.getElementById("sponsorValueTwo").value);

  var exchangeRateTwo = partnerValueTwo / sponsorValueTwo;

  document.getElementById("exchangeRateTwo").innerText = "Exchange Rate: $" + exchangeRateTwo.toFixed(2);
}