const manCard = (manager) => {
    
    return `<div style="height: 18vw; width: 16vw; background-color: gray;margin: 20px">
    <div style="height: 5vw; width: 16vw; background-color: blue;">
        <h1>${manager.getName()}</h1>
        <h2>${manager.getRole()}</h2>
        <h2>${manager.getEmail()}</h2>
        <h2>ID: ${manager.getId()}</h2>
        <h2>Office Number: ${manager.getOfficeNumber()}</h2>
    </div>
</div>`;
  };
  
  const EngineerCards = (engineerArr) => {
    var engCards = "";
    for (i= 0; i< engineerArr.length; i++){
      var currentEng = engineerArr[i];
      engCards+=  `<div style="height: 18vw; width: 16vw; background-color: gray;margin: 20px">
      <div style="height: 5vw; width: 16vw; background-color: blue;">
          <h1>${currentEng.getName()}</h1>
          <h2>${currentEng.getRole()}</h2>
          <h2>${currentEng.getEmail()}</h2>
          <h2>ID: ${currentEng.getId()}</h2>
          <h2>GitHub: ${currentEng.getGithub()}</h2>
      </div>
  </div>`;
    }
    return engCards;
  };
  
  const internCards = (internArr) => {
    var internCard = "";
    for (i= 0; i< internArr.length; i++){
      var currentIntern = internArr[i];
      internCard+=  `<div style="height: 18vw; width: 16vw; background-color: gray;margin: 20px">
      <div style="height: 5vw; width: 16vw; background-color: blue;">
          <h1>${currentIntern.getName()}</h1>
          <h2>${currentIntern.getRole()}</h2>
          <h2>${currentIntern.getEmail()}</h2>
          <h2>ID: ${currentIntern.getId()}</h2>
          <h2>School: ${currentIntern.getSchool()}</h2>
      </div>
  </div>`;
    }
    return internCard;
  };
  
  module.exports = (teamData) => {
    const { manager, engineers, interns } = teamData;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Organizer</title>
    
    </head>
    
    <body class="bg-black bg-opacity-75">
        <header>
            <div class="container py-3 mx-auto">
                <h1 style="font-family: 'Roboto', sans-serif; font-size: 5vw; display: flex; justify-content: center;">
                    Our Team
                </h1>
            </div>
        </header>
        <main>
            <!-- cards -->
            <div style="display:flex; flex-wrap: wrap; justify-content: space-around;">
            ${manCard(manager)}
            ${EngineerCards(engineers)}
            ${internCards(interns)}
            </div>
        </main>
        <footer></footer>
    </body>
    
    </html>
  `;
  };