# 1. Згенерувати великий масив даних і записати в один файл, встановити
# пакет purrr. Записати масив даних по частинах в кілька файлів.
# Сформувати репрезентативну вибірку обмеженого розміру.

# Встановлення пакету purrr
install.packages("purrr")
library(purrr)

# Згенерувати великий масив даних
big_array <- runif(10000)

# Записати масив даних в один файл
write.table(big_array, "big_array.txt")

# Записати масив даних по частинах в кілька файлів
split_array <- split(big_array, ceiling(seq_along(big_array)/2000))
walk2(seq_along(split_array), split_array, ~write.table(.y, paste0("part", .x, ".txt")))

# Сформувати репрезентативну вибірку обмеженого розміру
representative_sample <- sample(big_array, 100)


# 2. Виконати завантаження даних з використанням різних стратегій. Зробити
# висновки. Встановити пакети data.table, sqldf, ff

# Встановлення пакетів
install.packages(c("data.table", "sqldf", "ff"))
library(data.table)
library(sqldf)
library(ff)

# Виконати завантаження даних з використанням різних стратегій (залежно від конкретних вимог)
# Наприклад, для data.table:
dt <- data.table(big_array)

# Для sqldf можна використати SQL-запити
sqldf("CREATE TABLE mytable AS SELECT * FROM dt")

# Для ff:
ff_df <- as.ffdf(big_array)


# 3. Встановити і завантажити бібліотеки sqldf і nycflights13
install.packages(c("sqldf", "nycflights13"))
library(sqldf)
library(nycflights13)


# 4. Ознакомитись зі структурою набору даних flights. Обчислити кількість
# спостережень для всіх перевізників carrier в таблиці flights. Відобразити в
# консолі значення полей dep_time, dep_delay, arr_time, carrier,tailnum з
# таблиці flights (перші і останні 5 рядків). Обчислити середній час
# затримки прибуття (mean_arr_delay) і відправлення (mean_dep_delay) для
# різних перевізників (carrier).

# Ознайомлення зі структурою набору даних flights
str(flights)

# Обчислення кількості спостережень для всіх перевізників
table(flights$carrier)

# Відображення значень полів dep_time, dep_delay, arr_time, carrier, tailnum
head(flights[, c("dep_time", "dep_delay", "arr_time", "carrier", "tailnum")])
tail(flights[, c("dep_time", "dep_delay", "arr_time", "carrier", "tailnum")])

# Обчислення середнього часу затримки прибуття та відправлення для різних перевізників
mean_arr_delay <- tapply(flights$dep_delay, flights$carrier, mean)
mean_dep_delay <- tapply(flights$arr_delay, flights$carrier, mean)


# 5. Згенерувати data.frame з трьома стовпцями і 100 рядками. Перетворити
# дані з широкого в довгий формат. Встановити пакет reshape2.

# Встановлення пакету reshape2
install.packages("reshape2")
library(reshape2)

# Згенерувати data.frame з трьома стовпцями і 100 рядками
wide_df <- data.frame(
  ID = 1:100,
  A = rnorm(100),
  B = rnorm(100),
  C = rnorm(100)
)

# Перетворення даних з широкого в довгий формат
long_df <- melt(wide_df, id.vars = "ID")
