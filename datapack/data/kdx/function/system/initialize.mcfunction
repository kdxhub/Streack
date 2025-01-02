function kdx:system/carpet_auto_setting

data modify storage kdx:initialized status set value 1b
tellraw @a [{"text":"kdxSMP Service Datapack ","color":"aqua"},{"text":" 已完成初始化 ✓\n","color":"green"}]