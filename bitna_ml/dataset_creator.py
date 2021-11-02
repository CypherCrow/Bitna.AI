import os
import sys
import pandas as pd
from django.utils import timezone
from torchvision.io import read_image

from bitna_website.bitna_web_app.models import Dataset

class CustomImageDataset(Dataset):
    def __init__(self, annotations_file, img_dir, transform=None, target_transform=None): 
        self.img_labels = pd.read_csv(annotations_file)

    def __len__(self): 
        return len(self.img_labels)

    def __getitem__(self, idx): 
        img_path = os.path.join(self.img_dir, self.img_labels.iloc[idx, 0])
        image = read_image(img_path)

def main(): 
    pass

if __name__ == "__main__": 
    main()




