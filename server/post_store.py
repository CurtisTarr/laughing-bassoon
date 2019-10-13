import csv
import os
from server.post import Post

FILE_PATH = os.path.dirname(os.path.abspath(__file__)) + "/posts.txt"


def get_posts() -> [Post]:
    posts = []
    with open(FILE_PATH, "r") as f:
        reader = csv.reader(f, delimiter="§")
        for row in reader:
            posts.append(Post(row[0], row[1], row[2]))
    return posts


def add_post(post: Post):
    with open(FILE_PATH, "a") as f:
        f.write("{name}§{timestamp}§{message}\n".format(name=post.user, timestamp=post.timestamp, message=post.message))
