#!/bin/bash
# Copyright (C) 2025, kdxiaoyi & Streack. All right reserved.Licensed as MIT.

#定义变量
openjdk8="/usr/bin/jdk/jdk1.8.0_361/bin/java"
openjdk11="/usr/bin/jdk/jdk-11.0.18/bin/java"
openjdk17="/usr/bin/jdk/jdk-17.0.6/bin/java"
openjdk19="/usr/bin/jdk/jdk-19.0.2/bin/java"
openjdk21="/usr/bin/jdk/jdk-21.0.2/bin/java"
localjdk="java"
maxmem=$((SERVER_MEMORY - 1000))
errorlevel=0

#此处修改Server启动参数（允许换行符）
mcs_cmdline="
${openjdk21} -Xms1024M -Xmx${maxmem}M -XX:+UseG1GC
 -XX:+ParallelRefProcEnabled
 -XX:MaxGCPauseMillis=200
 -XX:+UnlockExperimentalVMOptions
 -XX:+DisableExplicitGC
 -XX:+AlwaysPreTouch
 -XX:G1NewSizePercent=40
 -XX:G1MaxNewSizePercent=50
 -XX:G1HeapRegionSize=16M
 -XX:G1ReservePercent=15
 -XX:G1HeapWastePercent=5
 -XX:G1MixedGCCountTarget=4
 -XX:InitiatingHeapOccupancyPercent=15
 -XX:G1MixedGCLiveThresholdPercent=90
 -XX:G1RSetUpdatingPauseTimePercent=5
 -XX:SurvivorRatio=32
 -XX:+PerfDisableSharedMem
 -XX:MaxTenuringThreshold=1
 -XX:+UseLargePages
 -XX:+EnableDynamicAgentLoading
 -Djava.io.tmpdir=/tmp
 -jar Streack.jar nogui"
mcs_cmdline=$(echo "$mcs_cmdline" | tr -d '\n')

