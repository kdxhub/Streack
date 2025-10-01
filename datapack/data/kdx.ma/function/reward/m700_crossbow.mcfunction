give @s minecraft:crossbow\
  [\
    item_name='{"text":"M700战术狙击弩","font":"minecraft:uniform","color":"#4c8dae"}',\
    lore=[\
      '{"text":"6x350mm口径狙击利器，百米开外可轻松取敌人首级。注：严禁装填烟花火箭等高爆弹药，否则可能使材料结构受损。","italic":false,"color":"white"}',\
      '{"text":"  "}',\
      '{"text":"快速枪机 I","italic":false,"color":"gray"}',\
      '{"text":"扩容耐久 V","italic":false,"color":"gray"}',\
      '{"translate":"enchantment.minecraft.mending","fallback":"经验修补","italic":false,"color":"gray","extra":[" I"]}',\
      '{"text":" "}',\
      '{"text":"当装备时：","italic":false,"color":"gray"}',\
      '{"text":"基础伤害 14","italic":false,"color":"blue"}',\
      '{"text":"射击速度 48发/分钟","italic":false,"color":"blue"}'\
    ],\
    rarity=epic,\
    max_damage=10,\
    enchantment_glint_override=true,\
    enchantments={show_in_tooltip:false,\
      levels:{\
        piercing:1,\
        power:3,\
        binding_curse:1,\
        mending:1\
      }\
    },\
    minecraft:charged_projectiles=[{"id":"arrow"}]\
  ]