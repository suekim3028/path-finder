from .utils import downsize

import torch
import numpy as np
from PIL import Image


def dpt(image, image_processor, model):
    device= model.device
    # prepare image for the model
    inputs = image_processor(images=image, return_tensors="pt").to(device)

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

    depth_img_resize = (downsize(depth, 8, 4)/255.)
    depth_img_resize[:, 0] = 0
    depth_img_resize[:, -1] = 0
    depth_img_resize = np.where(depth_img_resize == np.median(depth_img_resize), np.max(depth_img_resize), 0)

    
    return depth_img_resize.tolist()
