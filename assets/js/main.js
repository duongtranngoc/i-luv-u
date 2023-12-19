const textConfig = {
  text1: "Xin chào em yêu ❤️",
  text2: "Anh có điều này muốn hỏi, em phải trả lời thật lòng nha 😚",
  text3: "Em có yêu anh không?",
  text4: "Nếu ko trả lời mà thoát ra tức là yêu anh rất nhiều 🥰",
  text5: "Không. Đéo yêu tí nào 🙂",
  text6: "Cóaaaaa 😘",
  text7: "Tại sao em lại yêu anh 😍",
  text8: "Gửi cho anh đi 😍",
  text9: "Vì anh đần vkl 🙂",
  text10: "Yêu quá 🥰",
  text11: "Hết giận anh nha 🙄",
  text12: "Ok 😒",
};

$(document).ready(function () {
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "./assets/img/cute-cat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("./assets/img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  function switchButton() {
    var audio = new Audio("./assets/sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }

  function moveButton() {
    var audio = new Audio("./assets/sound/Swish1.mp3");
    audio.play();
    var x = (screen.width <= 600) ? Math.random() * 300 : Math.random() * 500;
    var y = (screen.width <= 600) ? Math.random() * 500 : Math.random() * 500;
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });

  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  $("#yes").click(function () {
    var audio = new Audio("./assets/sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
      background: '#fff url("./assets/img/iput-bg.jpg")',
      backdrop: `rgba(0,0,123,0.4) url("./assets/img/giphy2.gif") left top no-repeat`,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("./assets/img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "../../iloveyou.html";
          },
        });
      }
    });

    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var currentIndex = 0;

    $("#txtReason").keypress(function (event) {
      var currentInput = $("#txtReason").val();
      var nextChar = text[currentIndex];

      if (currentIndex < text.length) {
        $("#txtReason").val(currentInput + nextChar);
        currentIndex++;
      }

      event.preventDefault();
    });
  });
});
