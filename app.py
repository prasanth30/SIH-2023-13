import pickle
import streamlit as st
import instaloader
import json
import csv
#import os
import sys
import shutil
import numpy as np
import time
import pandas as pd
import matplotlib.pyplot as plt
import torch
import torch.nn as nn
import albumentations as A
import numpy as np
from albumentations.pytorch import ToTensorV2
transform = A.Compose([
        A.CenterCrop(height=405, width=405),
        ToTensorV2()
])
pickle_in = open("Saved-Models/EfficientNetB3saved.pkl","rb")
model = pickle.load(pickle_in)
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
def predict(model,file_path):
    img = np.array(Image.open(file_path))
    img = transform(img)
    out = model(img)
    out = nn.Softmax(dim=1)(out)
    out = out.argmax(axis=1)
    lable= fol[out]
    return lable
def main():

    st.title("Dermbot")
    html_temp = """
    <div>
    <h1 style="color:MEDIUMSEAREDN;text-align:left;">Dermbot</h1>
    </div>
    """
    st.markdown(html_temp, unsafe_allow_html=True)

    col1,col2  = st.beta_columns([2,2])
    
    with col1: 
        with st.beta_expander("Information", expanded=True):
            st.write("""
            This is a simple website to diagnose skin diseases.
            """)



    with col2:
        st.subheader("Upload the skin image")
        
        image_file = st.file_uploader("Upload", type=['png','jpg','jpeg'])
        
        if image_file is not None:
            file_details = {"filename" : image_file.name, "filetype" : image_file.type, "filesize" : image_file.size}
            st.write(file_details)
            st.image(load_image(image_file),width = 300)
        
        if st.button('Diagnose'):

            loaded_model = load_model('models/.pkl')
            img1 = load_image(image_file)
            img = np.array(img1)
            img = transform(img)
            out = model(img)
            out = nn.Softmax(dim=1)(out)
            out = out.argmax(axis=1)
            lable= fol[out]
            st.markdown(lable)
		
    hide_menu_style = """
    <style>
    #MainMenu {visibility: hidden;}
    </style>
    """

hide_menu_style = """
        <style>
        #MainMenu {visibility: hidden;}
        </style>
        """
st.markdown(hide_menu_style, unsafe_allow_html=True)

if __name__ == '__main__':
	main()