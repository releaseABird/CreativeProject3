const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");

let currPage = 1;
let numPages = 4;
let maxLocation = numPages + 1;

//Event Listeners
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);



function openBook() {
  book.style.transform = "translateX(50%)";
  prevBtn.style.transform = "translateX(-180px)";
  nextBtn.style.transform = "translateX(180px)";

}

function closeBook(isAtBeginning) {
  if (isAtBeginning){
    book.style.transform = "translateX(0%)";
  } else {
    book.style.transform = "translateX(100%)";
  }

  prevBtn.style.transform = "translateX(0px)";
  nextBtn.style.transform = "translateX(0px)";

}

function goNextPage(){
  if(currPage < maxLocation) {
    switch(currPage) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      case 3:
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;
        break;
      case 4:
        paper4.classList.add("flipped");
        paper4.style.zIndex = 4;
        closeBook();
        break;
      default:
        throw new Error("unknown state");
    }
    currPage++;
  }

}

function goPrevPage(){
  if(currPage > 1) {
    switch(currPage) {
      case 2:
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 4;
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 3;
        break;
      case 4:
        paper3.classList.remove("flipped")
        paper3.style.zIndex = 2;
        break;
      case 5:
        openBook();
        paper4.classList.remove("flipped");
        paper4.style.zIndex = 1;
        break;
      default:
        throw new Error("unknown state");
    }
    currPage--;
  }

}
