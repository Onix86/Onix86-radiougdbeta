cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-appminimize.AppMinimize",
    "file": "plugins/cordova-plugin-appminimize/www/AppMinimize.js",
    "pluginId": "cordova-plugin-appminimize",
    "clobbers": [
      "cordova.plugins.appMinimize"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "ionic-plugin-keyboard.keyboard",
    "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
    "pluginId": "ionic-plugin-keyboard",
    "clobbers": [
      "cordova.plugins.Keyboard"
    ],
    "runs": true
  },
  {
    "id": "org.apache.cordova.splashscreen.SplashScreen",
    "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
    "pluginId": "org.apache.cordova.splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-appminimize": "1.0",
  "cordova-plugin-device": "1.1.4",
  "cordova-plugin-statusbar": "2.2.2",
  "cordova-plugin-whitelist": "1.3.1",
  "ionic-plugin-keyboard": "2.2.1",
  "org.apache.cordova.splashscreen": "1.0.0"
};
// BOTTOM OF METADATA
});