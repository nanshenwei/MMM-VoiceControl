Module.register("MMM-VoiceControl",{
	defaults: {
		text:"墩墩",
	},
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	},

	start: function() {
		this.sendSocketNotification("[VC] READY");
		this.config.text = "墩墩准备好了";
		this.updateDom();
	},

	notificationReceived: function(notification, payload, sender) {
		if(sender){
			if (sender.name == "MMM-Hotword") {
				if(notification=="HOTWORD_SLEEPING"){
					this.sendNotification("HOTWORD_RESUME");
				}
				else if(notification == "GOT_A_ORDER") {
					this.sendNotification("HOTWORD_RESUME");
					if(payload != "NO_FILE"){
						this.sendSocketNotification("GOT_A_ORDER!", payload);
						this.config.text = "墩墩思考中...";
						this.updateDom(500);
					}
					else if(payload == "NO_FILE"){
						this.config.text = "墩墩准备好了"
						this.updateDom(500);
					}
				}
				else if(notification == "DETECTED_DUNDUN"){
					this.config.text = "墩墩听着呢~";
					this.updateDom(500);
				}
			}
		}
	},

	socketNotificationReceived(notification, payload){
		var that = this;
		if(notification == "GOT RESPONSE"){
			this.config.text = payload;
			this.updateDom(500);
			window.setTimeout(function(){
				that.config.text = "墩墩准备好了"
				that.updateDom(500);
			},4000);
		}
	},

});
