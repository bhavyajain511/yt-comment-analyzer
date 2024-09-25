from flask import Flask, request, jsonify
from flask_cors import CORS
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import pandas as pd
import re
import os
from dotenv import load_dotenv

load_dotenv()
DEVELOPER_KEY = os.getenv('DEVELOPER_KEY')

app = Flask(__name__)
CORS(app)  # To allow cross-origin requests from React

# def extract_video_id(youtube_url):
#     """
#     Extract the video ID from a full YouTube URL.
#     """
#     video_id_match = re.match(r'.*v=([^&]*)', youtube_url)
#     if video_id_match:
#         return video_id_match.group(1)
#     return None

def get_comments(video_id, part="snippet", max_results=100):
    """
    Function to get comments from a YouTube video
    """
    youtube = build("youtube", "v3", developerKey=DEVELOPER_KEY)

    try:
        # Retrieve comment thread using the youtube.commentThreads().list() method
        response = youtube.commentThreads().list(
            part=part,
            videoId=video_id,
            textFormat="plainText",
            maxResults=max_results
        ).execute()

        # print(response)

        comments = []
        for item in response["items"]:
            comment_text = item["snippet"]["topLevelComment"]["snippet"]["textDisplay"]
            likes = item["snippet"]["topLevelComment"]["snippet"]["likeCount"]
            comments.append({"comment": comment_text, "num_of_likes": likes})

        return comments
    except HttpError as error:
        print(f"An HTTP error {error.status_code} occurred:\n {error.content}")
        return None

@app.route('/analyze', methods=['POST'])
def analyze():
    # Get the YouTube link from the request
    data = request.get_json()
    youtube_link = data.get('youtubeLink')

    # Extract the video ID from the YouTube link
    # video_id = extract_video_id(youtube_link)
    video_id=youtube_link

    if video_id:
        # Get comments from the video
        comments = get_comments(video_id)

        if comments:
            # Create a pandas dataframe from the comments list
            df = pd.DataFrame(comments)

            # Sort dataframe by number of likes in descending order
            df = df.sort_values(by=['num_of_likes'], ascending=False)

            # Return the top 10 comments as a JSON response
            # top_comments = df.head(10).to_dict(orient="records")
            # print(top_comments)

            all_comments=df.to_dict(orient="records")
            return jsonify({"all_comments": all_comments})

        return jsonify({"error": "Error: Could not retrieve comments from video."}), 500
    else:
        return jsonify({"error": "Invalid YouTube link provided."}), 400

if __name__ == '__main__':
    app.run(debug=True)
