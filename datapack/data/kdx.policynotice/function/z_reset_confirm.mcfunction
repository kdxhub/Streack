scoreboard objectives remove kdx.policynotice.update
scoreboard objectives add kdx.policynotice.update dummy "HasReadUpdatedPolicy"
tellraw @a [{"text": "✓ 已推送隐私政策更新","color": "green"},{"text": "——操作者：","color": "white"},{"selector": "@s","color": "white"}]