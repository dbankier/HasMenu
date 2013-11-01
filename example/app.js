if (require('yy.hasmenu').hasMenu) {
  Ti.API.debug("Has a hardware button");
} else {
  Ti.API.debug("Uses a system bar, should probably add 48dp");
}
