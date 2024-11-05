import React, { ReactNode } from 'react';
import './Section.css';

interface SectionProps {
    SectionTitle: string;
    children?: ReactNode
    
}

const Section: React.FC<SectionProps> = ({ SectionTitle,children }) => {
    return (        
        <div>
            <div className="row majorrow">
                <div className="col">
                    <p className="h4">{SectionTitle}</p>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Section;