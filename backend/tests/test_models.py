from app.models import Chat, ChatMessage


def test_models_are_defined():
    assert Chat.__tablename__ == "chats"
    assert ChatMessage.__tablename__ == "chat_messages"
