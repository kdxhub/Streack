scoreboard players add @s kdx.kits.record 200
execute at @s run playsound minecraft:block.anvil.use master @s ~ ~ ~ 1.0 1.0
effect give @s minecraft:slowness 1 126 true
setblock ~ ~1 ~ minecraft:chest replace
data modify block ~ ~1 ~ Items set from storage kdx.kits:chest items
fill ~-1 ~ ~-1 ~1 ~2 ~1 minecraft:barrier keep
tag @s add kdx.kits.process
effect give @s minecraft:resistance 1 4 true
summon minecraft:tnt ~ ~1 ~ {Silent:true,fuse:0,NoGravity:true}
schedule function kdx.kits:afterward 2t append
tellraw @s [{"text":"✓ 你收到了一个礼包！","color":"gold"}]