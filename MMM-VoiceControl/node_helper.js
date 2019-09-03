
const exec = require("child_process").exec;

var NodeHelper = require("node_helper");
module.exports = NodeHelper.create({


	action: function(file_path){
		var that = this;
		exec("python3 /home/pi/communicate.py post "+ file_path, function(error, stdout, stderr){
			if(error) {
				console.log("[VC] exec.error:", stderr);
			}
			else{
				console.log("[VC] ",stdout);
				that.sendSocketNotification("GOT RESPONSE", stdout);
			}
		});
	},

	socketNotificationReceived: function(notification, payload) {
		if(notification == "GOT_A_ORDER!") {
			console.log("[VC] GOT A FILE_PATH, REQUESTING...");
			this.action(payload);
		}
		else if(notification == "[VC] READY") {
			console.log(notification);
		}
	},

});
