execute unless data storage kdx:initialized {status: 1b} run function kdx:system/initialize
tellraw @a [{"text":"Streack Service Datapack 已加载\n","color":"aqua"},{"text":"作者@kdxiaoyi","color":"white","clickEvent":{"action":"open_url","value":"http://gitee.com/kdxiaoyi/Streack/readme.md#Streack Service Datapack"}}]
function kdx:system/call
say [#] Server Started!

function kdx.kits:on_load