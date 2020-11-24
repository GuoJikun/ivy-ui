# Table 表格

## 基础用法

<ivy-table id="table" data-source='[{"date":"2016-05-02","name":"王小虎","address":"上海市普陀区金沙江路 1518 弄"},{"date":"2016-05-04","name":"王小虎","address":"上海市普陀区金沙江路 1517 弄"},{"date":"2016-05-01","name":"王小虎","address":"上海市普陀区金沙江路1519 弄"},{"date":"2016-05-03","name":"王小虎","address":"上海市普陀区金沙江路 1516 弄"}]'>
    <ivy-table-column label="姓名" prop="name" width="100px"></ivy-table-column>
    <ivy-table-column label="日期" prop="date" min-width="120px"></ivy-table-column>
    <ivy-table-column label="地址" prop="address"></ivy-table-column>
</ivy-table>

```html
<ivy-table
    id="table"
    data-source='[{"date":"2016-05-02","name":"王小虎","address":"上海市普陀区金沙江路 1518 弄"},{"date":"2016-05-04","name":"王小虎","address":"上海市普陀区金沙江路 1517 弄"},{"date":"2016-05-01","name":"王小虎","address":"上海市普陀区金沙江路1519 弄"},{"date":"2016-05-03","name":"王小虎","address":"上海市普陀区金沙江路 1516 弄"}]'
>
    <ivy-table-column label="姓名" prop="name" width="100px"></ivy-table-column>
    <ivy-table-column label="日期" prop="date" min-width="120px"></ivy-table-column>
    <ivy-table-column label="地址" prop="address"></ivy-table-column>
</ivy-table>
```

## Table Attrs

| 名称        | 说明           | 类型        | 可选值 | 默认值 |
| ----------- | -------------- | ----------- | ------ | ------ |
| data-source | table 的数据源 | json 字符串 | -      | -      |

## TableItem Attrs

| 名称      | 说明             | 类型   | 可选值 | 默认值 |
| --------- | ---------------- | ------ | ------ | ------ |
| prop      | 数据源中的 key   | String | -      | -      |
| label     | 表格的 title     | String | -      | -      |
| width     | 表格列的宽度     | String | -      | -      |
| min-width | 表格列的最小宽度 | String | -      | -      |
