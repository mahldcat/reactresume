import React, { ReactNode } from 'react';
import './ProfessionalExp.css';

interface ProfessionalExpProps {
}

const ProfessionalExp: React.FC<ProfessionalExpProps> = () => {
    return (
        <div>
            <div className="row banda">
                <div className="col-2">
                    2011-2024 GoDaddy<br/> 
                    Lead Developer and Manager<br/> 
                    Windows Hosting using Plesk
                </div>
                <div className="col-10">
                    <p>Customer focus:</p>
                    <ul>
                        <li>Managed the hosting platform that hosts 490,000 individual websites consuming ~300 TB of data, 120,000 MSSQL servers and 145,000 MySql databases</li>
                        <li>I handled over 90% of our customer tickets, ~30% used to improve the product</li>
                        <li>Involved Customer Care in our day to day operations</li>
                        <li>Involved with Service Now Automation—CI/CD automation and Incident Creation leading to faster deployments and better incident tracking</li>
                        <li>Worked with SRE to deploy metricbeats, allowing us to quickly identify where we could improve performance, and identify potentially abusive customers.</li>
                    </ul>
                    
                    <p>Management, Mentorship, Cross team collaboration:</p>
                    <ul>
                        <li>Worked with my team's PM to oversee, plan and cost out our initiatives</li>
                        <li>Managed a team of developers overseeing their careers and promotions</li>
                        <li>Successfully mentored multiple college interns, each leading to a job offer</li>
                        <li>Almost daily collaboration with partner teams over Zoom and Slack</li>
                    </ul>
                    <p>SDLC:</p>
                    <ul>
                        <li>Scrum master for more than 8 years using Jira as the task management system</li>
                        <li>Owned and Developed my team’s CI/CD workflows</li>
                        <li>Migrated many of our systems onto chocolatey simplifying deployments</li>    
                        <li>Have been using a Pull Request/Peer review process for &gt; 10 years</li>
                    </ul>
                    <p>Simplification:</p>
                    <ul>
                        <li>Eliminated 80% of our internal APIs</li>
                        <li>Continuous refactoring of our REST APIs, leading to a 20% code reduction in 2023</li>
                        <li>Conversion from .net 4.8 to .net 8  leading to further code simplification</li>
                        <li>Converted team over to a new ecommerce system simplifying account management</li>            
                    </ul>
                    <p>Complex Project Management:</p>
                    <ul>
                        <li>Successfully migrated more than 130,000 customer from legacy hosting to Plesk</li>
                        <li>Hypervisor and VM upgrades ( &gt; 800 servers) to latest Windows / Plesk</li>
                        <li>Data Center moves/reorganizations involving more than 80 web hosts</li>
                        <li>Bulk customer DNS updates (more than 100,000 sites to date)</li>            
                    </ul>
                    <p>Security Champion:</p>            
                    <ul>
                        <li>Total conversion of our apis to use bearer token (JWT) instead of basic auth</li> 
                        <li>Developed a service to scan and report customers potentially hosting CSAM.</li>  
                        <li>Secured our source code by eliminating all secrets using tools like trufflehog</li>
                        <li>Converted to AWS/ASM for secrets management across the entire product</li>  
                        <li>Fully eliminated the need for “at rest” encrypted credential files in our environment</li>
                        <li>Developed and wrote 90% of my team’s threat models</li>
                        <li>Active participant with our security team on pen tests</li>
                        <li>Involved with the deployment and use of Illumio</li>
                    </ul>            	    
                </div>
            </div>

            <div className="row bandb">
                <div className="col-2">
                    2006-2011 Microsoft<br/>
                    SDET II<br/>
                    Safety platform
                </div>
                <div className="col-10">
                    <p>Accomplishments:</p>
                    <ul>
                        <li>Responsible for maintaining the antispam training systems used within Outlook, Exchange and Hotmail</li>
                        <li>Designed and Tested URS, a high capacity web service that handled approximately half a billion raw hits per day</li>
                        <li>Involved in the testing and validation of the Safety Platform's Malware focused site reputation system</li>
                    </ul>
                </div>

            </div>
            <div className="row banda">
                <div className="col-2">
                    2002-2006 Swan Island Networks<br/>
                    SDE 1 & STE 1
                </div>
                <div className="col-10">
                    <p>Accomplishments:</p>
                    <ul>
                        <li>Tested/Verified Swan Island's Swarm/Scout application</li>
                        <li>Integrated various systems with ESRI's mapping API</li>
                    </ul>
                </div>
            </div>
        </div>


    );
};

export default ProfessionalExp;