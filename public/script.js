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
const productPage = document.querySelector(".product-page");

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

productPage.addEventListener("click", (e) => {
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
//
//
//
//
//
//
//
const allBtn = document.querySelector(".all-btn");
const bagBtn = document.querySelector(".bag-btn");
const walletBtn = document.querySelector(".wallet-btn");
const mAllBtn = document.querySelector(".m-all-btn");
const mBagBtn = document.querySelector(".m-bag-btn");
const mWalletBtn = document.querySelector(".m-wallet-btn");

let productsData; // 데이터를 저장할 변수 선언

//상품 클릭시 상세페이지로 이동하는 함수 선언
const changePage = () => {
  location.href = "./productDetail.html";
};

// 필터링된 상품을 화면에 표시하는 함수
const productsHTML = (products) => {
  let output = "";
  products.forEach((product) => {
    output += `
      <a class="product">
        <div class="images">
          <img onclick=changePage() class="product-img" src="${product.img}">
          <img  class="img-hover" src="${product.imghover}">
        </div>
        <span class="product-name">${product.name}</span>
        <span>${product.price}</span>
        <p>${product.reservation}</p>
        <p class="soldout">${product.soldout}</p>
      </a>
    `;
  });
  document.querySelector("#products").innerHTML = output; // id가 products인 요소에 상품 표시
};

// JSON 데이터를 가져오는 함수
const fetchProducts = () => {
  fetch("./product.json")
    .then((response) => response.json())
    .then((data) => {
      productsData = data; // 가져온 데이터를 변수에 저장
      productsHTML(productsData);
    })
    .catch((error) => console.error("상품을 가져오지 못했습니다:", error));
};

// 모든 상품 제거하는 함수
const removeAllProducts = () => {
  const products = document.querySelectorAll("#products a");
  products.forEach((product) => product.remove());
};

// 카테고리에 따라 상품을 필터링하는 함수
const filterProductsByCategory = (category) => {
  const filteredProducts = productsData.filter(
    (product) => product.category === category
  );
  productsHTML(filteredProducts); // 필터링된 상품 표시
};

// '전체 상품' 버튼 클릭 시 모든 상품 표시
allBtn.addEventListener("click", () => {
  removeAllProducts(); // 이전 상품 제거
  productsHTML(productsData); // 저장된 데이터를 사용하여 모든 상품 표시
  allBtn.style.color = "#000";
  bagBtn.style.color = "#999";
  walletBtn.style.color = "#999";
});

mAllBtn.addEventListener("click", () => {
  removeAllProducts(); // 이전 상품 제거
  productsHTML(productsData); // 저장된 데이터를 사용하여 모든 상품 표시
  mAllBtn.style.color = "#000";
  mBagBtn.style.color = "#999";
  mWalletBtn.style.color = "#999";
});

// '가방' 버튼 클릭 시 가방 상품 표시
bagBtn.addEventListener("click", () => {
  removeAllProducts(); // 이전 상품 제거
  filterProductsByCategory("bag"); // 가방 카테고리 상품 표시
  allBtn.style.color = "#999";
  bagBtn.style.color = "#000";
  walletBtn.style.color = "#999";
});

mBagBtn.addEventListener("click", () => {
  removeAllProducts(); // 이전 상품 제거
  filterProductsByCategory("bag"); // 가방 카테고리 상품
  mAllBtn.style.color = "#999";
  mBagBtn.style.color = "#000";
  mWalletBtn.style.color = "#999";
});

// '지갑' 버튼 클릭 시 지갑 상품 표시
walletBtn.addEventListener("click", () => {
  removeAllProducts(); // 이전 상품 제거
  filterProductsByCategory("wallet"); // 지갑 카테고리 상품 표시
  allBtn.style.color = "#999";
  bagBtn.style.color = "#999";
  walletBtn.style.color = "#000";
});

mWalletBtn.addEventListener("click", () => {
  removeAllProducts(); // 이전 상품 제거
  filterProductsByCategory("wallet"); // 지갑 카테고리 상품 표시
  mAllBtn.style.color = "#999";
  mBagBtn.style.color = "#999";
  mWalletBtn.style.color = "#000";
});

// 검색 상자와 버튼 요소 가져오기
const searchBox = document.querySelector(".search-bar input");
const searchBoxBtn = document.querySelector(".search-bar img");

// 검색 기능을 수행하는 함수
const performSearch = () => {
  // 입력된 검색어 가져오기
  const searchValue = searchBox.value.trim().toLowerCase();
  localStorage.setItem("search", searchValue);
  const searchSaveValue = localStorage.getItem("search");

  // 검색어를 포함한 상품 필터링
  const searchResults = productsData.filter((product) => {
    // 상품명을 소문자로 변환하여 검색어와 비교
    return product.name.toLowerCase().includes(searchSaveValue);
  });

  // 검색 결과를 상품 페이지에 표시
  showProductsBySearch(searchResults);
  searchBox.value = "";
};

// 페이지 로드 시 검색어 가져와서 검색 실행
window.onload = () => {
  const searchQuery = localStorage.getItem("search");
  if (searchQuery) {
    searchBox.value = searchQuery; // 검색 상자에 검색어 설정
    performSearch(searchQuery); // 검색 함수 실행
  }
  localStorage.removeItem("search");
};

// 검색 버튼 클릭 또는 엔터 키 눌렀을 때 검색 실행
searchBoxBtn.addEventListener("click", performSearch);
searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    performSearch();
  }
});

// 페이지에 검색된 상품 표시하는 함수
const showProductsBySearch = (searchResults) => {
  // 페이지에 검색된 상품 표시
  removeAllProducts(); // 이전 상품 제거
  productsHTML(searchResults); // 검색된 상품 표시
};

// 초기에는 첫 번째 페이지의 상품을 표시
fetchProducts();
