# 此trigger由同名进度控制
# 触发条件：玩家不着火、没有位移、着陆，每秒触发一次
execute at @s \
  if block ~-1 ~ ~-1 air \
  if block ~-1 ~ ~ air \
  if block ~-1 ~ ~1 air \
  if block ~ ~ ~-1 air \
  if block ~ ~ ~ air \
  if block ~ ~ ~1 air \
  if block ~1 ~ ~-1 air \
  if block ~1 ~ ~ air \
  if block ~1 ~ ~1 air \
  if block ~-1 ~1 ~1 air \
  if block ~-1 ~1 ~ air \
  if block ~-1 ~1 ~1 air \
  if block ~ ~1 ~ air \
  if block ~ ~1 ~ air \
  if block ~ ~1 ~ air \
  if block ~1 ~1 ~-1 air \
  if block ~1 ~1 ~ air \
  if block ~1 ~1 ~1 air \
  if block ~-1 ~2 ~-1 air \
  if block ~-1 ~2 ~ air \
  if block ~-1 ~2 ~1 air \
  if block ~ ~2 ~-1 air \
  if block ~ ~2 ~ air \
  if block ~ ~2 ~1 air \
  if block ~1 ~2 ~-1 air \
  if block ~1 ~2 ~ air \
  if block ~1 ~2 ~1 air \
  unless score @s kdx.kits.record >= "kdx.state.ok" kdx \
  run function kdx.kits:_get