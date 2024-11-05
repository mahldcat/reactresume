import React, { ReactNode } from 'react';
import './Education.css';

interface EducationProps {    
}

const Education: React.FC<EducationProps> = () => {
    return (
        <div className="row banda">
            <div className="col-6">
                Portland State University<br/>
                Masters<br/>
                Computer Science<br/>
            </div>
            <div className="col-6">
                Millersville University<br/>
                Bachelor of Science Education<br/>
                Mathematics<br/>
            </div>
        </div>
    );
};

export default Education;