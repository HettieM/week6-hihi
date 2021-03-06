const model = require("./model");
const handlers = require("./handlers");

function htmlSkeleton(redirect, content, username) {
  let navBar;
  if (!username) {
    navBar = `
    <p><a href="/newUserPage">Sign up</a></p>
    <p><a href="/loginPage">Login</a></p>
    <p><a href="/logout">Log out</a></p>
    `;
  } else {
    navBar = `
    <p>You are loggged in as ${username}</p>
    <p><a href = "/loginPage">Login</a></p>
    <p><a href="/logout">Log out</a></p>
    `;
  }

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Survive the virus</title>
  <link rel='shortcut icon' href='https://ps.w.org/covid-19/assets/icon.svg?rev=2262770' type='image/x-icon'> 
  <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/743c019083.js" crossorigin="anonymous"></script>
  <link href="public/styles.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;800&display=swap" rel="stylesheet">
  </head>
  <body>
  <nav class="navBar">
    ${navBar}
  </nav>
  <h1 class="heading-logo">SRV|VRS</h1>
  ${redirect}
  <main>
  ${content}
  </main>
  <script src="public/main.js"></script>
  </body>
  </html>
  `;
}

function printTools(tools) {
  return tools
    .map((tool) => {
      return `
    <article id="tool_${tool.id}" class="tool-card"> 
    <h2 class="tool-card__name">${tool.tool_name}</h2>
    <p class="tool-card__love-icon"><a><i class="fas fa-heart"></i></a><span>${tool.love}</span></p>
    <p class="tool-card__user">Added by: ${tool.added_by}</p>
    <p class="tool-card__desc">What is it: ${tool.tool_description}</p>
    <a class="tool-card__link" href="https://www.${tool.tool_link}">Link</a>
    <p class="tool-card__category">Category: ${tool.category}</p>
    <a href="delete=${tool.id}"><button class="delete-button">Delete</button></a>
    </article>
    `;
    })
    .join("");
}

function home(tools) {
  return htmlSkeleton(
    // Redirect Parameter
    `<h2 class="home-description">A collection of tools to help you survive social distancing!</h2>
    <a class="new-page-link" href='/add'>Add a tool</a>`,
    // Content Parameter
    `
    <p class="home-filter-description">Select a category to filter the results:</p>
    <div id="categoryIcon" class="cat">
    <a class="cat__work-icon">Work</a>
    <a class="cat__social-icon">Social</a>
    <a class="cat__ent-icon">Entertainment</a>
    <a class="cat__health-icon">Health</a>
    <a class="cat__news-icon">News</a>
    </div>
    ${printTools(tools)}`
  );
}

function addPage() {
  return htmlSkeleton(
    // Redirect Parameter
    `<a class="new-page-link" href='/'>Go back home</a>`,
    // Content Parameter
    `<form action="create-tool" method="POST">
      <fieldset>
      <legend>Category:</legend>
      <label class="radio-label" for="work">Work
      <input type="radio" id="work" name="category" value="Work" required>
      </label>
      <label class="radio-label" for="social">Social
      <input type="radio" id="social" name="category" value="Social" required>
      </label>
      <label class="radio-label" for="entertainment">Entertainment
      <input type="radio" id="entertainment" name="category" value="Entertainment" required>
      </label>
      <label class="radio-label" for="health">Health
      <input type="radio" id="health" name="category" value="Health" required>
      </label>
      <label class="radio-label" for="news">News
      <input type="radio" id="news" name="category" value="News" required>
      </label>
      </fieldset>
      
      <label class='user-info-label' for="tool_name">Name
      <input class="user-info" id="tool_name" name="tool_name" required>
      </label>
      
      <label class='user-info-label' for="tool_description">Description
      <input class="user-info" id="tool_description" name="tool_description" required>
      </label>
      
      <label class='user-info-label' for="tool_link">Link https://www.
      <input class="user-info" id="tool_link" name="tool_link" placeholder="google.com" required>
      </label>
      
      <label class='user-info-label' for="added_by">Username
      <input class="user-info" id="added_by" name="added_by" required>
      </label>
      
      <button class="post-tool-button" type="submit">Post tool</button>
      </form>`
  );
}

function login() {
  return htmlSkeleton(
    `<a class="new-page-link" href='/'>Go back home</a>``
        <form method="post" action="./loginPage" enctype="application/x-www-form-urlencoded">
        <label for="username">Username</label>
        <input id="username" type="text" name="username">
        <label for="password">Password</label>
        <input id="password" type="password" name="password">
        <input type="submit" value="Log in">
        </form>
        `
  );
}

function signup() {
  return htmlSkeleton(
    `<a class="new-page-link" href='/'>Go back home</a>`,

    `
          <form method="post" action="./newUserPage" enctype="application/x-www-form-urlencoded">
          <label for="username">Username</label>
          <input id="username" type="text" name="username">
          <label for="password">Password</label>
          <input id="password" type="password" name="password">  
          <input type="submit" value="Create account">
          </form>
          `
          )
        }
          
function login() {
  return htmlSkeleton(
    `<a class="new-page-link" href='/'>Go back home</a>`,
    `
    <form method="post" action="./loginpage" enctype="application/x-www-form-urlencoded">
    <label for="username">Username</label>
    <input id="username" type="text" name="username">
    <label for="password">Password</label>
    <input id="password" type="password" name="password">  
    <input type="submit" value="Log in">
    </form>
    `
  );
}

function missing() {
  return htmlSkeleton(
    // Redirect Parameter
    `<a href='/'><h2 class='error-subtitle'>Go back home!</h2></a>`,
    // Content Parameter
    `<h1 class="error-title">Content Not Found</h1>`
  );
}

module.exports = { home, addPage, missing, login, signup };
