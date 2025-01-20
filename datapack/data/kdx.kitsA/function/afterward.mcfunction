execute at @a[tag=kdx.kits.process] run kill @e[type=item,nbt={Item:{id:"minecraft:chest"}},limit=1,sort=nearest,nbt=!{Item:{components:{}}}]
execute at @a[tag=kdx.kits.process] run fill ~-2 ~ ~-2 ~2 ~2 ~2 minecraft:air replace minecraft:barrier
execute as @a[tag=kdx.kits.process] run tag @s remove kdx.kits.process