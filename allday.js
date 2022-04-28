const inquirer = require('inquirer');
const genMark = require('./src/layout');
const fs = require('fs');
const ManagerClass = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

var manager
var engineers = [];
var interns = [];


// TODO: Create an array of questions for user input
const managerQuestions = [{
    type: "input",
    name: "hello",
    message: "Hello and welcome! Lets start by creating a manager. (Press Enter to continue)"
  },
  {
    type: "input",
    name: "name",
    message: "Please enter the Managers name (Required)",
    default: "Dylan",
    validate: (name) => {
      if (name && isNaN(name)) {
        return true;
      } else {
        console.log(` --Please enter a valid name--`);
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the managers ID number (Required)",
    default: 6464,
    validate: (idInput) => {
      if (Number(idInput)) {
        return true;
      } else {
        console.log(` --Please enter a valid employee ID--`);
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the managers email address (Required)",
    default: "dylanallday@gmail.com",
    validate: (emailInput) => {
      if (emailInput.includes("@")) {
        return true;
      } else {
        console.log(` --Please enter a valid email address--`);
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'Please provide the managers office number. (Required)',
    default: 6969,
    validate: usageInfo => {
      if (Number(usageInfo)) {
        return true;
      } else {
        console.log(' --Please enter a valid office number--');
        return false;
      }
    }
  },

];

let engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter the Engineers name (Required)",
    default: "Dan",
    validate: (name) => {
      if (name && isNaN(name)) {
        return true;
      } else {
        console.log(` --Please enter a valid name--`);
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the Engineers ID number (Required)",
    default: 1234,
    validate: (idInput) => {
      if (Number(idInput)) {
        return true;
      } else {
        console.log(` --Please enter a valid employee ID--`);
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the Engineers email address (Required)",
    default: "dan@gmail.com",
    validate: (emailInput) => {
      if (emailInput.includes("@")) {
        return true;
      } else {
        console.log(` --Please enter a valid email address--`);
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please provide the Engineers Github username. (Required)',
    default: 'daniscool',
    validate: usageInfo => {
      if (usageInfo) {
        return true;
      } else {
        console.log(' --Please enter a github username--');
        return false;
      }
    }
  },
]

let internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter the Interns name (Required)",
    default: "Ben",
    validate: (name) => {
      if (name && isNaN(name)) {
        return true;
      } else {
        console.log(` --Please enter a valid name--`);
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the Interns ID number (Required)",
    default: 6278,
    validate: (idInput) => {
      if (Number(idInput)) {
        return true;
      } else {
        console.log(` --Please enter a valid employee ID--`);
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the Interns email address (Required)",
    default: "benthegod@gmail.com",
    validate: (emailInput) => {
      if (emailInput.includes("@")) {
        return true;
      } else {
        console.log(` --Please enter a valid email address--`);
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please provide the Interns Github username. (Required)',
    default: 'benRocks',
    validate: usageInfo => {
      if (usageInfo) {
        return true;
      } else {
        console.log(' --Please enter a valid github username--');
        return false;
      }
    }
  },
]


// TODO: Create a function to write README file
function writeToFile() {
  //send data to generate markdonw
  //use fs to write it to file
  var team = {
    manager,
    engineers,
    interns
  }
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', genMark(team), err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(managerQuestions)
    .then(function (answers) {
      manager = new ManagerClass(answers.name, answers.id, answers.email, answers.officeNumber)
      menu();
    })
    .catch(err => {
      console.log(err);
    });

}

function internPop() {
  inquirer.prompt(internQuestions)
    .then(function (answers) {
      interns = interns.push (new (answers.name, answers.id, answers.email, answers.github))
      menu();
    })
    .catch(err => {
      console.log(err);
    });

}


function eng() {
  inquirer.prompt(engineerQuestions)
    .then(function (answers) {
      engineers = engineers.push (new Engineer(answers.name, answers.id, answers.email, answers.github))
      menu();
    })
    .catch(err => {
      console.log(err);
    });

}

function menu() {
  inquirer.prompt({
      type: 'list',
      name: 'menu',
      message: 'Please choose an answer choice. (Required)',
      choices: ['Enter an Engineer', 'Enter an Intern', 'Done and Generate File']
    })
    .then(function (answer) {
      console.log(answer.menu);
      if(answer.menu=="Enter an Engineer"){
        eng();
        
      }
      else if( answer.menu =="Enter an Intern"){
        internPop();
        
      }
    })
}




// Function call to initialize app

init();

//interns.push (new Inter)