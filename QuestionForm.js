import React from 'react';
import './QuestionForm.css';
function QuestionForm() {
  return (
    <div className='articleHeader'>
      <h2>What do you want to share or ask?</h2>
      <div className='title'>
        <label>Title:</label>
        <input type="text" placeholder="Enter title" />
      </div>
      <div className='Article'>
        <label>Description:</label>
        <textarea rows="4" placeholder="Enter description"></textarea>
      </div>
      <div className='Tag'>
        <label>Tags:</label>
        <input type="text" placeholder="Enter tags" />
      </div>
      <button className="Button">Post</button>
    </div>
  );
}

export default QuestionForm;
