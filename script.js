document.addEventListener('DOMContentLoaded', function () {
  // Function to update current time in Nigeria's time zone (WAT)
  function updateTime() {
    const nigeriaTimeElement = document.getElementById('time-utc');
    if (nigeriaTimeElement) {
      const now = new Date();
      const options = {
        timeZone: 'Africa/Lagos',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };
      nigeriaTimeElement.textContent = new Intl.DateTimeFormat('en-US', options).format(now);
    }
  }
  
  updateTime(); // Initial call to display current time
  setInterval(updateTime, 1000); // Update time every second

  // Function to update current day of the week in Nigeria's time zone (WAT)
  function updateCurrentDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayElement = document.getElementById('day');
    if (currentDayElement) {
      const options = { timeZone: 'Africa/Lagos' };
      const today = new Date().toLocaleDateString('en-US', options); // Get current date in Nigeria's time zone
      currentDayElement.textContent = daysOfWeek[new Date(today).getDay()] + ', ' + today;
    }
  }
  
  updateCurrentDay(); // Initial call to display current day
  setInterval(updateCurrentDay, 60000); // Update day every minute
});
