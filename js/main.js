$(function () {
  $(".card").click(function () {
    const modalFile = $(this).data("modal");

    $("#modal-body").load(modalFile, function (response, status, xhr) {
      if (status == "error") {
        $("#modal-body").html("<p>表示できません。</p>");
      }
    });

    $("#modal").fadeIn();
  });

  // バツマークでモーダルを閉じる
  $(".close").click(function () {
    $("#modal").fadeOut();
  });

  // モーダルの背景をクリックしても閉じる
  $("#modal").click(function (event) {
    if ($(event.target).is("#modal")) {
      $("#modal").fadeOut();
    }
  });

  // ページがリロードされたときにモーダルが表示されないようにする
  $(window).on("load", function () {
    $("#modal").hide(); // 初期状態でモーダルを非表示に
  });
});
