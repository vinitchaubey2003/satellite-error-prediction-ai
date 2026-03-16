import pandas as pd

data = pd.read_csv("dataset/clean_satellite_data.csv")

print(data.head())

X = data[["x_error","y_error","z_error"]]
y = data["sat_clock_error"]

from sklearn.model_selection import train_test_split

X_train,X_test,y_train,y_test = train_test_split(
    X,y,test_size=0.2,random_state=42
)

from sklearn.ensemble import RandomForestRegressor

model = RandomForestRegressor()

model.fit(X_train,y_train)

pred = model.predict(X_test)

print(pred[:5])

from sklearn.metrics import mean_squared_error

mse = mean_squared_error(y_test,pred)

print("MSE:",mse)

from sklearn.metrics import mean_squared_error, r2_score

pred = model.predict(X_test)

mse = mean_squared_error(y_test, pred)
r2 = r2_score(y_test, pred)

print("MSE:", mse)
print("R2 Score:", r2)

import joblib

joblib.dump(model,"satellite_model.pkl")