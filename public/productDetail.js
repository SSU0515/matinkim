// gototop
const topBtn = document.querySelector(".gototop a");

window.addEventListener("scroll", () => {
  // 스크롤 위치가 100px 이상일 때 위로 가기 버튼을 보이게
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 20
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// 클릭 시 페이지 맨 위로 스크롤 (애니메이션 효과 추가)
const backToTop = () => {
  const position =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (position) {
    window.requestAnimationFrame(() => {
      window.scrollTo(0, position - position / 10);
      backToTop();
    });
  }
};

topBtn.addEventListener("click", () => {
  backToTop();
});

//pc-menu
const logo1Btn = document.querySelector(".logo1");
const logo2Btn = document.querySelector(".logo2");
const logo1Side = document.querySelector(".logo1-side");
const logo2Side = document.querySelector(".logo2-side");
const searchBtn = document.querySelector(".search");
const accBtn = document.querySelector(".account");
const searchPage = document.querySelector(".search-page");
const searchPageLeft = document.querySelector(".search-left");
const accPage = document.querySelector(".account-page ");
const accPageLeft = document.querySelector(".account-left");
const searchCloseBtn = document.querySelector(".search-close");
const accCloseBtn = document.querySelector(".login-close");
const productDPage = document.querySelector(".product-detail");

//menu1Btn
logo1Btn.addEventListener("click", (e) => {
  e.preventDefault();
  logo1Side.classList.toggle("active");
});
//menu2Btn
logo2Btn.addEventListener("click", (e) => {
  e.preventDefault();
  logo2Side.classList.toggle("active");
});
//searchBtn
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchPage.classList.add("active");
});
searchCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchPage.classList.remove("active");
});
searchPageLeft.addEventListener("click", (e) => {
  e.preventDefault();
  searchPage.classList.remove("active");
});
//accBtn
accBtn.addEventListener("click", (e) => {
  e.preventDefault();
  accPage.classList.add("active");
});
accCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  accPage.classList.remove("active");
});
accPageLeft.addEventListener("click", (e) => {
  e.preventDefault();
  accPage.classList.remove("active");
});

productDPage.addEventListener("click", (e) => {
  e.preventDefault();
  logo1Side.classList.remove("active");
  logo2Side.classList.remove("active");
});

//mobile-menu
const mBtn = document.querySelector(".m-header-wrapper .header-menu-m");
const mMenu = document.querySelector(".menu-m");
const mCloseBtn = document.querySelector(".header-close-m");

mBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mShopMenu.classList.remove("active");
  mMenu.classList.add("active");
  mCloseBtn.classList.add("active");
  mBtn.classList.add("active");
});
mCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mShopMenu.classList.remove("active");
  mMenu.classList.remove("active");
  mCloseBtn.classList.remove("active");
  mBtn.classList.remove("active");
});

const mShopBtn = document.querySelector(".shop-btn");
const mShopMenu = document.querySelector(".shoplist");
const mShop2Btn = document.querySelector(".shop2-btn");
const mShop2Menu = document.querySelector(".shop2list");
const arcBtn = document.querySelector(".arc-btn");
const arcMenu = document.querySelector(".arclist");

mShopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mShopMenu.classList.toggle("active");
});

mShop2Btn.addEventListener("click", (e) => {
  e.preventDefault();
  mShop2Menu.classList.toggle("active");
});

arcBtn.addEventListener("click", (e) => {
  e.preventDefault();
  arcMenu.classList.toggle("active");
});
//
//
//
//
//login
//login
const idBox = document.querySelector(".id");
const psBox = document.querySelector(".ps");
const logBtn = document.querySelector(".login-btn");

logBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (idBox.value.length < 8) {
    alert("아이디는 8자 이상 입력해주세요");
  } else if (psBox.value.length < 8) {
    alert("비밀번호는 특수 기호를 포함하여 8자 이상 입력해주세요");
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(psBox.value)) {
    alert("비밀번호에는 특수 기호가 포함되어야 합니다");
  } else {
    alert(`${idBox.value}님 환영합니다.`);
    idBox.value = "";
    psBox.value = "";
  }
});

// 검색 상자와 버튼 요소 가져오기
const searchBox = document.querySelector(".search-bar input");
const searchBoxBtn = document.querySelector(".search-bar img");

const toProductPage = () => {
  location.href = "./index.html";
};

// 검색 기능을 수행하는 함수
const performSearch = () => {
  localStorage.removeItem("search");
  const searchValueSave = searchBox.value.trim().toLowerCase();
  localStorage.setItem("search", searchValueSave);

  toProductPage();
};

// 검색 버튼 클릭 또는 엔터 키 눌렀을 때 검색 실행
searchBoxBtn.addEventListener("click", () => {
  performSearch(); //검색결과를 상품페이지에 표시
});
searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    performSearch();
  }
});

// product
const deliveryBtn = document.querySelector(".delivery");
const detailsBtn = document.querySelector(".details");
const sizeBtn = document.querySelector(".size-guide");
const deliveryContent = document.querySelector(".delivery-content");
const detailsContent = document.querySelector(".details-content");
const sizeContent = document.querySelector(".size-content");
const freeBtn = document.querySelector(".free-size");

freeBtn.addEventListener("click", () => {
  freeBtn.classList.toggle("active");
});

deliveryContent.classList.add("active");
deliveryBtn.style.color = "#000";

deliveryBtn.addEventListener("click", () => {
  detailsContent.classList.remove("active");
  sizeContent.classList.remove("active");
  deliveryContent.classList.add("active");
  deliveryBtn.style.color = "#000";
  detailsBtn.style.color = "#888";
  sizeBtn.style.color = "#888";
});
detailsBtn.addEventListener("click", () => {
  deliveryContent.classList.remove("active");
  sizeContent.classList.remove("active");
  detailsContent.classList.add("active");
  deliveryBtn.style.color = "#888";
  detailsBtn.style.color = "#000";
  sizeBtn.style.color = "#888";
});
sizeBtn.addEventListener("click", () => {
  deliveryContent.classList.remove("active");
  detailsContent.classList.remove("active");
  sizeContent.classList.add("active");
  deliveryBtn.style.color = "#888";
  detailsBtn.style.color = "#888";
  sizeBtn.style.color = "#000";
});
