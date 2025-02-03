tellraw @s [\
  {"text": "=======================================\n","color": "#999999"},\
  {"text": "您收到此通知是因为我们的用户协议、隐私政策等文件已更新。\n","color": "gold"},\
  {"text": "在继续游玩服务器之前，请阅读我们的相关文档：","color": "white"}\
]
function kdx.policynotice:links
tellraw @s [\
  {"text": "您知悉：继续游玩此服务器或使用我们的服务视为您已充分阅读并同意上述内容！\n","color": "red","bold": true},\
  {"text": "对于基岩版玩家请访问我们的官网以阅读上述内容！\n","color": "gold","bold": false},\
  {"text": "=======================================","color": "#999999","bold": false}\
]