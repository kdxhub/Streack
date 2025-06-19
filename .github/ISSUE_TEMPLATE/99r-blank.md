name: 为仓库新建空白Issue / Create Blank Issue for THIS REPO
description: 请注意匹配模板的Issue却不使用模板可能被消极处理 / Use temple issue if possible, or your issue will be processed negatively.
title: ""
labels: [""]
assignees:
  - kdxiaoyi
  - kdxhub
body:

  - type: checkboxes
    id: notice
    attributes:
      label: 您已知悉并确认：
      options:
        - label: 该模板适用于**仓库**的相关问题
          required: true
        - label: 已预先查阅[相关文档](https://kdxiaoyi.top/Streack/doc)和检索相似ISSUE
          required: true
    validations:
      required: true

  - type: textarea
    id: what
    attributes:
      label: 内容
    validations:
      required: true