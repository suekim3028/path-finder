from .utils import downsize
from transformers import AutoImageProcessor, DPTForDepthEstimation
import torch
import numpy as np
from PIL import Image


def dpt(image):

    image_processor = AutoImageProcessor.from_pretrained("Intel/dpt-swinv2-tiny-256")
    model = DPTForDepthEstimation.from_pretrained("Intel/dpt-swinv2-tiny-256")

    # prepare image for the model
    inputs = image_processor(images=image, return_tensors="pt")

    with torch.no_grad():
        outputs = model(**inputs)
        predicted_depth = outputs.predicted_depth

    # interpolate to original size
    prediction = torch.nn.functional.interpolate(
        predicted_depth.unsqueeze(1),
        size=image.size[::-1],
        mode="bicubic",
        align_corners=False,
    )

    # visualize the prediction
    output = prediction.squeeze().cpu().numpy()
    formatted = (output * 255 / np.max(output)).astype("uint8")
    depth = Image.fromarray(formatted)
    # depth.save("depth.jpg")

    depth_img_resize = downsize(depth, 8, 4).tolist()
    
    
    return depth_img_resize
