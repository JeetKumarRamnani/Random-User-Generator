// Selecting DOM Elements Starts
const userImage = document.querySelector("#userImage");
const userInfoTitle = document.querySelector("#userInfoTitle");
const userInfoDescription = document.querySelector("#userInfoDescription");
const iconsTray = document.querySelectorAll("#iconsTray");
const userGenerateBtn = document.querySelector("#userGenerateBtn");
// Selecting DOM ELEMENTS ENDS

// Event Listeners
userGenerateBtn.addEventListener("click", async () => {
  const randomUserData = await getRandomUser();
  updateDomElements(randomUserData);
});
// Events listeners Ends

// Fetching The Data From API Starts
const URL = "https://randomuser.me/api/";

async function getRandomUser() {
  userGenerateBtn.disabled = true;
  userGenerateBtn.style.opacity = 0.2;
  userGenerateBtn.style.cursor = "none";
  try {
    const response = await fetch(URL);
    const data = await response.json();
    updateDomElements(data.results[0]);
  } catch {
    alert("Internet Disconnected");
  }
  userGenerateBtn.disabled = false;
  userGenerateBtn.style.opacity = 1;
  userGenerateBtn.style.cursor = "pointer";
}

getRandomUser();
// Fetching The Data From API ENDS

function updateDomElements(userData) {
  const allIcons = iconsTray[0].children;
  console.log(userData);

  userImage.src = userData.picture.large;
  userInfoTitle.textContent = "My Name Is";
  userInfoDescription.textContent = `${userData.name.first} ${userData.name.last}`;
// Remove the 'text-blue-500' class from all icons
     
  for (let icon of allIcons) {
        icon.classList.remove("text-blue-500");
      }

  allIcons[0].classList.add("text-blue-500"); 
  for (let individualElement of allIcons) {
    individualElement.addEventListener("click", (e) => {
      console.log("for of loop working");

      // Remove the 'text-blue-500' class from all icons
      for (let icon of allIcons) {
        icon.classList.remove("text-blue-500");
      }

      // Add the 'text-blue-500' class to the clicked icon
      e.target.classList.add("text-blue-500");

      if (e.target.classList.contains("fa-user")) {
        userInfoTitle.textContent = "My Name Is";
        userInfoDescription.textContent = `${userData.name.first} ${userData.name.last}`;
      } else if (e.target.classList.contains("fa-envelope-open")) {
        userInfoTitle.textContent = "My Address Is";
        userInfoDescription.textContent = `${userData.location.street.name} ${userData.location.city} ${userData.location.country}`;
      } else if (e.target.classList.contains("fa-calendar-times")) {
        userInfoTitle.textContent = "My Age Is";
        userInfoDescription.textContent = `${userData.dob.age} `;
      } else if (e.target.classList.contains("fa-map")) {
        userInfoTitle.textContent = "My Street Name Is";
        userInfoDescription.textContent = `${userData.location.street.name} `;
      } else if (e.target.classList.contains("fa-phone")) {
        userInfoTitle.textContent = "My Phone No Is";
        userInfoDescription.textContent = `${userData.phone} `;
      } else if (e.target.classList.contains("fa-user-lock")) {
        userInfoTitle.textContent = "My Password Is";
        userInfoDescription.textContent = `${userData.login.password} `;
      }
    });
  }
}
