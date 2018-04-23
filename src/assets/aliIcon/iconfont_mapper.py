# -*- coding:utf-8
import json
from bs4 import BeautifulSoup
import re

import sys
reload(sys)
sys.setdefaultencoding('utf8')


def main():
    output = {}
    with open('./iconfont.svg') as f:
        text = f.read()
        pattern_label = re.compile(r'<glyph .* />')
        res = re.findall(pattern_label, text)
        for label in res:
            flag = label.index('unicode')
            name = label[19:(flag - 2)]
            unicode_text = int(label[(flag + 11):(flag + 16)])
            output[name] = unicode_text
    with open('../../Components/common/iconfont.json', 'w') as f:
        f.write(json.dumps(output))


if __name__ == '__main__':
    main()
