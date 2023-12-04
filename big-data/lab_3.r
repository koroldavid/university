# 1. Згенерувати вектор (масив, таблиця даних) і додати в нього елементи
# NA. Очистити дані від NA з використанням функції is.na () [1].

# Створення вектора з елементами NA
my_vector <- c(1, 2, NA, 4, NA, 6)

# Очистка вектора від NA
my_vector_cleaned <- my_vector[!is.na(my_vector)]


# 2. Згенерувати таблицю даних з числовими і текстовими стовпцями.
# Очистити дані функцією complete.cases () [1].

# Створення таблиці даних
my_data <- data.frame(
  numeric_column = c(1, 2, 3, NA, 5),
  text_column = c("a", "b", NA, "d", "e")
)

# Очистка даних від NA
my_data_cleaned <- my_data[complete.cases(my_data), ]


# 3. Згенерувати числову таблицю даних з пропусками. З використанням
# функції preProcess з пакета caret заповнити пропуски передбаченими
# значеннями (середнє,медіана) [2].

library(caret)

# Створення числової таблиці даних з пропусками
my_numeric_data <- data.frame(
  numeric_column = c(1, 2, NA, 4, 5),
  another_numeric_column = c(NA, 2, 3, 4, NA)
)

# Заповнення пропусків середнім значенням
preprocessed_data <- preProcess(my_numeric_data, method = c("medianImpute"))
my_data_imputed <- predict(preprocessed_data, newdata = my_numeric_data)


# 4. Згенерувати два числових набори даних, додати в них викиди. З
# використанням функції boxplot() виявити викиди і видалити їх [3, 4].

# Створення двох числових наборів даних з викидами
dataset1 <- c(1, 2, 3, 4, 20)
dataset2 <- c(5, 6, 7, 8, 30)

# Виявлення викидів
boxplot(dataset1, dataset2, outline = TRUE)

# Видалення викидів
dataset1_cleaned <- dataset1[!dataset1 %in% boxplot.stats(dataset1)$out]
dataset2_cleaned <- dataset2[!dataset2 %in% boxplot.stats(dataset2)$out]


# 5. Згенеруйте таблицю даних, в якій дублюються рядки. Видаліть рядки
# з використанням функцій unique (), duplicated (). Порівняйте
# результати [5].

# Створення таблиці даних з дублікатами
my_duplicate_data <- data.frame(
  column1 = c(1, 2, 3, 2, 5),
  column2 = c("a", "b", "c", "b", "e")
)

# Видалення дублікатів
my_data_unique <- unique(my_duplicate_data)
my_data_duplicated_removed <- my_duplicate_data[!duplicated(my_duplicate_data), ]


# 6. Обробити пропуски в даних з використанням пакета mice [6].

library(mice)

# Створення даних з пропусками
incomplete_data <- data.frame(
  numeric_column = c(1, 2, NA, 4, 5),
  another_numeric_column = c(NA, 2, 3, 4, NA)
)

# Обробка пропусків з використанням mice
imputed_data <- mice(incomplete_data, method = "pmm")
completed_data <- complete(imputed_data)


# 7. Розібрати приклад з мультиколінеарності [7].

# ???