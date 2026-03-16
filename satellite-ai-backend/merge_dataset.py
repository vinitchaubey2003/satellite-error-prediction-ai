import pandas as pd

df1 = pd.read_csv("dataset/file1.csv")
df2 = pd.read_csv("dataset/file2.csv")
df3 = pd.read_csv("dataset/file3.csv")

combined = pd.concat([df1, df2, df3])

combined.to_csv("dataset/satellite_dataset.csv", index=False)

print("Dataset merged successfully")