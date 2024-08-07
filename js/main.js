// DOM 선택
const menuButtons = document.querySelectorAll('.menu-button');
const menuItems = document.querySelectorAll('.menu-item');

// 함수 구현
function activateMenuItem(clickedItem) {
  // 모든 메뉴 아이템에서 활성 클래스 제거
  menuItems.forEach(item => {
    item.classList.remove('is-active');
  });
  
  // 클릭된 메뉴 아이템에 활성 클래스 추가
  clickedItem.classList.add('is-active');
}

function handleMenuButtonClick(event) {
  const menuItem = event.currentTarget.closest('.menu-item');
  if (menuItem) {
    activateMenuItem(menuItem);
  }
}

// 이벤트 바인딩
function bindMenuEvents() {
  menuButtons.forEach(button => {
    button.addEventListener('click', handleMenuButtonClick);
  });
}

// 초기화
function initializeMenu() {
  bindMenuEvents();
}

// DOM이 로드된 후 초기화 함수 실행
document.addEventListener('DOMContentLoaded', initializeMenu);