import React from 'react';
import './ArticleForm.css';
function ArticleForm() {
  return (
    <div className='articleHeader'>
      <h2>What do you want to share as an article?</h2>
      <div className='title'>
        <label>Title:</label>
        <input type="text" placeholder="Enter title" />
      </div>
      <div className='Abstract'>
        <label>Abstract:</label>
        <input type="text" placeholder="Enter article abstract" />
      </div>
      <div className='Article'>
        <label>Article Text:</label>
        <textarea rows="4" placeholder="Enter article text"></textarea>
      </div>
      <div className='Tag'>
        <label>Tags:</label>
        <input type="text" placeholder="Enter tags" />
      </div>
      <button className="Button">Post</button>
    </div>
  );
}

export default ArticleForm;
