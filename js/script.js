/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

const perPage = 9;
const header = document.querySelector('header');
const searchBarHTML = `
   <label for="search" class="student-search">
      <input type="text" id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
`;
header.insertAdjacentHTML('beforeend', searchBarHTML);
const searchBar = header.querySelector('#search')
const filteredList = [];
searchBar.addEventListener('keyup', (event) => {
   const inputValue = event.target.value.toLowerCase();

   for (let i = 0; i < data.length; i++) {
      const student = data[i];
      const firstName = student.name.first.toLowerCase();
      const lastName = student.name.first.toLowerCase();
      console.log(`${firstName} ${lastName}`);
      if (student.name.first.includes(inputValue) || student.name.last.includes(inputValue)) {
         filteredList.push(student);
      }
   }
   
});


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   let startIndex = (page * perPage) - perPage;
   let endIndex = page * perPage;
   const studentList = document.querySelector('ul.student-list');
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const student = list[i];
         const studentLi = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
                  <h3>${student.name.first} ${student.name.last}</h3>
                  <span class="email">${student.email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined: ${student.registered.date}</span>
               </div>
            </li>
         `;
         studentList.innerHTML += studentLi;
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   const numOfButtons = Math.ceil(list.length / 9);
   const linkList = document.querySelector('ul.link-list');
   linkList.innerHTML = '';

   for (let i = 0; i < numOfButtons; i++) {
      let button = `
         <li>
            <button type="button">${i + 1}</button>
         </li>
      `;
      linkList.innerHTML += button
   }
   const firstPageButton = linkList.firstElementChild;
   firstPageButton.className = "active";

   linkList.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
         const button = event.target;
         const buttonList = linkList.children;
         for (let i = 0; i < buttonList.length; i++) {
            const buttonElement = buttonList[i].querySelector('button');
            buttonElement.className = '';
         }
         button.className = 'active';
         showPage(data, button.textContent);
      }
   })
}

// Call functions

showPage(data, 1);
addPagination(data);