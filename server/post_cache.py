from typing import List
from server.post_store import *
from server.post import Post


class PostCache:
    posts_cache: List[Post] = []
    outdated_cache = True

    def update(self):
        if self.outdated_cache:
            self.posts_cache = get_posts()
            self.outdated_cache = False

    def to_json(self):
        return [post.__dict__ for post in self.posts_cache]
