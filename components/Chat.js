
import React, {useState, useEffect} from 'react';
import '../app.css';
import image from '../images/image.png';

export const Chat: React.FC = (props) => {
  
  return (
    <table id="table">
    <tr>
      <div className="chat-card">
        <table>
          <tr>
            <tc>
              <img alt="profile-image" className="image" src={image}/>
            </tc>
            <tc>
              <tr>
                <div className="chat-name">Emily Dougrer</div>
              </tr>            
              <tr>
                <div className="chat-job">Developer</div>
              </tr>            
            </tc>
            <tc>
              <button className="close-button">X</button>
            </tc>
          </tr>
          <tr>
            <div className="chat-content">
            Hi there. We use Boards to share initial goals and ideas.
            </div>
          </tr>
        </table>      
      </div>
    </tr>
    <tr>
      <div className="chat-input">
        <form>
          <input type="text" placeholder="Type your message..." className="chat-input">
          
          </input>
          <input type="submit" className="submit-button"/>
        </form>
      </div>
    </tr>
    </table>
  );
}; 
  