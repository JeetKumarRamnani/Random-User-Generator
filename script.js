//Selecting DOM Elements Starts

const userImage = document.querySelector("#userImage");
const userInfoTitle = document.querySelector("#userInfoTitle");
const userInfoDescription = document.querySelector("#userInfoDescription");
const iconsTray = document.querySelectorAll("#iconsTray");
const userGenerateBtn = document.querySelector("#userGenerateBtn");

//Selecting DOM ELEMENTS ENDS

// Event Listeners
userGenerateBtn.addEventListener("click", async () => {
  const randomUserData = await getRandomUser();
  updateDomElements(randomUserData);
});
//Events listeners Ends

// Fetching The Data From API Starts

const URL = "https://randomuser.me/api/";

async function getRandomUser() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    //   return data.results[0];
    updateDomElements(data.results[0]);
  } catch {
    alert("Internet Disconnected");
  }
}

getRandomUser();

// Fetching The Data From API ENDS

function updateDomElements(userData) {
  const allIcons = iconsTray[0].children;
  console.log(userData);

  //   console.log(allIcons);

  //   for (let i = 0; i < allIcons.length; i++) {
  //     console.log(allIcons[i]);
  //   }

  userImage.src = userData.picture.large;
  userInfoTitle.textContent = "My Name Is";
  userInfoDescription.textContent = `${userData.name.first} ${userData.name.last}`;

  for (let individualElement of allIcons) {
    console.log(individualElement);

    individualElement.addEventListener("click", (e) => {
      console.log("for of loop working");
      //   console.log(first);
      if (e.target.classList.contains("fa-user")) {
        userInfoTitle.textContent = "My Name Is";
        userInfoDescription.textContent = `${userData.name.first} ${userData.name.last}`;
      } else if (e.target.classList.contains("fa-envelope-open")) {
        userInfoTitle.textContent = "My Adress Is";
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

// updateDomElements();

function bindElementsToDom() {}
