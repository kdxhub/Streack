# 此trigger由同名进度控制
# 触发条件：玩家不着火、没有位移、着陆，每秒触发一次
execute unless score @s kdx.kits.record >= 200 run function kdx.kits:_get