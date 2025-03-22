const CURRENT_PAGE_STORAGE_KEY = "CURRENT_PAGE_STORAGE_KEY";

// Importing the Pages
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

// Instatiating the pages as a class
const HomeClass = new HomePage();
const NotFoundClass = new NotFoundPage();
const LoginClass = new LoginPage();
const RegisterClass = new RegisterPage();

// Maping the classes to a key used in the navbar to identify which page the user is requesting
const pages = {
  Home: HomeClass,
  NotFound: NotFoundClass,
  Login: LoginClass,
  Register: RegisterClass,
};

(() => {
  // getting all the links in the app that has a class name of .nav-item-link
  const appLinks = document.querySelectorAll(".nav-item-link");
  // getting the entry of the app
  const entry = document.querySelector("#entry");
  //setting up the no found page
  const notfound = pages["NotFound"]?.render();
  //setting the app to the page it was before refresh
  entry.innerHTML =
    pages[localStorage.getItem(CURRENT_PAGE_STORAGE_KEY)]?.render() ?? notfound;
  //rendering or showing a page when the user clicks a curresponding link
  appLinks.forEach((link) => {
    // adding a even listener to all the links
    link.addEventListener("click", function (e) {
      // getting the page property from the link that was clicked
      const page = link.getAttribute("data-page");
      // add it to local storage in case of refresh
      localStorage.setItem(CURRENT_PAGE_STORAGE_KEY, page);
      //rendering the page else the notfound page
      entry.innerHTML = pages[page]?.render() ?? notfound;
    });
  });
})();
