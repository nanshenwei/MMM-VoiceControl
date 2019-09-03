//recipes/command.js
var recipe = {
  models: [
    {
      hotwords    : "墩墩",
      file        : "dundun.pmdl",
      sensitivity : "0.5",
    },
  ],
  commands: {
    "墩墩": {
      notificationExec: {
          notification: "GOT_A_ORDER",
          payload: (hotword, file) => {
              if (file) {
                return file;
              }
              else
                return "NO_FILE";
          }
      },
      afterRecordLimit: 5,
      restart: false,
    },
    "墩墩-墩墩": {
      notificationExec: {
          notification: "GOT_A_ORDER",
          payload: (hotword, file) => {
              if (file) {
                return file;
              }
              else
                return "NO_FILE";
          }
      },
      afterRecordLimit: 5,
      restart: false,
    },
    "墩墩-墩墩-墩墩": {
      notificationExec: {
          notification: "GOT_A_ORDER",
          payload: (hotword, file) => {
              if (file) {
                return file;
              }
              else
                return "NO_FILE";
          }
      },
      afterRecordLimit: 5,
      restart: false,
    },
  },
}
exports.recipe = recipe // Don't remove this line.
