"use strict";

// variables
const generateStory = document.querySelector(".generate");
const story = document.querySelector(".story");

// It is transalted to the language of the country of the selected button.
function transform() {
  const koStoryText =
    "여우와 신포도, 난 말이야, 여우 한 마리가 길을 걷고 있었습니다. 식사 시간이 한참 지난 때라 배가 고팠습니다. 그런데 조금 걷다 보니 포도밭이 눈에 들어왔고 탐스러운 포도송이가 주렁주렁 달려 있었죠. 한 송이만 몰래 때 따먹을 요령으로 살금살금 기어가서 포도나무 아래로 접근했습니다. 그런데 막상 도착해 보니, 포도는 여우가 따 먹기에는 너무 높이 매달려 있었습니다. 그래서 가장 낮은 곳에 매달린 포도를 따 먹기로 정한 여우는 있는 힘을 다해 뛰었습니다. 그러나 번번이 간발의 차이로 포도를 따 먹을 수가 없었습니다. '이 놈의 포도는 왜 이렇게 높이 달려 있는 거야!!' 갈증에다가 신경질까지 더한 여우는 계속해서 포도를 향해 뛰어올랐으나 해질 무렵이 될 때까지 목표를 달성할 수 없었습니다. 입에는 군침이 가득 돌았지만, 어쩔 수 없는 것이었습니다. 여우는 할 수 없이 포도를 따는 것을 포기하고 돌아서서는 혼잣말로 중얼거렸습니다. '아마 저 포도는 너무 시어서 맛이 없을 거야 분명 먹어봤자 일거야'하곤 쓸쓸하게 발걸음을 옮겼답니다.";

  const transX = [
    "Fox and grapevines - I mean, a fox was walking down the street. It was after dinner time and I was hungry. But after walking for a while, I came across a vineyard and there were coveted bunches of grapes. As a trick to pluck the grapes, he crept up and approached under the vine, but when he arrived, the grapes were hanging too high for the fox to eat, so the fox, who decided to pick the grapes hanging from the lowest place, lost his strength. I ran with all my might, but every time I couldn't pick grapes and eat them because of the intermittent difference, 'Why are these grapes hanging so high!!' Thirst and nervousness grew, the fox continued to run for the grapes, but he could not reach his goal until sunset. His mouth was full of saliva, but he had no choice but to eat the grapes. After giving up picking, I turned around and muttered to myself, 'Maybe those grapes are too sour to taste.",
  ];
  const transY = [
    "여우와 신포도 -난 말이야, 여우 한 마리가 길을 걷고 있었습니다. 식사 시간이 한참 지난 때라 배가 고팠습니다. 그런데 조금 걷다 보니 포도밭이 눈에 들어왔고 탐스러운 포도송이가 주렁주렁 달려 있었죠. 한 송이만 몰래 때 따먹을 요령으로 살금살금 기어가서 포도나무 아래로 접근했습니다. 그런데 막상 도착해 보니, 포도는 여우가 따 먹기에는 너무 높이 매달려 있었습니다. 그래서 가장 낮은 곳에 매달린 포도를 따 먹기로 정한 여우는 있는 힘을 다해 뛰었습니다. 그러나 번번이 간발의 차이로 포도를 따 먹을 수가 없었습니다. '이 놈의 포도는 왜 이렇게 높이 달려 있는 거야!!' 갈증에다가 신경질까지 더한 여우는 계속해서 포도를 향해 뛰어올랐으나 해질 무렵이 될 때까지 목표를 달성할 수 없었습니다. 입에는 군침이 가득 돌았지만, 어쩔 수 없는 것이었습니다. 여우는 할 수 없이 포도를 따는 것을 포기하고 돌아서서는 혼잣말로 중얼거렸습니다. '아마 저 포도는 너무 시어서 맛이 없을 거야 분명 먹어봤자 일거야'하곤 쓸쓸하게 발걸음을 옮겼답니다.",
  ];

  const KoItemX = transX;
  const KoItemY = transY;

  let koreaNewStory = koStoryText;

  if (document.getElementById("ko").checked) {
    koreaNewStory = koreaNewStory.replaceAll(koStoryText, KoItemY);
  } else if (document.getElementById("us")) {
    koreaNewStory = koreaNewStory.replaceAll(koStoryText, KoItemX);
  }
  story.innerText = koreaNewStory;
  story.style.visibility = "visible";
}

// click
generateStory.addEventListener("click", () => {
  transform();
  changeImage();
});

// 이미지 변경 소스는 나오는데, 변경 되지는 않음!
function changeImage() {
  document.body.classList.add("bgImg");
  let bgImg = document.querySelector(".bgImg");
  let imgSrc = bgImg.getAttribute("src");
  if (imgSrc === "./img/little-red-riding-hood-g6027d094a_1920.jpg") {
    bgImg.setAttribute("src", "./img/witch-g24ee6e496_1920.jpg");
  } else {
    bgImg.setAttribute(
      "src",
      "./img/little-red-riding-hood-g6027d094a_1920.jpg"
    );
  }
}
