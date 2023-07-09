# MySQL lower_case

## lower_case_table_names

- 0 Table names are stored and compared in a case-sensitive manner.
- 1 Table names are stored in lowercase on disk, but comparisons are case-insensitive.
- 2 Table names are stored and compared in the case given, but comparisons are lowercase.

Default value

- linux: 0
- Windows: 1
- Mac OS X: 2

```sh
mysql -u root -p
show global variables like '%lower_case%';

+------------------------+-------+
| Variable_name          | Value |
+------------------------+-------+
| lower_case_file_system | ON    |
| lower_case_table_names | 0     |
+------------------------+-------+
```
