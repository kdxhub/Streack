#function kdx:system/carpet_auto_setting
scoreboard objectives add kdx dummy "KDX.BASENUM"
scoreboard players set "kdx.state.ok" kdx 200 
data modify storage kdx:initialized status set value 1b
tellraw @a [{"text":"Streack Service Datapack ","color":"aqua"},{"text":" 已完成初始化 ✓\n","color":"green"}]