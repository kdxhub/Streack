execute if predicate kdx.cleaner:enchant_detect run function kdx.cleaner:extra_whitelist/get_book
execute unless predicate kdx.cleaner:enchant_detect run item modify entity @s weapon.offhand kdx.cleaner:extra_whitelist_adder
advancement revoke @s only kdx.cleaner:enchant_detect