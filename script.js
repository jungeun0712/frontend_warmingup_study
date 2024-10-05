// import { menus } from "./data.js";
const menus = [
    {
       "img": "image1.jpg",
       "title": "떡볶이",
       "price": "3500원",
       "desc": "매콤달콤한 고추장 소스를 얹은 쫄깃한 떡에 어묵과 삶은 달걀을 곁들인 요리입니다.",
       "type": "분식",
    },
    {
       "img": "image2.jpg",
       "title": "순대",
       "price": "3500원",
       "desc": "삶은 고구마 국수(당면), 돼지 피, 보리, 찹쌀, 야채 등의 재료를 섞어 만든 한국 전통 소시지입니다.",
       "type": "분식",
    },
    {
       "img": "image3.jpg",
       "title": "모둠 튀김",
       "price": "3000원",
       "desc": "야채튀김, 고구마튀김, 김말이, 단호박튀김, 오징어튀김 각 1개씩입니다.",
       "type": "분식",
    },
    {
       "img": "image4.jpg",
       "title": "원조 김밥",
       "price": "2500원",
       "desc": "절인 야채, 계란, 때로는 햄이나 어묵을 채워 넣은 한국식 김밥입니다.",
       "type": "김밥",
    },
    {
       "img": "image5.jpg",
       "title": "참치 김밥",
       "price": "3500원",
       "desc": "양념한 참치와 오이, 당근 같은 야채, 때로는 달걀을 넣어 만든 한국식 참치 김밥입니다.",
       "type": "김밥",
    },
    {
       "img": "image6.jpg",
       "title": "돈까스 김밥",
       "price": "3500원",
       "desc": "아삭아삭한 돈까스에 신선한 야채, 고소한 밥이 어우러져 식감의 대비가 유쾌해 한식의 한 끼 식사나 안주로 인기가 높습니다.",
       "type": "김밥",
    },
    {
       "img": "image7.jpg",
       "title": "김치찌개",
       "price": "9000원",
       "desc": "숙성된 김치, 두부, 돼지고기 또는 쇠고기와 다양한 야채를 고추가루(고추가루)와 고추장(고추장)으로 양념한 매콤한 국물에 함께 끓인 한국 전통 요리입니다.",
       "type": "찌개",
    },
    {
       "img": "image8.jpg",
       "title": "순두부 찌개",
       "price": "9000원",
       "desc": "순두부(순두부)로 만든 한국식 찌개로, 일반적으로 고추가루(한국 고추가루), 고추장(고추장), 마늘, 간장으로 맛을 낸 매콤한 국물에 끓입니다. 여기에는 해산물(조개, 새우 등), 야채(버섯, 호박 등), 때로는 다진 돼지고기나 쇠고기 등의 재료가 포함되는 경우가 많습니다.",
       "type": "찌개",
    },
    {
       "img": "image9.jpg",
       "title": "돈까스",
       "price": "10000원",
       "desc": "얇게 썬 돈까스를 연하게 만들고 판코 빵가루를 입혀 바삭바삭한 황금빛 갈색이 될 때까지 튀긴 일본식 요리입니다.",
       "type": "돈까스",
    },
    {
       "img": "image10.jpg",
       "title": "치즈 돈까스",
       "price": "11000원",
       "desc": "빵가루를 입혀 튀긴 돈가스에 녹인 치즈를 채워 넣은 요리입니다.",
       "type": "돈까스",
    },
];
 

// 첫 실행 페이지 로드
document.addEventListener('DOMContentLoaded', function() {
    initializeMenu();
});

function initializeMenu() {
    renderMenu(menus);
}

function renderMenu(menus) {
    const container = document.getElementById("container");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    menus.forEach(menu => {
        const createItem = document.createElement("div");
        createItem.className = "item";
    
        const createItemImg = document.createElement("div");
        createItemImg.className = "img";
        createItem.append(createItemImg);
        
        const createImg = document.createElement("img");
        createImg.src = `../img/${menu.img}`;
        createImg.className = "image-thumbnail";
        createItemImg.append(createImg);
    
        const createItemContent = document.createElement("div");
        createItemContent.className = "content";
        createItem.append(createItemContent);

        const createMenuInfo = document.createElement("div");
        createMenuInfo.className = "menu_info";
        createItemContent.append(createMenuInfo);
    
        const createTitle = document.createElement("div");
        createTitle.className = "title";
        createTitle.innerText = menu.title;
        createMenuInfo.append(createTitle);

        const createPrice = document.createElement("div");
        createPrice.className = "price";
        createPrice.innerText = menu.price;
        createMenuInfo.append(createPrice);

        const createHr = document.createElement("hr");
        createItemContent.append(createHr);

        const createDesc = document.createElement("div");
        createDesc.className = "desc";
        createDesc.innerText = menu.desc;
        createItemContent.append(createDesc);

        container.append(createItem);
    });
}

function onClickMenuBtn(type) {
    if(type == 'All') {
        renderMenu(menus);
    } else {
        let menuSelect = menus.filter(menu => menu.type === type);
        renderMenu(menuSelect);
    }
}
