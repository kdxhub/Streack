bossbar add kdx.cleaner:timer \
  [{"text": "扫地姬","color": "#A352D1"},\
  {"text": "技能蓄力进度","color": "#CA74AE","underlined": false}]
bossbar set kdx.cleaner:timer max 1200
bossbar set kdx.cleaner:timer color white
bossbar set kdx.cleaner:timer style progress
bossbar set kdx.cleaner:timer value 0
execute unless score "kdx.cleaner:disabled" kdx >= "kdx:state.ok" kdx run function kdx.cleaner:new_session