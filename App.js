 import React, { useState } from 'react';
import './App.css';
import PostTypeSelector from './PostTypeSelector';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';

function App() {
  const [postType, setPostType] = useState('question');

  return (
    <div className="App">
      <h1>New Post</h1>
      <PostTypeSelector postType={postType} setPostType={setPostType} />
      {postType === 'question' ? <QuestionForm /> : <ArticleForm />}
    </div>
  );
}

export default App;
