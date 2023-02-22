library(tidyverse)
# library(ggthemes)
# library(lubridate)

df <- read_csv("mls_salaries.csv") 

df1 <- df %>% filter(!is.na(base_salary)) %>% 
  filter(nchar(position) < 3) %>% 
  group_by(year, position) %>% 
  summarize(avg = mean(base_salary))

write_csv(df1, "salary_position.csv")



  
  
df1 <- df %>% 
  pivot_longer(3:ncol(df), names_to = "month",
               values_to = "number") %>% 
  mutate(month = case_when(
    month == "OCT" ~ 10,
    month == "NOV" ~ 11,
    month == "DEC" ~ 12,
    month == "JAN" ~ 1,
    month == "FEB" ~ 2,
    month == "MAR" ~ 3,
  ),
  year = ifelse(month %in% seq(10, 12),
                2020,
                2021),
  ymd = make_date(year = year, month = month, day = 1)) 

saveRDS(df1, "session06/output/tidy.RDS")
df2 <- read_csv("session06/data/SBO Enforcement Encounters MARFY21.csv",
                skip = 4) %>% 
  select(-Total)

df2a <- df2 %>% 
  pivot_longer(2:ncol(df2), names_to = "month",
               values_to = "number", values_drop_na = TRUE) %>% 
  mutate(year = as.numeric(str_extract(X1, "[^\\s]+")),
         month = case_when(
           month == "OCT" ~ 10,
           month == "NOV" ~ 11,
           month == "DEC" ~ 12,
           month == "JAN" ~ 1,
           month == "FEB" ~ 2,
           month == "MAR" ~ 3,
           month == "APR" ~ 4,
           month == "MAY" ~ 5,
           month == "JUN" ~ 6,
           month == "JUL" ~ 7,
           month == "AUG" ~ 8,
           month == "SEP" ~ 9,
         ),
         year = ifelse(month %in% seq(10, 12),
                       year - 1,
                       year),
         day = 1,
         ymd = make_date(year = year, month = month, day = day),
         number_str = format(number,
                             big.mark = ","),
         March2021 = ifelse(month == 3 & year == 2021,
                            paste0(number_str,
                                   "\n(March 2021)"),
                            NA)) %>% 
  select(-X1)

df2a

ggplot(data = df1) +
  geom_col(aes(ymd, number), fill = "gray") +
  facet_grid(X2 ~ X1, scales = "free_y") +
  theme_few() +
  labs(x = NULL)

ggplot(data = df2a) +
  geom_col(aes(ymd, number, fill = March2021)) +
  geom_text(aes(ymd, number, label = March2021),
            hjust = 1,
            vjust = -0.5,
            na.rm = TRUE) +
  ylim(0, 70000) +
  theme_few() +
  theme(legend.position = "none")