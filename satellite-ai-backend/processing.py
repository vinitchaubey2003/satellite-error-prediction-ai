import pandas as pd

data = pd.read_csv("dataset/satellite_dataset.csv")

print(data.head())
print(data.columns)
print(data.info())

data = data.fillna(0)

data = data.dropna()

data.columns = [
    "utc_time",
    "x_error",
    "y_error",
    "z_error",
    "sat_clock_error",
    "y_error2"
]

data["utc_time"] = pd.to_datetime(data["utc_time"])
data = data.sort_values("utc_time")

data.to_csv("clean_satellite_data.csv", index=False)