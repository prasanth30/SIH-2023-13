# -*- coding: utf-8 -*-
"""
Created on Tue Nov 17 21:40:41 2020

@author: win10
"""

# 1. Library imports
import requests
import io
import uvicorn
from fastapi import FastAPI
import albumentations as A
from albumentations.pytorch import ToTensorV2
import numpy as np
import torchvision
import pickle
import pandas as pd
from PIL import Image
import torch.nn as nn
# 2. Create the app object
app = FastAPI()
pickle_in =open("path to the model","rb")   
classifier=pickle.load(pickle_in)
model = classifier
fol=['Acne,Rosacea,Actinic Keratosis Basal Cell Carcinoma and other Malignant Lesions',
 'Atopic Dermatitiss',
 'Bullous Disease ',
 'Cellulitis Impetigo and other Bacterial Infections',
 'Eczema ',
 'Exanthems and Drug Eruptions',
 'Hair Loss  Alopecia and other Hair Diseases',
 'Herpes HPV and other STDs ',
 'Light Diseases and Disorders of Pigmentation',
 'Lupus and other Connective Tissue diseases',
 'Melanoma Skin Cancer Nevi and Moles',
 'Nail Fungus and other Nail Disease',
 'Poison Ivy  and other Contact Dermatitis',
 'Psoriasis es Lichen Planus and related diseases',
 'Scabies Lyme Disease and other Infestations and Bites',
 'Seborrheic Keratoses and other Benign Tumors',
 'Systemic Disease',
 'Tinea Ringworm Candidiasis and other Fungal Infections',
 'Urticaria Hives',
 'Vascular Tumors',
 'Vasculitis ',
 'Warts Molluscum and other Viral Infections']
def transformer(img):
        transform = A.Compose([
        A.CenterCrop(height=300, width=300),
        ToTensorV2()
        ])
        return transform(image=img)
def predict(file_path): 
    response = requests.get(file_path)
    
    if response.status_code == 200:
        # Open the image from the downloaded content   
        img = Image.open(io.BytesIO(response.content))
        img = np.array(img, dtype='double')
        
        img = transformer(img)
        img = img['image']
        img = img.float()
        img = img.view(1,3,300,300)
        out = model(img)
        out = nn.Softmax(dim=1)(out)
        out = out.argmax(axis=1)
        label = fol[out]
        return label
    else:
        return "Failed to download image from URL"
# 3. Index route, opens automatically on http://127.0.0.1:8000
@app.get('/')
def index():     
    return {'message': 'Hello, World'}

# 4. Route with a single parameter, returns the parameter within a message
#    Located at: http://127.0.0.1:8000/AnyNameHere


# 3. Expose the prediction functionality, make a prediction from the passed
@app.post('/predict')
def predict(data):
    print(data)# Extract the 'img' value from the request body
    img_path = data["img"]
    
    # Call the predict function with the image path
    
    prediction = predict(img_path)
      
    return {
        'prediction': prediction       
    }

# 5. Run the API with uvicorn
#    Will run on http://127.0.0.1:8000
if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
#uvicorn app:app --reload   