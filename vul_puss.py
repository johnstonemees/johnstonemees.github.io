from flask import Flask, request
import requests
import datetime
import logging

app = Flask(__name__)


def push_vul(content):
    resp = requests.post("https://hooks.slack.com/services/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",
                  data={"text": "xray vuln alarm", "desp": content})
    if resp.json()["errno"] != 0:
        raise ValueError("push message failed, %s" % resp.text)

@app.route('/webhook', methods=['POST'])
def xray_webhook():
    vuln = request.json
    if vuln["type"] == 'web_vuln':
        content = """## xray find a new vulnerability
        
    url: {url}

    plugin: {plugin}

    param: {param}

    title: {title}

    found_time: {create_time}

    Please check and report it as soon as possible.
    """.format(url=vuln["data"]["detail"]["addr"], plugin=vuln["data"]["plugin"],param=vuln["data"]["detail"]["extra"]["param"]["key"],
            title=vuln["data"]["detail"]["extra"]["title"] or "Default",
            create_time=str(datetime.datetime.fromtimestamp(vuln["data"]["create_time"] / 1000)))
        try:
            push_vul(content)
        except Exception as e:
            logging.exception(e)
        return 'ok'
    else:
        return 'ok'


if __name__ == '__main__':
    app.run()