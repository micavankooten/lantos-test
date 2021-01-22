$(document).ready(function () {
  var myPlayer0 = $("#video-0").RTOP_VideoPlayer({
    playInModal: false,
    showCloseBtn: true,
    showControls: true,
    showControlsOnHover: true,

    showScrubber: true,
    showTimer: true,
    showPlayPauseBtn: true,
    showSoundControl: true,
    showFullScreen: true,
    keyboardControls: false,
    showControlsOnHover: true,
  });
  var myPlayer1 = $("#video-1").RTOP_VideoPlayer({
    playInModal: false,
    showCloseBtn: true,
    showControls: true,
    showControlsOnHover: true,

    showScrubber: true,
    showTimer: true,
    showPlayPauseBtn: true,
    showSoundControl: true,
    showFullScreen: true,
    keyboardControls: false,
    showControlsOnHover: true,
  });
  var myPlayer2 = $("#video-2").RTOP_VideoPlayer({
    playInModal: false,
    showCloseBtn: true,
    showControls: true,
    showControlsOnHover: true,

    showScrubber: true,
    showTimer: true,
    showPlayPauseBtn: true,
    showSoundControl: true,
    showFullScreen: true,
    keyboardControls: false,
    showControlsOnHover: true,
  });

  jQuery("body").on("keyup", function (e) {
    let element0 = myPlayer0.find(".rtopVideoPlayer");
    let element1 = myPlayer1.find(".rtopVideoPlayer");
    let element2 = myPlayer2.find(".rtopVideoPlayer");

    if (e.keyCode == 32) {
      if (element0.hasClass("isFullscreen")) {
        if (element0.hasClass("playing")) {
          myPlayer0.RTOP_VideoPlayer("pause");
        } else if (element0.hasClass("finished")) {
          myPlayer0.RTOP_VideoPlayer("replay");
        } else {
          myPlayer0.RTOP_VideoPlayer("play");
        }
      } else if (element1.hasClass("isFullscreen")) {
        if (element1.hasClass("playing")) {
          myPlayer1.RTOP_VideoPlayer("pause");
        } else if (element1.hasClass("finished")) {
          myPlayer1.RTOP_VideoPlayer("replay");
        } else {
          myPlayer1.RTOP_VideoPlayer("play");
        }
      } else if (element2.hasClass("isFullscreen")) {
        if (element2.hasClass("playing")) {
          myPlayer2.RTOP_VideoPlayer("pause");
        } else if (element2.hasClass("finished")) {
          myPlayer2.RTOP_VideoPlayer("replay");
        } else {
          myPlayer2.RTOP_VideoPlayer("play");
        }
      }
    }
  });

  myPlayer1.on("webkitfullscreenchange.vid.rtop_videoplayer", function (e) {
    let element = $(e.currentTarget).find(".rtopVideoPlayer");
    if (!element.hasClass("isFullscreen")) {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
      element.addClass("isFullscreen");
    } else {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
    }
  });

  myPlayer1.on("mozfullscreenchange.vid.rtop_videoplayer", function (e) {
    let element = $(e.currentTarget).find(".rtopVideoPlayer");
    if (!element.hasClass("isFullscreen")) {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
      element.addClass("isFullscreen");
    } else {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
    }
  });

  myPlayer1.on("fullscreenchange.vid.rtop_videoplayer", function (e) {
    let element = $(e.currentTarget).find(".rtopVideoPlayer");
    if (!element.hasClass("isFullscreen")) {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
      element.addClass("isFullscreen");
    } else {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
    }
  });

  myPlayer1.on("MSFullscreenChange.vid.rtop_videoplayer", function (e) {
    let element = $(e.currentTarget).find(".rtopVideoPlayer");
    if (!element.hasClass("isFullscreen")) {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
      element.addClass("isFullscreen");
    } else {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
    }
  });

  myPlayer2.on("webkitfullscreenchange.vid.rtop_videoplayer", function (e) {
    let element = $(e.currentTarget).find(".rtopVideoPlayer");

    if (!element.hasClass("isFullscreen")) {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
      element.addClass("isFullscreen");
    } else {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
    }
  });

  myPlayer2.on("mozfullscreenchange.vid.rtop_videoplayer", function (e) {
    let element = $(e.currentTarget).find(".rtopVideoPlayer");

    if (!element.hasClass("isFullscreen")) {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
      element.addClass("isFullscreen");
    } else {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
    }
  });

  myPlayer2.on("fullscreenchange.vid.rtop_videoplayer", function (e) {
    let element = $(e.currentTarget).find(".rtopVideoPlayer");
    if (!element.hasClass("isFullscreen")) {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
      element.addClass("isFullscreen");
    } else {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
    }
  });

  myPlayer2.on("MSFullscreenChange.vid.rtop_videoplayer", function (e) {
    let element = $(e.currentTarget).find(".rtopVideoPlayer");
    if (!element.hasClass("isFullscreen")) {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
      element.addClass("isFullscreen");
    } else {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
    }
  });

  myPlayer0.on("webkitfullscreenchange.vid.rtop_videoplayer", function (e) {
    let element = $(e.currentTarget).find(".rtopVideoPlayer");
    if (!element.hasClass("isFullscreen")) {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
      element.addClass("isFullscreen");
    } else {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
    }
  });

  myPlayer0.on("mozfullscreenchange.vid.rtop_videoplayer", function (e) {
    let element = $(e.currentTarget).find(".rtopVideoPlayer");
    if (!element.hasClass("isFullscreen")) {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
      element.addClass("isFullscreen");
    } else {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
    }
  });

  myPlayer0.on("fullscreenchange.vid.rtop_videoplayer", function (e) {
    let element = $(e.currentTarget).find(".rtopVideoPlayer");
    if (!element.hasClass("isFullscreen")) {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
      element.addClass("isFullscreen");
    } else {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
    }
  });

  myPlayer0.on("MSFullscreenChange.vid.rtop_videoplayer", function (e) {
    let element = $(e.currentTarget).find(".rtopVideoPlayer");
    if (!element.hasClass("isFullscreen")) {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
      element.addClass("isFullscreen");
    } else {
      $(".rtopVideoPlayer").removeClass("isFullscreen");
    }
  });
});
