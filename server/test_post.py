import unittest
from post import Post


class TestPost(unittest.TestCase):

    def test_constructor(self):
        post = Post("user", "timestamp", "message")

        self.assertEqual("user", post.user)
        self.assertEqual("timestamp", post.timestamp)
        self.assertEqual("message", post.message)
