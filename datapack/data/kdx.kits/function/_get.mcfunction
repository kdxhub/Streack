scoreboard players add @s kdx.kits.record 200
execute at @s run playsound minecraft:block.anvil.use master @s ~ ~ ~ 1.0 1.0
summon item ~ ~ ~ {Item:{id:"minecraft:bundle",count:1b,components:{custom_name:'{"text":"礼包奖励","color":"gold","italic":false}',custom_data:{kdxKits:1b}}},Fire:60s,Health:0,PickupDelay:5,Tags:["kdx_kits_give"],NoGravity:1b}
data modify entity @n[type=item,nbt={Item:{id:"minecraft:bundle"}}] Item.components.minecraft:bundle_contents set from storage kdx.kits:chest items
tellraw @s [{"text":"✓ 你收到了一个礼包！","color":"gold"}]