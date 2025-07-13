#!/bin/bash
#By DeepSeek

# 检查参数数量
if [ "$#" -ne 2 ]; then
    echo "用法: $0 目录1 目录2"
    echo "目录1: 包含替换文件的源目录"
    echo "目录2: 要被替换的目标目录"
    exit 1
fi

dir1="$1"
dir2="$2"

# 检查目录是否存在
if [ ! -d "$dir1" ]; then
    echo "错误: 目录 '$dir1' 不存在"
    exit 1
fi

if [ ! -d "$dir2" ]; then
    echo "错误: 目录 '$dir2' 不存在"
    exit 1
fi

# 遍历目录2中的所有文件（包括子目录）
find "$dir2" -type f | while read -r file2; do
    # 获取相对路径和文件名
    rel_path="${file2#$dir2/}"
    file1="$dir1/$rel_path"
    
    # 检查目录1中是否存在同名文件
    if [ -f "$file1" ]; then
        echo "替换: $file2 用 $file1"
        cp "$file1" "$file2"
    fi
done

echo "替换完成"