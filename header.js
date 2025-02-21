searchBtn = document.querySelector(".search_icon")
searchPopup = document.querySelector(".search_popup")
searchBarContainer = document.querySelector('.search_bar-container')

searchBtn.addEventListener("click", () => {
    searchPopup.style.display = "flex";
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  });
  
searchPopup.addEventListener("click", (event) => {
    if (event.target === searchPopup) {
        searchPopup.style.display = "none";
       document.body.style.height = "auto";
    document.body.style.overflow = "auto";


      }
  });  
  

  



  