# Table 表格

## 基础用法

<ivy-table id="table" dataSource='[{"date":"2016-05-02","name":"王小虎","address":"上海市普陀区金沙江路 1518 弄"},{"date":"2016-05-04","name":"王小虎","address":"上海市普陀区金沙江路 1517 弄"},{"date":"2016-05-01","name":"王小虎","address":"上海市普陀区金沙江路1519 弄"},{"date":"2016-05-03","name":"王小虎","address":"上海市普陀区金沙江路 1516 弄"}]'>
    <ivy-table-column label="姓名" prop="name" width="100px"></ivy-table-column>
    <ivy-table-column label="日期" prop="date" min-width="120px"></ivy-table-column>
    <ivy-table-column label="地址" prop="address"></ivy-table-column>
</ivy-table>

<script>


</script>
