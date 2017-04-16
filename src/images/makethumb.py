#!/usr/bin/python

from __future__ import print_function
import time
import argparse
from PIL import Image

PIC_QUALITY = 50
THUMB_SIZE = (308, 174)


def Thumb(fin, fout):
    message = {"error": None}

    print("Starting image conversion")
    t1 = time.time()
    try:
        typ, _ = get_image_type(fin)
        if typ == "JPEG" or "TIFF" or "PNG" or "BMP":
            ori = Image.open(fin)
            ori.thumbnail(THUMB_SIZE)
            ori.save(fout, "JPEG", quality=PIC_QUALITY)
        else:
            message["error"] = "Image type {} not supported.".format(typ)
            return message
    except Exception as e:
        message["error"] = e
        return message
    t2 = time.time()
    print("Performed image conversion in: {:.3f}s.".format(t2 - t1))

    return message


def get_image_type(name):
    try:
        typ = Image.open(name).format
        return typ, None
    except Exception as e:
        return "", e


if "__main__" == __name__:
    p = argparse.ArgumentParser(description='Makes thumbnails from images')
    p.add_argument("-i", "--in", type=str, required=True, help='Input image.')
    p.add_argument("-o", '--out', type=str, required=True, help='Output image')
    args = vars(p.parse_args())

    err = Thumb(args["in"], args["out"])
    if err["error"] is not None:
        print("Ops something bad happend!", err["error"])
