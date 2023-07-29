const quiz = [
    {
      question:"ゲーム市場、最も売れたゲーム機は次のうちどれ？",
      answers:[
        "スーパーファミコン",
        "プレイステーション",
        "ニンテンドースイッチ",
        "ニンテンドーＤＳ"
      ],correct:"ニンテンドーＤＳ"
    },{ 
      question:"ゲーム市場、最も売れなかったゲーム機は次のうちどれ？",
      answers:[
        "プレイディア",
        "バーチャルボーイ",
        "PCエンジン",
        "セガサターン"
      ],correct:"プレイディア"
    },{
      question:"原神にて、最も売上を出したキャラは次のうちどれ？",
      answers:[
        "ナヒーダ",
        "ニィロウ",
        "雷電将軍",
        "神里綾香"
      ],correct:"ナヒーダ"
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
  "スーパーファミコン": "https://www.famitsu.com/images/000/241/230/z_6194f53293668.jpg",
  "プレイステーション":"https://www.famitsu.com/images/000/210/529/y_5fc772ed41c33.jpg",
  "ニンテンドースイッチ":"https://store-jp.nintendo.com/on/demandware.static/Sites-MNS-Site/-/default/dw45c75d0f/images/switch_customize/HEG_S_KAAAA-FRONT.png",
  "ニンテンドーＤＳ":"https://m.media-amazon.com/images/I/414QM12GRAL._AC_UF894,1000_QL80_.jpg",
  "プレイディア":"https://auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0404/users/e81e9fa79f3f3b0c717f0bc386a4ace2a45512cb/i-img1200x796-1681119713pu9ygu571792.jpg",
  "バーチャルボーイ":"https://vrinside.jp/wp-content/uploads/vb.jpg",
  "PCエンジン":"https://www.famitsu.com/images/000/280/702/y_635a217e186d4.jpg",
  "セガサターン":"https://www.famitsu.com/images/000/283/250/y_5fb7bcbe91ef5.jpg",
  "ナヒーダ":"https://www.gamespark.jp/imgs/zoom/622123.jpg",
  "ニィロウ":"https://pecoriblog.com/wp-content/uploads/2022/10/image-52.webp",
  "雷電将軍":"https://i.ytimg.com/vi/iFg-bFAu2AU/maxresdefault.jpg",
  "神里綾香":"https://img.gamewith.jp/article/thumbnail/rectangle/239751.png?date=1677492239",
  "Please wait": "https://9-gld.net/genshin/wp-content/uploads/2022/12/03-2.jpg",
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
      window.alert("終了！あなたの正解率は" + score + "/" + quiz.length + "です！");
      quizIndex = 0;
      score = 0;
      setupQuiz();
    }
  };

  function startQuiz() {
    $startButton.style.display = "none"; 
    setupQuiz();
    $questionsSound.play();
  };

  $startButton.addEventListener("click", startQuiz);

  let handlerIndex = 0;
  while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener("click", clickHandler);
    $button[handlerIndex].addEventListener("mouseover", changeImage);
    $button[handlerIndex].addEventListener("mouseout", function() {
      $imageHolder.src = "https://9-gld.net/genshin/wp-content/uploads/2022/12/03-2.jpg";
    });
    handlerIndex++;
  };

  
