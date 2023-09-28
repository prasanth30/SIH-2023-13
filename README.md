# Smart India Internal Hackathon 2023
## Team:- SIH-2023/13
## PROBLEM CODE:- 1344

Dermbot is a Preliminary Dermatology Diagnosis AI tool

## Dataset
- https://www.kaggle.com/datasets/shubhamgoel27/dermnet

## Models Used
- EfficientNetB3
- ResNet18
Use Saved models using pickle
```sh
import pickle
pkl = open("model.pkl","rb")
model = pickle.load(open("model.pkl", "rb"))
```



## Tech

Dermbot uses a number of open source projects to work properly:

- Pytorch
- pandas
- numpy
- matplotlib
- pretrained models from torch vision
- javascript
- reactjs
