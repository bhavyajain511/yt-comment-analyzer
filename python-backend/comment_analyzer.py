from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

from model import predict_sentiment_f 

def analyze_comments(comments):
    """
    Function to analyze the sentiment of comments using predict_sentiment_f.
    """
    analyzed_comments = []

    for comment in comments:
        comment_text = comment["comment"]
        # Classify sentiment using predict_sentiment_f
        sentiment, sentiment_score = predict_sentiment_f(comment_text)
        print(sentiment,sentiment_score)

        sentiment_score = float(sentiment_score)
        
        # Add sentiment label and score to the comment
        analyzed_comment = {
            "comment": comment_text,
            "num_of_likes": comment["num_of_likes"],
            "sentiment": sentiment,
            "timestamp": comment["timestamp"],
            "rating": sentiment_score
        }

        analyzed_comments.append(analyzed_comment)

    return analyzed_comments

