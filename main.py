from typing import Annotated

from fastapi import FastAPI, File, UploadFile
from dl.model import dpt
from PIL import Image 
import io 
import datetime 
from starlette.middleware.cors import CORSMiddleware
import torch 
from transformers import AutoImageProcessor, DPTForDepthEstimation


app = FastAPI()
device = "cuda" if torch.cuda.is_available() else "cpu"
image_processor = AutoImageProcessor.from_pretrained("Intel/dpt-swinv2-tiny-256")
model = DPTForDepthEstimation.from_pretrained("Intel/dpt-swinv2-tiny-256").to(device)
model.eval()

origins = [
    "*"
    # "localhost:3000",
    # "35.202.74.253:80"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/images/")
async def process_frame(file: bytes = File(...)):
    # read image from bytes 
    image = Image.open(io.BytesIO(file))
    timestamp = int(datetime.datetime.now().strftime("%Y%m%d%H%M%S"))
    print(image, timestamp)
    return {"depth": dpt(image, image_processor, model), 
            "timestamp": timestamp}