import numpy as np


def downsize(image, m=4, n=8):
    img_resize = image.resize((4, 8))
    img_array = np.array(img_resize)
    return img_array
