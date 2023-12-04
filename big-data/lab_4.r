# 1. Встановити пакет CARET, виконати команду names (getModelInfo ()),
# ознайомитися зі списком доступних методів вибору ознак. Виконайте
# графічний розвідувальний аналіз даних з використання функції featurePlot ()
# для набору даних з довідкового файлу пакета CARET:
# x <- matrix (rnorm (50 * 5), ncol = 5)
# y <- factor (rep (c ( "A", "B"), 25))
# Зберегти отримані графіки в * .jpg файли. Зробити висновки.


# Встановлення пакету CARET
install.packages("caret")

# Завантаження пакету CARET
library(caret)

# Виведення доступних методів вибору ознак
feature_selection_methods <- names(getModelInfo())
print(feature_selection_methods)

# Створення довідкового набору даних
x <- matrix(rnorm(50 * 5), ncol = 5)
y <- factor(rep(c("A", "B"), 25))

# Створення data frame
my_data <- data.frame(x, y)

# Використання функції featurePlot()
featurePlot(x = my_data[, -ncol(my_data)], y = my_data$y, plot = "jpg")


# 2. З використанням функцій з пакета Fselector [2] визначити важливість
# ознак для рішення задачі класифікації. Використовувати набір data(iris).
# Зробити висновки.

# Встановлення пакету Fselector
install.packages("FSelector")

# Завантаження пакету Fselector
library(FSelector)

# Використання функцій для визначення важливості ознак
my_dataset <- data(iris)
importance_result <- information.gain(Species ~ ., my_dataset)
print(importance_result)


# 3. Встановіть пакет Boruta і проведіть вибір ознак для набору даних
# data("Ozone") [3, 4]. Побудувати графік boxplot, зробити висновки.

# Встановлення пакету Boruta
install.packages("Boruta")

# Завантаження пакету Boruta
library(Boruta)

# Використання функції Boruta для вибору ознак
my_dataset_ozone <- data(Ozone)
boruta_result <- Boruta(Ozone ~ ., data = my_dataset_ozone)

# Побудова графіка boxplot
boxplot(boruta_result, main = "Boruta Feature Importance")
