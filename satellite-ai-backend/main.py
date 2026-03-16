from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import joblib

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("satellite_model.pkl")


class SatelliteInput(BaseModel):
    x_error: float
    y_error: float
    z_error: float


@app.get("/")
def home():
    return {"message": "Satellite Error Prediction API Running"}


@app.post("/predict")
def predict(data: SatelliteInput):

    prediction = model.predict([[data.x_error,data.y_error,data.z_error]])

    error = float(prediction[0])

    return {
        "predicted_sat_clock_error": error,
        "status": "High Error" if abs(error) > 1 else "Normal"
    }


@app.get("/error-trend")
def error_trend():

    data = pd.read_csv("dataset/clean_satellite_data.csv")

    data = data.tail(50)

    return {
        "time": data["utc_time"].tolist(),
        "error": data["sat_clock_error"].tolist()
    }


@app.post("/predict-csv")
async def predict_csv(file: UploadFile = File(...)):

    df = pd.read_csv(file.file)

    # rename columns from dataset
    df = df.rename(columns={
        "x_error (m)": "x_error",
        "y_error (m)": "y_error",
        "z_error (m)": "z_error"
    })

    predictions = model.predict(
        df[["x_error","y_error","z_error"]]
    )

    df["predicted_sat_clock_error"] = predictions

    return {
        "predictions": df["predicted_sat_clock_error"].tolist()
    }