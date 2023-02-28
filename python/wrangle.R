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
