execute store result score kdx.cleaner:killed kdx run kill @e[type=minecraft:item,predicate=!kdx.cleaner:whitelist]
scoreboard players operation kdx.cleaner:killed.sum kdx += kdx.cleaner:killed kdx
execute store result score kdx.cleaner:killed kdx run kill @e[type=minecraft:falling_block,predicate=!kdx.cleaner:whitelist_fb]
scoreboard players operation kdx.cleaner:killed.sum kdx += kdx.cleaner:killed kdx
tellraw @a [\
  {"text": "扫地姬对累计","color": "white"},\
  {"score": {"objective": "kdx", "name": "kdx.cleaner:killed.sum"},"color": "yellow"},\
  {"text": "份掉落物","color": "yellow"},\
  {"text": "使用了技能","color": "white"},\
  {"text": "[冥河彼岸]","color": "aqua","hoverEvent": {"action": "show_text","contents": [\
    {"text": "§r§b冥河彼岸\n§r\n§r§f将全部未持有§b[扫除豁免]§r§f的掉落物丢入冥河中，让其降解在死寂无声的冥河中，随后此技能进入10分钟的冷却。\n§r\n§r§7她自诞生以来便被赋予执行「归零」的任务。但，有的人唾弃她，说她把自己的XX神装清走了；有的人喜欢她，说她护得服务器安康。不论旁人如何评价她，她也不与之争辩，只是一味地做着她的「天职」。"}\
    ]}},\
  {"text": "——效果拔群！","color": "#50BE90"}]
scoreboard players set kdx.cleaner:killed.sum kdx 0
bossbar set kdx.cleaner:timer visible false
execute as @a at @s run playsound minecraft:block.beacon.activate voice @a ~ ~ ~ 1 1
execute unless score "kdx.cleaner:disabled" kdx >= "kdx:state.ok" kdx run function kdx.cleaner:new_session
execute if score "kdx.cleaner:disabled" kdx >= "kdx:state.ok" kdx run advancement revoke @a only kdx.cleaner:enabled