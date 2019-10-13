class Post:
    user = ""
    timestamp = ""
    message = ""

    def __init__(self, user: str, timestamp: str, message: str):
        self.user = user
        self.timestamp = timestamp
        self.message = message
