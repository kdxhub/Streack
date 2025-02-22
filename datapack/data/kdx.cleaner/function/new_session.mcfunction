scoreboard players set "kdx.cleaner:timing.enable" kdx 0
scoreboard players set "kdx.cleaner:timing" kdx 0
bossbar set kdx.cleaner:timer value 0

# 定时
schedule function kdx.cleaner:timer/1min 540s
schedule function kdx.cleaner:timer/5s 595s
schedule function kdx.cleaner:timer/4s 596s
schedule function kdx.cleaner:timer/3s 597s
schedule function kdx.cleaner:timer/2s 598s
schedule function kdx.cleaner:timer/1s 599s
schedule function kdx.cleaner:sweep 600s