# 下面第3行为用户协议，第5行为隐私政策
# 网址后面需要添加一个英文反斜杠（\）
tellraw @s [{"text": "[用户协议]","clickEvent": {"action": "open_url","value": "\
https://kdxiaoyi.top/Streack/doc/policy/user\
"},"color": "aqua","underlined": true},{"text": " | ","color": "gray","underlined": false},{"text": "[隐私政策]","clickEvent":{"action": "open_url","value": "\
https://kdxiaoyi.top/Streack/doc/policy/privacy\
"},"color": "aqua","underlined": true},{"text": " | ","color": "gray","underlined": false},{"text": "[守则方针]","clickEvent":{"action": "open_url","value": "\
https://kdxiaoyi.top/Streack/doc/policy/rule/\
"},"color": "aqua","underlined": true},{"text": " | ","color": "gray","underlined": false},{"text": "[帮助文档]","clickEvent":{"action": "open_url","value": "\
https://kdxiaoyi.top/Streack/doc/\
"}}]
# 第8行为服规链接，第10行为服务器文档

# 下方为音效通知
execute at @s as @s run playsound block.anvil.land