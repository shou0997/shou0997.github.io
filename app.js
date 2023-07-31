const quiz = [
  {
    question: "ゲーム市場、最も売れたゲーム機は次のうちどれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション",
      "ニンテンドースイッチ",
      "ニンテンドーＤＳ"
    ],
    correct: "ニンテンドーＤＳ"
  },
  {
    question: "このゲーム機の中で、最も売れなかったゲーム機は次のうちどれ？",
    answers: [
      "プレイディア",
      "バーチャルボーイ",
      "PCエンジン",
      "セガサターン"
    ],
    correct: "プレイディア"
  },
  {
    question: "トヨタのビーチバレーの拠点はどこ？",
    answers: [
      "トヨタ本社",
      "田原工場",
      "上郷工場",
      "衣浦工場"
    ],
    correct: "衣浦工場"
  }
];

const $questionsSound = document.getElementById("questionsSound");
const $okSound = document.getElementById("okSound");
const $ngSound = document.getElementById("ngSound");
const $resultSound = document.getElementById("resultSound");
const $startButton = document.getElementById("startButton");
const $button = document.getElementsByName("button");
const buttonLength = $button.length;
const $imageHolder = document.getElementById("imageHolder");

const answerImagePaths = {
  "スーパーファミコン": "material/Pictuers/Super_Famicom_JPN.jpg",
  "プレイステーション": "material/Pictuers/ps.jpg",
  "ニンテンドースイッチ": "material/Pictuers/nintendo-switch_mhyb.jpg",
  "ニンテンドーＤＳ": "material/Pictuers/Nintendo_DS_Trans.png",
  "プレイディア": "material/Pictuers/playdia.jpg",
  "バーチャルボーイ": "material/Pictuers/vb.jpg",
  "PCエンジン": "material/Pictuers/PCen.jpg",
  "セガサターン": "material/Pictuers/sega.jpg",
  "トヨタ本社": "material/Pictuers/toyota.jpg",
  "田原工場": "material/Pictuers/tahara.jpg",
  "上郷工場": "material/Pictuers/kamigo.jpg",
  "衣浦工場": "material/Pictuers/kinuura.jpg",
  "Please wait": "material/Pictuers/quiz_top.png",
};

let quizIndex = 0;
let score = 0;

function setupQuiz() {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonindex = 0;
  while (buttonindex < buttonLength) {
    $button[buttonindex].textContent = quiz[quizIndex].answers[buttonindex];
    buttonindex++;
    if (quizIndex > 0) {
      document.getElementById("questionsSound").play();
    }
  }
}

function changeImage(event) {
  const clickedButton = event.target.textContent;
  const imagePath = answerImagePaths[clickedButton];
  $imageHolder.src = imagePath;
}

function clickHandler() {
  const clickedText = this.textContent;
  if (quiz[quizIndex].correct === clickedText) {
    $okSound.play();
    window.alert("正解！");
    score++;
  } else {
    $ngSound.play();
    window.alert("不正解！");
  }

  quizIndex++;

  if (quizIndex < quiz.length) {
    setupQuiz();
  } else {
    $resultSound.play();
    showEvaluation(score);
    quizIndex = 0;
    score = 0;
    setupQuiz();
  }
}

function showEvaluation(score) {
  const accuracy = (score / quiz.length) * 100;
  let imageUrl = "";

  if (accuracy >= 80) {
    imageUrl = "material/Pictuers/good.jpg";
  } else if (accuracy >= 60) {
    imageUrl = "material/Pictuers/yokudekimasita.png";
  } else {
    imageUrl = "material/Pictuers/mottoganbarimashou.png";
  }

const evaluationWindow = window.open("", "Evaluation", "width=300,height=300");
const evaluationContent = `
        <html>
        <head>
          <title>採点！</title>
          <style>
            body {
              text-align: center;
            }
            h2 {
              margin-bottom: 10px;
            }
            img {
              width: 200px;
              height: 200px;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <h2>評価</h2>
          <p>正解率：${accuracy.toFixed(0)}%</p>
          <img src="${imageUrl}">
        </body>
        </html>
      `;
      evaluationWindow.document.write(evaluationContent);
    }

function startQuiz() {
  $startButton.style.display = "none";
  setupQuiz();
  $questionsSound.play();
}

$startButton.addEventListener("click", startQuiz);

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", clickHandler);
  $button[handlerIndex].addEventListener("mouseover", changeImage);
  $button[handlerIndex].addEventListener("mouseout", function () {
    $imageHolder.src = "material/Pictuers/quiz_top.png";
  });
  handlerIndex++;
}
