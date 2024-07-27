import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './SkillsCard.css'; // Ensure you have imported the CSS file

const SkillsCard = ({ data, title }) => {
  return (
    <div className='skill_card'>
      <h3>{title}</h3>
      <div className="skill_content">
        {data.map((list, index) => (
          <article className='skill_details' key={index}>
            <BsPatchCheckFill className='skill_icon' />
            <div>
              <h4 className='skill_name'>{list.skill}</h4>
              <small className='text_muted skill_level'>{list.level}</small>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default SkillsCard;
