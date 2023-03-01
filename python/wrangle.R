library(tidyverse)
# library(ggthemes)
# library(lubridate)

df <- read_csv("mls_salaries.csv") 

df1 <- df %>% filter(!is.na(base_salary)) %>% 
  filter(nchar(position) < 3) %>% 
  group_by(year, position) %>% 
  summarize(avg = mean(base_salary))

write_csv(df1, "salary_position.csv")


df2 <- read_csv("boulder.csv")

df3 <- df2 %>% pivot_wider(names_from=category, values_from=time)

write_csv(df3, "boulder_wide.csv")

soccer <- read_csv("mls_salaries.csv") %>% drop_na()
df <- soccer %>% arrange(desc(base_salary)) %>% slice_max(base_salary, n=10)

names <- soccer %>% 
  mutate(first_last = paste(first_name, last_name, sep = " "))

all_years <- names %>% 
  group_by(first_name, last_name) %>% 
  count(first_name, last_name) %>% 
  filter(n > 5) %>% 
  ungroup() %>% 
  mutate(first_last = paste(first_name, last_name, sep = " ")) %>% 
  select(first_last) %>% 
  deframe()



top <- names %>% 
  filter(first_last %in% all_years) %>% 
  group_by(first_name, last_name) %>% 
  summarize(avg_salary=mean(base_salary)) %>% 
  arrange(desc(avg_salary)) %>% 
  ungroup() %>% 
  slice_head(n=5) %>% 
  mutate(first_last = paste(first_name, last_name, sep = " ")) %>% 
  select(first_last) %>% 
  deframe()

tracking <- names %>% 
  filter(first_last %in% top)

wider <- tracking %>% 
  select(first_last, base_salary, year) %>% 
  pivot_wider(names_from=first_last, values_from=base_salary) %>% 
  arrange(year) 

write_csv(wider, "top_paid.csv")


ggplot(data = tracking, aes(year, base_salary, color=first_last)) +
  geom_line() +
  geom_point()


# ggplot(data = df1, aes(ymd, number)) +
#   geom_col() +
#   facet_grid(X2 ~ X1, scales = "free") +
#   theme_few()