#定义函数
szip() {
  if ! command -v zip &> /dev/null; then
    echo "[szip]错误：zip 命令未安装。请先安装 zip 软件包。"
    return 100
  fi
  local source_dir="$1"
  local target_dir="$2"
  local zip_filename="$3"
  if [[ ! -d "$source_dir" ]]; then
    echo "[szip]调用错误：源目录不存在: $source_dir"
    return 1
  fi
  if [[ ! -d "$target_dir" ]]; then
    echo "[szip]目标目录不存在，将创建: $target_dir"
    mkdir -p "$target_dir"
  fi
  local zip_file_path="$target_dir/$zip_filename"
  zip -r "$zip_file_path" "${source_dir}"/*
  if [[ $? -eq 0 ]]; then
    echo "[szip]压缩成功，zip 文件已生成: $zip_file_path"
  else
    echo "[szip]压缩失败"
    return 1
  fi
}

#定义命令集
function help {
  echo "Streack Console
mcs [arg]
  启动一次服务端
  添加参数以允许自动重启服务端
  [别名] m, mc
clear
  清理临时文件
  [别名] c
backup <part>
  备份指定数据，可以为：
    save - 存档数据
    conf - 插件与配置文件
    log - 日志文件
    all - 全部文件（不包括日志和library）
    whole - 全部文件（无过滤）
  注意：大小写严格
  备份后的文件放在./_backup下
  [别名] b
shelp
  显示此帮助信息
  [别名] streack
";errorlevel=0;return 0
}
function gobash {
  bash -c "$1"
  errorlevel=$?
  echo
  echo [Gobash] 您正在使用内联终端执行外部命令，这可能不按预期工作。请输入bash或sh启动一个独立会话。
  return $?
}
function newbash {
  echo [NewBash] 正在准备一个新的bash终端会话……
  tput smcup
  bash
  errorlevel=$?
  tput rmcup
  return $?
}
function newsh {
  echo [NewSh] 正在准备一个新的sh终端会话……
  sh
  errorlevel=$?
  return 0
}
function mcs {
  bash -c "${mcs_cmdline}"
  if [[ -z $1 ]];then 
    echo -e "\033[0;31m\033[0m"
    echo -e "\033[0;31m$(date +"%Y-%m-%d  %H:%M:%S.%6N  [$Z]")\033[0m"
    echo -e "\033[0;31m[mcs]服务器已停止\033[0m"
    exit 0
  else
    echo -e "\033[0;31m\033[0m"
    echo -e "\033[0;31m$(date +"%Y-%m-%d  %H:%M:%S.%6N  [$Z]")\033[0m"
    echo -e "\033[0;31m[mcs]服务器停止，3秒后自动重启\033[0m"
    echo -e "\033[0;31m\033[0m"
    sleep 3
    echo "$(date +"%Y-%m-%d  %H:%M:%S.%6N  [$Z]") ‖ 服务器已自动重启">>./_mcs_autoreboot.log
    mcs true
  fi
}
function clear {
  echo [rm] ./logs/*
  rm -rf ./logs
  echo [rm] ./crash-reports/*
  rm -rf ./crash-reports
  echo [rm] ./_mcs_autoreboot.log
  rm -f ./_mcs_autoreboot.log
  echo [rm] ./tmp/*
  rm -rf ./tmp
  echo Done!
  errorlevel=0
  return 0
}
function backup {
  local target_source=$1
  echo [backup] 正在准备文件……
  local timestamp_filename="$(date +"%Y-%m-%d  %H:%M:%S  [UTC%Z]").zip"
  mkdir -p ./tmp
  if [[ "${target_source}" == " save" ]];then
    mkdir -p ./_backup/Saves
    cp -ra ./world/ ./tmp/world/
    cp -ra ./world_the_end ./tmp/world_the_end/
    cp -ra ./world_nether ./tmp/world_nether/
    cd ./tmp
    szip . ./ "${timestamp_filename}"
    errorlevel=$?
    cd ..
    mv ./tmp/"${timestamp_filename}" ./_backup/Saves/
    rm -rf ./tmp
  elif [[ "${target_source}" == " log" ]];then
    mkdir -p ./_backup/Log
    cp -ra ./logs/ ./tmp/logs/
    cp -ra ./crash-reports ./tmp/crash-reports/
    cp -a ./_mcs_autoreboot.log ./tmp/_mcs_autoreboot.log
    cd ./tmp
    szip . ./ "${timestamp_filename}"
    errorlevel=$?
    cd ..
    mv ./tmp/"${timestamp_filename}" ./_backup/Log/
    rm -rf ./tmp
  elif [[ "${target_source}" == " conf" ]];then
    mkdir -p ./_backup/Conf
    #find . -maxdepth 1 -type f -exec cp -a {} "./tmp/" \;
    cp -ra ./config ./tmp/config/
    cp -ra ./plugins ./tmp/plugins/
    cp -a ./*.* ./tmp/
    cd ./tmp
    szip . ./ "${timestamp_filename}"
    errorlevel=$?
    cd ..
    mv ./tmp/"${timestamp_filename}" ./_backup/Conf/
    rm -rf ./tmp
  elif [[ "${target_source}" == " all" ]];then
    mkdir -p ./_backup/All
    find ./ -mindepth 1 -maxdepth 1 ! -name 'version' ! -name 'cache' ! -name 'library' ! -name 'logs' ! -name 'tmp' ! -name '_backup' ! -name 'crash-reports' -exec cp -ra {} ./tmp/ \;
    cd ./tmp
    szip . ./ "${timestamp_filename}"
    errorlevel=$?
    cd ..
    mv ./tmp/"${timestamp_filename}" ./_backup/All/
    rm -rf ./tmp
  elif [[ "${target_source}" == " whole" ]];then
    szip . ./_backup/whole/ "${timestamp_filename}"
    errorlevel=$?
  else
    echo "[backup] 错误的参数${target_source}。请参阅shelp中有关backup的帮助。"
    errorlevel=127
  fi
  return 0
}

#定义内置命令映射组
declare -A commands=(
  [""]=""
  ["shelp"]="help"
  ["streack"]="help"
  ["mcs"]="mcs"
  ["m"]="mcs"
  ["mc"]="mcs"
  ["bash"]="newbash"
  ["sh"]="newsh"
  ["clear"]="clear"
  ["c"]="clear"
  ["backup"]="backup"
  ["b"]="backup"
)

#显示欢迎信息
echo "============================================================="
echo -e "\033[0;36m"
echo " .d8888b.  888                                      888      "
echo "d88P  Y88b 888                                      888      "
echo "Y88b.      888                                      888      "
echo " \"Y888b.   888888 888d888 .d88b.   8888b.   .d8888b 888  888 "
echo "    \"Y88b. 888    888P\"  d8P  Y8b     \"88b d88P\"    888 .88P "
echo "      \"888 888    888    88888888 .d888888 888      888888K  "
echo "Y88b  d88P Y88b.  888    Y8b.     888  888 Y88b.    888 \"88b "
echo " \"Y8888P\"   \"Y888 888     \"Y8888  \"Y888888  \"Y8888P 888  888 "
echo -e "\033[0m"
echo "============================================================="
echo 欢迎！您正以$(whoami)的身份登录
echo 栈流Streack 控制终端 - $(uname -s) for $(uname -m)
echo 输入[shelp]以获取帮助信息

#伪终端循环
while true; do
  if [[ "${errorlevel}" == "0" ]];then 
    echo -en "\033[0;36mStreack\033[0;32m> \033[0m"
  else
    echo -en "\033[0;36mStreack\033[0;33m ${errorlevel} \033[0;31m> \033[0m"
  fi
  read user_input
  #退出命令
  if [[ "${user_input}" == "exit" ]]; then
    echo "[Exit] 以状态码 0 退出。"
    exit 0
  fi
  if [[ -z "${user_input}" ]];then
    continue
  fi
  cmd_name=$(echo "${user_input}" | awk '{print $1}')
  cmd_args=${user_input#"${cmd_name}"}
  if [[ -n "${commands[${cmd_name}]}" ]]; then
    ${commands[${cmd_name}]} "${cmd_args}"
    continue
  fi
  gobash ${user_input}
done