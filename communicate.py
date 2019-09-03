import requests
import base64
import sys
import fire

class Communicate():
    raspi_ip= "192.168.31.185"
    url = "http://"+ raspi_ip +":5000/chat"

    def w2b(self, file_path):
        file = open(file_path,'rb').read()
        return base64.b64encode(file,altchars=None)

    def post(self, file_path):
        file_path = '/home/pi/MagicMirror/modules/MMM-Hotword/'+file_path
        file = self.w2b(file_path)
        data = {
            'validate':'72ab8af56bddab33b269c5964b26620a',
            'type':'voice',
            'voice': file
        }
        re = requests.post(self.url,data=data)
        try:
            if re.json()['code'] == 0:
                return re.json()['resp']
            return re.json()
        except:
            return "post error!"

if __name__ == '__main__':
    if len(sys.argv) > 1:
        fire.Fire(Communicate)

