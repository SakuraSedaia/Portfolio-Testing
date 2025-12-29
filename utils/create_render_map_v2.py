"""
This script is meant to speed up the process of adding new images to the render list
"""
from pathlib import Path
import os
import shutil
import json
import cv2

output_json = "RenderDictionary.json"
output_root = "./output"
source_root = "./renders"
paths = ["Env", "Char", "CharEnv"]


PathFinal = [
    {
        "label": "Characters in Environments",
        "path": f"/{paths[2]}/",
        "images": [],
    },
    {
        "label": "Environments",
        "path": f"/{paths[0]}/",
        "images": [],
    },
    {
        "label": "Character Portraits",
        "path": f"/{paths[1]}/",
        "images": [],
    },
]


class FilePaths:
    """Manipulates the Filename and Path of a file"""
    def __init__(self, src):
        '''
        Generates the associated Filename and Path for a new jpeg file
        '''
        self.src = src

    def suffix(self, suffix, path=None):
        '''
        Method for changing the suffix of a file

        :param suffix: The suffix you want for the file, whether it be PNG, JPEG, or JSON
        '''
        n = self.src.with_suffix('').name
        f = f"{n}.{suffix}"

        return f

    def path(self, path):
        '''
        Generates a Path String from the given inputs

        :param path: Define the output path
        '''
        d = f"{path}/{self.src}"

        return d


class GenerateFiles:
    def __init__(self, content):
        self.content = content

    def jpeg(self, dst):
        '''Converts the PNG to JPEG'''

        jpeg_file = FilePaths(source).suffix("jpeg").replace(" ", "_")

        if Path(dst).exists():  # Checks if the File already exists, skipping if True
            print(f"/{path}/{Path(jpeg_file).name}", "Exists, skipping file")
            return 'file-exists'

        read_png = cv2.imread(self.content)

        cv2.imwrite(
            dst, read_png, [int(cv2.IMWRITE_JPEG_QUALITY), 75])

        print("Reading file:", self.content)

        print("Saved file", f"/{path}/{Path(jpeg_file).name}")
        return 'finished'


    def json(self, file):
        '''
        Docstring for JSON

        :param file: The output file
        '''

        return 'finished'


# Execute Functions
if Path(output_root).exists() is not True:
    os.mkdir(output_root)


for p, path in enumerate(paths):
    if Path(f"{output_root}/{path}").exists() is not True:
        os.mkdir(f"{output_root}/{path}")

    filedir = Path(f"{source_root}/{path}").absolute()
    dstpath = Path(f"{output_root}/{path}").absolute()

    filepath = os.listdir(filedir)
    for i, img in enumerate(filepath):
        GenerateFiles(img).jpeg(f"{dstpath}/{img}")


# shutil.copy2(src=ImageSource, dst=ImageDestination)
#    ImageInfo = {
#        "Name": "",
#        "Type": "",
#        "PublishMonth": "",
#        "PublishYear": "",
#        "Description": "",
#        "Filename": FilteredString,
#        "FilePath": "",
#    }
#    if Destination.exists() is not True:
#        Destination.mkdir(parents=True, exist_ok=True)
