data modify storage kdx.kits:chest items set from block ~ ~ ~ Items
execute if block ~ ~ ~ minecraft:chest run tellraw @s [{"text":"已设置礼包","color":"green"}]
execute unless block ~ ~ ~ minecraft:chest run tellraw @s [{"text":"无法设置礼包：您必须站在一个箱子上","color":"red"}]