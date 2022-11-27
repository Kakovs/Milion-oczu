// header

const scrollHeader = document.querySelector("header");
const screenWidth = window.innerWidth;

const handleScroll = () => {
    const scrooled = window.scrollY;
    if( scrooled > 40){
        scrollHeader.classList.add("smallHeader");
        return;
    }
    scrollHeader.classList.remove("smallHeader");
}
if (screenWidth > 1024){
  document.addEventListener("scroll", handleScroll);
}

// Hamburger, turn on/off mobile menu

const hamburger = document.querySelector(".hamburger");

const activateMenu = () =>{

    if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
        return;
    }

    hamburger.classList.add("active");
}
hamburger.addEventListener("click", activateMenu);

// tabs

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    })
    tabs.forEach(tab => {
      tab.classList.remove('active');
    })
    tab.classList.add('active');
    target.classList.add('active');
  })
})

// checkbox

const dots = document.querySelector(".dots");
const checkbox = document.querySelector(".extraText");
const formCheckbox = document.querySelector(".formCheckbox");

const activateCheckbox = () =>{

  if (checkbox.classList.contains("moreInfo")) {
    checkbox.classList.remove("moreInfo");
    dots.innerHTML = "... WIĘCEJ";
    formCheckbox.style.alignItems = "center";
      return;
  }

  checkbox.classList.add("moreInfo")
  dots.innerHTML = "MNIEJ";
  formCheckbox.style.alignItems = "flex-start";
}

dots.addEventListener("click", activateCheckbox);
