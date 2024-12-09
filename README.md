# VibeCheck: YouTube Comment Analyzer  

*"Unlocking the true sentiment behind YouTube comments to empower creators with actionable insights for better content and viewer engagement."*

---

## Table of Contents  

1. [Introduction](#introduction)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [Setup and Installation](#setup-and-installation)  
5. [Usage](#usage)  
6. [Project Structure](#project-structure)  
7. [Contributing](#contributing)  
8. [License](#license)  

---

## Introduction  

VibeCheck is a sentiment analysis tool designed to classify YouTube comments into positive, neutral, or negative categories. It uses this classification to generate a weighted average rating for YouTube videos, helping creators and viewers gauge public sentiment at a glance.  

---

## Features  

- Fetch video details like title, channel name, views, and likes using YouTube API.  
- Analyze video comments for sentiment (positive, neutral, negative).  
- Calculate a sentiment-based weighted rating for videos.  
- Provide actionable insights for content improvement.  

---

## Technologies Used  

- *Backend*: Flask  
- *Frontend*: ReactJs  
- *Machine Learning*: TensorFlow (Bi-directional GRU with Attention Layer)    
- *APIs*: Google YouTube API  

---

## Setup and Installation  

1. *Clone the repository:*  

2. *Install dependencies:*
    ```bash
    pip3 install -r requirements.txt
  
3. Set up API credentials:
Obtain an API key from the Google Developers Console.  

4. Run the application:
*Backend*:

    python3 app.py

*Frontend*:

    npm run dev

