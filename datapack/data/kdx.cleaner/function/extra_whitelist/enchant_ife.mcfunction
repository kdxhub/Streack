execute if predicate kdx.cleaner:enchant_detect run tellraw @s "§r§c目标物品上已有相同或冲突魔咒"
execute if entity @s[gamemode=!creative] if predicate kdx.cleaner:enchant_detect run function kdx.cleaner:extra_whitelist/get_book
execute unless predicate kdx.cleaner:enchant_detect run item modify entity @s weapon.offhand kdx.cleaner:extra_whitelist_adder
advancement revoke @s only kdx.cleaner:enchant_detect