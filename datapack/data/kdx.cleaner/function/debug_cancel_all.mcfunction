schedule clear kdx.cleaner:timer/1min
schedule clear kdx.cleaner:timer/5s
schedule clear kdx.cleaner:timer/4s
schedule clear kdx.cleaner:timer/3s
schedule clear kdx.cleaner:timer/2s
schedule clear kdx.cleaner:timer/1s
schedule clear kdx.cleaner:sweep
bossbar set kdx.cleaner:timer visible false
tellraw @s {"text": "此命令仅作调试：您已取消扫地姬所有计划任务，误操作请点我撤销。","color": "yellow","clickEvent": {"action": "suggest_command","value": "/function kdx.cleaner:new_session"}}