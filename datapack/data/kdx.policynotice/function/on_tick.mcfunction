scoreboard players add @a kdx.policynotice.update 1
execute as @a[scores={kdx.policynotice.update=0..199}] run function kdx.policynotice:update
execute as @a[scores={kdx.policynotice.update=0..199}] run scoreboard players add @s kdx.policynotice.update 200
scoreboard players remove @a kdx.policynotice.update 1
advancement revoke @a only kdx.policynotice:update_check