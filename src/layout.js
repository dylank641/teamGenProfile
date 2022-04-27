const generateManagerCard = (manager) => {
    const { name, id, email, officeNumber, role } = manager;
    return `<div
    class="card shadow bg-black text-warning mx-3 my-5 border border-warning"
    style="max-width: 23rem; min-width: 18rem; font-family: monospace;"
    >
    <h3
        class="card-header bg-dark bg-gradient display-4 border-bottom border-warning text-break"
    >
        ${name}
    </h3>
    <div class="card-body">
        <h4 class="card-title display-6">
        ${role}
        <i class="fa-solid fa-mug-hot"></i>
        </h4>
    </div>
    <ul class="list-group list-group-flush lead">
        <li
        class="list-group-item text-warning bg-dark bg-gradient bg-opacity-10 border-bottom border-warning"
        >
        Employee ID: ${id}
        </li>
        <li
        class="list-group-item text-warning bg-dark bg-gradient bg-opacity-10 border-bottom border-warning"
        >
        Email: <a href="mailto:${email}" style="color: inherit;">${email}</a>
        </li>
        <li
        class="list-group-item text-warning bg-dark bg-gradient bg-opacity-10"
        >
        Office Number: ${officeNumber}
        </li>
    </ul>
    </div>`;
  };
  
  const generateEngineerCards = (engineerArr) => {
    return `
      ${engineerArr
        .map(({ name, id, email, github, role }) => {
          return `
              <div
              class="card shadow bg-black text-warning mx-3 my-5 border border-warning"
              style="max-width: 23rem; min-width: 18rem; font-family: monospace;"
              >
                  <h3 class="card-header bg-dark bg-gradient display-4 border-bottom border-warning text-break">
                      ${name}
                  </h3>
                  <div class="card-body">
                      <h4 class="card-title display-6">
                          ${role}
                          <i class="fa-solid fa-screwdriver-wrench"></i>
                      </h4>
                  </div>
                  <ul class="list-group list-group-flush lead">
                      <li
                          class="list-group-item text-warning bg-dark bg-gradient bg-opacity-10 border-bottom border-warning"
                      >
                          Employee ID: ${id}
                      </li>
                      <li
                          class="list-group-item text-warning bg-dark bg-gradient bg-opacity-10 border-bottom border-warning"
                      >
                          Email: <a href="mailto:${email}" style="color: inherit;">${email}</a>
                      </li>
                      <li
                          class="list-group-item text-warning bg-dark bg-gradient bg-opacity-10"
                      >
                          Github: <a target="_blank" href="https://github.com/${github}" style="color: inherit;">${github}</a>
                      </li>
                  </ul>
              </div>
              `;
        })
        .join("")}
      `;
  };
  
  const generateInternCards = (internsArr) => {
    return `
      ${internsArr.map(({ name, id, email, school, role }) => {
        return `
              <div
                class="card shadow bg-black text-warning mx-3 my-5 border border-warning"
                style="max-width: 23rem; min-width: 18rem; font-family: monospace;"
              >
                <h3
                  class="card-header bg-dark bg-gradient display-4 border-bottom border-warning text-break"
                >
                  ${name}
                </h3>
                <div class="card-body">
                  <h4 class="card-title display-6">
                    ${role}
                    <i class="fa-solid fa-seedling"></i>
                  </h4>
                </div>
                <ul class="list-group list-group-flush lead">
                  <li
                    class="list-group-item text-warning bg-dark bg-gradient bg-opacity-10 border-bottom border-warning"
                  >
                    Employee ID: ${id}
                  </li>
                  <li
                    class="list-group-item text-warning bg-dark bg-gradient bg-opacity-10 border-bottom border-warning"
                  >
                    Email: <a href="mailto:${email}" style="color: inherit;">${email}</a>
                  </li>
                  <li
                    class="list-group-item text-warning bg-dark bg-gradient bg-opacity-10"
                  >
                    School: ${school}
                  </li>
                </ul>
              </div>
              `;
      })}
      `;
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
              <title>Backdraft Team Example</title>
              <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
              integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
              crossorigin="anonymous"
              referrerpolicy="no-referrer"
              />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link
              href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
              rel="stylesheet"
              />
              <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
              crossorigin="anonymous"
              />
          </head>
          <body class="bg-black bg-opacity-75">
              <header>
              <div class="container py-3 mx-auto">
                  <h1
                  style="font-family: 'Roboto', sans-serif;"
                  class="display-1 text-center text-warning bg-dark bg-gradient py-2 px-1 rounded-pill"
                  >
                  My Team
                  </h1>
              </div>
              </header>
              <main>
                  <!-- Card Container -->
              <div class="container mx-6">
                  <div class="d-flex flex-wrap justify-content-center">
                      ${generateManagerCard(manager)}
                      ${generateEngineerCards(engineers)}
                      ${generateInternCards(interns)}
                  </div>
              </div>
              </main>
              <footer></footer>
          </body>
  </html>
  `;
  };