const manCard = (manager) => {
    
    return `<div style="height: 18vw; width: 16vw; background-color: gray;margin: 20px">
    <div style="height: 5vw; width: 16vw; background-color: blue;">
        <h1>${manager.getName()}</h1>
        <h2>${manager.getRole()}</h2>
        <h2>Email: <a href="mailto:${manager.getEmail()}" style="color: inherit;">${manager.getEmail()}</a></h2>
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
          <h2>Email: <a href="mailto:${currentEng.getEmail()}" style="color: inherit;">${currentEng.getEmail()}</a></h2>
          <h2>ID: ${currentEng.getId()}</h2>
          <h2>Github: <a target="_blank" href="https://github.com/${currentEng.getGithub()}" style="color: inherit;">${currentEng.getGithub()}</a></h2>
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
          <h2>Email: <a href="mailto:${currentIntern.getEmail()}" style="color: inherit;">${currentIntern.getEmail()}</a></h2>
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
        <title>Our Team</title>
    
    </head>
    
    <body>
        <header>
            <div style="background-color: red;">
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