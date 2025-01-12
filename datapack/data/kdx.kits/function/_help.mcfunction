tellraw @s [\
  {\
    "text":"Streack Service Datapack - Kits - 帮助列表\n",\
    "color":"green"\
  },{\
    "text":"使用/function kdx.kits:_*** 来执行操作\n",\
    "color":"white",\
    "clickEvent":{\
      "action":"suggest_command",\
      "value":"/function kdx.kits:_"}\
  },{\
    "text":"_help 显示此帮助列表\n",\
    "color":"white",\
    "clickEvent":{\
      "action":"suggest_command",\
      "value":"/function kdx.kits:_help"}\
  },{\
    "text":"_set 将指定物品添加到礼包中\n",\
    "color":"white",\
    "clickEvent":{\
      "action":"suggest_command",\
      "value":"/function kdx.kits:_set"}\
  },{\
    "text":"zreset_warning 重置所有玩家的领取记录\n",\
    "color":"white",\
    "clickEvent":{\
      "action":"suggest_command",\
      "value":"/function kdx.kits:zreset_"}\
  },{\
    "text":"_get 强制给与命令执行者一份礼包，若需指定玩家请使用execute\n",\
    "color":"white",\
    "clickEvent":{\
      "action":"suggest_command",\
      "value":"/function kdx.kits:_reset"}\
  },{\
    "text":"\n礼包的添加方法是把东西放在脚下的箱子里并执行_set函数",\
    "color":"white"\
  }\
]