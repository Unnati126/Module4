// Wait for the DOM to be fully loaded before executing
document.addEventListener("DOMContentLoaded", () => {
    const DateTime = luxon.DateTime;
  
    const output = document.getElementById("results");
  
    /*const birthdate = DateTime.fromISO("2000-01-01");
    const now = DateTime.now();
  
    // 1. Days between birthdate and current date
    const daysBetween = Math.floor(now.diff(birthdate, 'days').days);
  
    // 2. Years, months, days difference
    const diff = now.diff(birthdate, ['years', 'months', 'days']).toObject();
    const formattedDiff = `${Math.floor(diff.years)} years, ${Math.floor(diff.months)} months, ${Math.floor(diff.days)} days`;
  
    // 3. Given two dates, find the one closest to now
    const date1 = DateTime.fromISO("2024-12-01");
    const date2 = DateTime.fromISO("2025-06-01");
    const closestDate = Math.abs(now.diff(date1).milliseconds) < Math.abs(now.diff(date2).milliseconds) ? date1 : date2;
  
    // 4. Compare two dates
    const comparison = date1 < date2 ? "Date 1 is before Date 2" : "Date 1 is after Date 2";
  
    // 5. Current time in London
    const londonTime = now.setZone("Europe/London").toFormat("HH:mm:ss");*/



    // Replace with your actual birthdate
    const birthdate = DateTime.fromISO("2000-06-02");
    const now = DateTime.now();

    // 1. Days between birthdate and current date
    const daysBetween = Math.floor(now.diff(birthdate, 'days').days);

    // 2. Years, months, days difference
    const diff = now.diff(birthdate, ['years', 'months', 'days']).toObject();
    const formattedDiff = `${Math.floor(diff.years)} years, ${Math.floor(diff.months)} months, ${Math.floor(diff.days)} days`;

    // 3. Given two dates, find the one closest to now
    const date1 = DateTime.fromISO("2024-12-01");
    const date2 = DateTime.fromISO("2025-06-01");
    const closestDate = Math.abs(now.diff(date1).milliseconds) < Math.abs(now.diff(date2).milliseconds) ? date1 : date2;

    // 4. Compare two dates
    const comparison = date1 < date2 ? "Date 1 is before Date 2" : "Date 1 is after Date 2";

    // 5. Current time in London
    const londonTime = now.setZone("Europe/London").toFormat("HH:mm:ss");



  
    // Output results to the page
    output.innerHTML = `
      <h2>1. Days Between Birthdate and Now:</h2>
      <div class="output">${daysBetween} days</div>
  
      <h2>2. Years, Months, Days Difference:</h2>
      <div class="output">${formattedDiff}</div>
  
      <h2>3. Closest Date to Now:</h2>
      <div class="output">${closestDate.toISODate()}</div>
  
      <h2>4. Date Comparison:</h2>
      <div class="output">${comparison}</div>
  
      <h2>5. Current Time in London:</h2>
      <div class="output">${londonTime}</div>
    `;
  });
  