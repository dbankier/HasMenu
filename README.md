# HasMenu

This is simple android native titanium module that can be used to determine whether
an Android device has a hardware menu button or not.

## Why do you care?

If a device like some newer Android devices has virtual buttons
then `Ti.Platform.displayCaps.screenHeight` or `screenWidth` does
not include the on screen system bar. Also when changing from portrait to landscape the height
and width are recalculated excluding the system bar which is repositioned. 
(i.e. height landscape != width portrait)

## More Info

The module is really very simple and is only really one line of code. (Is it really worth a repo?)
Also it is built and needs API 14.

# How to

Install the modules like you install any module. Then you can do the following:

```
if (require('yy.hasmenu').hasMenu) {
  Ti.API.debug("Has a hardware button");
} else {
  Ti.API.debug("Uses a system bar, should probably add 48dp");
}
```

Licence: MIT
