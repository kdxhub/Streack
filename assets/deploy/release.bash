#!/bin/bash

rm -f release/streack_dp.zip release/streack_res.zip
zip -r release/streack_dp.zip datapack
zip -r release/streack_res.zip resourcepack
git add release/streack_dp.zip release/streack_res.zip
git commit -m "打包新版本(VSCode Workflow Auto Commit)"
echo Jobs done!
exit 0