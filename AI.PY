from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
import json
import sqlite3

myBot =ChatBot(name ='PyBot', read_only = True,logic_adapters = ['chatterbot.logic.BestMatch','chatterbot.logic.MathematicalEvaluation'])
small_talk = ['hi,there!','hi!', 'how do you do?']
list_trainer = ListTrainer(myBot)
list_trainer.train([
'Hi',
'Hello',
'I need your assistance regarding my order',
'Please, Provide me with your order id',
'I have a complaint.',
'Please elaborate, your concern',
'How long it will take to receive an order ?',
'An order takes 3-5 Business days to get delivered.',
'Okay Thanks',
'No Problem! Have a Good Day!'
])
# loading data
f = open("data1.json","r")
data= json.load(f)
i = 0
trainData = []
# training data
for p in data:
    d = []
    for x in p['dialog']:
        d.append(x['text'])
    trainData.append(d)
for d in trainData[:50]:
    try:
        list_trainer.train(d)
    except sqlite3.OperationalError as e :
        pass
# communicate with humman
while True:
    humanInput = input()
    print(myBot.get_response(humanInput))
    if humanInput == "Bye":
        break
