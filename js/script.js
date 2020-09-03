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

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   let startIndex = (page * perPage) - perPage;
   let endIndex = page * perPage;
   const studentList = document.querySelector('.student-list');

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
         // let li = document.createElement('li');
         // li.className = "student-item cf";
         // let detailsDiv = document.createElement('div');
         // detailsDiv.className = "student-details";
         // let avatar = document.createElement('img');
         // avatar.className = "avatar";
         // let h3 = document.createElement('h3');
         // let email = document.createElement('span');
         // email.className = "email";
         // let joinedDetailsDiv = document.createElement('div');
         // joinedDetailsDiv.className = "joined-details";
         // let date = document.createElement('span');
         // date.className = "date";

         // joinedDetailsDiv.appendChild(date);
         // detailsDiv.appendChild(avatar);
         // detailsDiv.appendChild(h3);
         // detailsDiv.appendChild(email);
         // li.appendChild(detailsDiv);
         // li.appendChild(joinedDetailsDiv);


         studentList.innerHTML += studentLi;
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination() {
   
}


// Call functions
