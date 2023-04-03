let studentArray = [];


function clickHandler(event){
    if (event.target.tagName === "BUTTON") {
        // console.log(event.target);
        // if the button is change bg
        if (event.target.textContent === "Change Background Color"){
        // if (event.target.id === "bgB") {
    
            document.body.style.backgroundColor = "pink";

        } else if (event.target.textContent === "Submit"){
            // if the button is submit
            let firstNameInput = document.querySelector("#firstname");
            let lastNameInput = document.querySelector("#lastname");
            // console.log(lastNameInput.value);
            let progNameInput = document.querySelector("#progname");
            
            // save data
            let student = {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                progName: progNameInput.value,
            };

            // check if there is same thing in the array and skip it, try it later
            studentArray.push(student);
            addStudentToList(student);
            // clear data in the box
            firstNameInput.value = "";
            lastNameInput.value = "";
            progNameInput.value = "";

            console.log(student)
        };
    };

}

document.body.addEventListener("click", clickHandler)


function addStudentToList(newStudent) {
    // newstudent is an obj with fname, lname, progname
 
    // create new li
      const newli = document.createElement("li");
    // find the correct ul based on progname of newstudent
    // append the new li to the ul
     // update the textconten of new li
    newli.textContent = `${newStudent.firstName} ${newStudent.lastName}`
    if (newStudent.progName.toLowerCase() === "cit") {
        const citList = document.querySelector("#CIT");
        citList.appendChild(newli);
    } else if (newStudent.progName.toLowerCase() === "cst") {
        const citList = document.querySelector("#CST");
        citList.appendChild(newli);
    };
   

}

// function addStudentToList();
