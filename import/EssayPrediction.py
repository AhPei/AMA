import pandas as pd
import re
import pickle
import string

import nltk
from nltk.stem import WordNetLemmatizer
from nltk.corpus import wordnet
from spellchecker import SpellChecker
from nltk.tokenize import word_tokenize
import os

#average word length for a text
def avg_word_len(text):
  clean_essay = re.sub(r'\W', ' ', text)
  words = nltk.word_tokenize(clean_essay)
  total = 0
  for word in words:
    total = total + len(word)
  average = total / len(words)
  
  return average

# word count in a given text
def word_count(text):
  clean_essay = re.sub(r'\W', ' ', text)
  return len(nltk.word_tokenize(clean_essay))

# char count in a given text
def char_count(text):
  return len(re.sub(r'\s', '', str(text).lower()))

# sentence count in a given text
def sent_count(text):
  return len(nltk.sent_tokenize(text))

#tokenization of texts to sentences
def sent_tokenize(text):
  stripped_essay = text.strip()
  
  tokenizer = nltk.data.load('tokenizers/punkt/english.pickle')
  raw_sentences = tokenizer.tokenize(stripped_essay)
  
  tokenized_sentences = []
  for raw_sentence in raw_sentences:
    if len(raw_sentence) > 0:
      clean_sentence = re.sub("[^a-zA-Z0-9]"," ", raw_sentence)
      tokens = nltk.word_tokenize(clean_sentence)
      tokenized_sentences.append(tokens)
  return tokenized_sentences


# lemma, noun, adjective, verb, adverb count for a given text

def count_lemmas(text):
  
  noun_count = 0
  adj_count = 0
  verb_count = 0
  adv_count = 0   
  lemmas = []
  lemmatizer = WordNetLemmatizer()
  tokenized_sentences = sent_tokenize(text)
  
  for sentence in tokenized_sentences:
    tagged_tokens = nltk.pos_tag(sentence) 
    
    for token_tuple in tagged_tokens:
      pos_tag = token_tuple[1]
      
      if pos_tag.startswith('N'): 
        noun_count += 1
        pos = wordnet.NOUN
        lemmas.append(lemmatizer.lemmatize(token_tuple[0], pos))
      elif pos_tag.startswith('J'):
        adj_count += 1
        pos = wordnet.ADJ
        lemmas.append(lemmatizer.lemmatize(token_tuple[0], pos))
      elif pos_tag.startswith('V'):
        verb_count += 1
        pos = wordnet.VERB
        lemmas.append(lemmatizer.lemmatize(token_tuple[0], pos))
      elif pos_tag.startswith('R'):
        adv_count += 1
        pos = wordnet.ADV
        lemmas.append(lemmatizer.lemmatize(token_tuple[0], pos))
      else:
        pos = wordnet.NOUN
        lemmas.append(lemmatizer.lemmatize(token_tuple[0], pos))
  
  lemma_count = len(set(lemmas))
  
  return noun_count, adj_count, verb_count, adv_count, lemma_count

def token_word(text):
  text = "".join([ch.lower() for ch in text if ch not in string.punctuation])
  tokens = nltk.word_tokenize(text)
  return tokens

def misspell_count(text):
  spell = SpellChecker()
  misspelled = spell.unknown(token_word(text))
  return len(misspelled)

def create_features(texts):
  data = pd.DataFrame(columns=('Average_Word_Length','Sentence_Count','Word_Count',
                              'Character_Count', 'Noun_Count','Adjective_Count',
                              'Verb_Count', 'Adverb_Count', 'Lemma_Count' , 'Misspell_Count'
                                ))

  data['Average_Word_Length'] = texts.apply(avg_word_len)
  data['Sentence_Count'] = texts.apply(sent_count)
  data['Word_Count'] = texts.apply(word_count)
  data['Character_Count'] = texts.apply(char_count)
  temp=texts.apply(count_lemmas)
  noun_count,adj_count,verb_count,adverb_count,lemma_count = zip(*temp)
  data['Noun_Count'] = noun_count
  data['Adjective_Count'] = adj_count
  data['Verb_Count'] = verb_count
  data['Adverb_Count'] = adverb_count
  data['Lemma_Count'] = lemma_count
  data['Misspell_Count'] = texts.apply(misspell_count)
  return data

def predict(text):
  text = pd.Series(text)
  text = create_features(text)
  file_name = os.getcwd()+'\import\predictModel.sav'
  with open(file_name, 'rb') as file:
    MODEL = pickle.load(file)
  return MODEL.predict(text)[0]