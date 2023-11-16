from flask import Flask, render_template, request, jsonify
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)

# Khởi tạo ChatBot
chatbot = ChatBot('LanguageBot')
trainer = ChatterBotCorpusTrainer(chatbot)
trainer.train('chatterbot.corpus.english')  # Bạn có thể chọn bộ dữ liệu ngôn ngữ khác nếu cần

# Trang chủ
@app.route('/')
def index():
    return render_template('index.html')

# API endpoint để nhận và trả lời các câu hỏi từ ChatBot
@app.route('/get_response', methods=['POST'])
def get_response():
    user_input = request.form['user_input']
    response = str(chatbot.get_response(user_input))
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
