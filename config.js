/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
         {
          module: "MMM-VoiceControl",
          config: {
	    text:"墩墩"
	    },
	    position: "bottom_right"
        },
        {
          module: "MMM-Hotword",
	  position: "bottom_left",
          config: {
            detectorAudioGain: 0.4,
            detectorApplyFrontend: false,

            mic: {
              recordProgram : "arecord", //record prgram, `rec`, `arecord`, `sox`, `parec` is available
              device        : "plughw:1",
              sampleRate    : 16000,  // audio sample rate
              channels      : 1,      // number of channels
              threshold     : 0.8,
              thresholdStart: null,
              thresholdEnd  : null,
              silence       : 2.0, // detect end of your hotword or afterRecord.
              verbose       : false,  // log info to the console
            },

            recipes: ["command"],
            models: [],
            commands: {},
            defaultCommand: {
	      restart:false
            },

            chimeOnFinish: null, //"resources/ding.wav", // If you don't want to use chime, set this to null.
            useDisplay: false,
            //iconify: "https://code.iconify.design/1/1.0.2/iconify.min.js",
            iconify: null,
            //When you use this module with `MMM-CalendarExt2`, `MMM-Spotify` or any other `iconify` used modules together, Set this to null.

            icons: { //https://iconify.design/icon-sets/
              waiting: "uil-comment-message",
              detected: "uil-comment-exclamation",
              finished: "uil-comment-dots",
            },

            // customizable notification trigger
            notifications: {
              PAUSE: "HOTWORD_PAUSE",
              RESUME: "HOTWORD_RESUME",
              LISTENING : "HOTWORD_LISTENING",
              SLEEPING : "HOTWORD_SLEEPING",
              ERROR : "HOTWORD_ERROR",
              DETECTED: "HOTWORD_DETECTED"
            },
          }
        },
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "compliments",
			position: "lower_third"
		},

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
