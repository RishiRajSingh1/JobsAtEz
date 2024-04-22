import React from 'react'
import { Link } from 'react-router-dom'
import "./Terms.scss"

const Terms = () => {
  return (
      <div className='terms'>
        <div className="box" style={{overflow:"scroll"}}>
          <h1>Terms & Conditions</h1>
          <h3>Your Agreement</h3>
          <p>Welcome to JobsAtEz! These Terms and Conditions govern your use of our freelancing platform. By accessing or using JobsAtEz, you agree to be bound by these Terms and Conditions. Please read them carefully before proceeding.

            1. User Eligibility:

            Users must be at least 18 years old to use JobsAtEz.
            By using our platform, you represent and warrant that you have the legal capacity to enter into a binding agreement.
            2. Account Registration:

            Users must create an account to access certain features of JobsAtEz.
            You agree to provide accurate, current, and complete information during the registration process.
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            3. User Conduct:

            Users agree to use JobsAtEz in compliance with all applicable laws and regulations.
            Users must not engage in any unlawful, fraudulent, or harmful activities on our platform.
            Users are solely responsible for the content they post on JobsAtEz, including but not limited to job listings, proposals, and communications.
            4. Freelancer Services:

            Freelancers agree to deliver high-quality services to clients in a timely manner.
            Freelancers must communicate effectively with clients and provide regular updates on project progress.
            Freelancers are responsible for setting their rates and negotiating terms with clients.
            5. Client Obligations:

            Clients agree to provide clear project requirements and objectives to freelancers.
            Clients must make timely payments for services rendered by freelancers.
            Clients must not engage in any activities that violate freelancers' rights or intellectual property.
            6. Payment Terms:

            JobsAtEz may collect fees for certain services provided on the platform. These fees will be clearly communicated to users.
            Payments between clients and freelancers should be processed through JobsAtEz's payment system to ensure security and transparency.
            JobsAtEz is not responsible for any disputes between clients and freelancers regarding payments.
            7. Intellectual Property:

            Users retain ownership of the intellectual property rights to their content posted on JobsAtEz.
            By posting content on JobsAtEz, users grant JobsAtEz a non-exclusive, worldwide, royalty-free license to use, modify, and distribute their content for the purposes of operating and promoting the platform.
            8. Termination of Account:

            JobsAtEz reserves the right to suspend or terminate user accounts that violate these Terms and Conditions or engage in any prohibited activities.
            Users may terminate their accounts at any time by contacting JobsAtEz customer support.
            9. Disclaimer of Warranties:

            JobsAtEz is provided on an "as is" and "as available" basis without any warranties of any kind.
            JobsAtEz does not guarantee the accuracy, reliability, or availability of the platform or any content posted on it.
            10. Limitation of Liability:

            JobsAtEz shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use or inability to use the platform.
            11. Governing Law:

            These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction].
            Any disputes arising out of or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
            By using JobsAtEz, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. If you do not agree to these Terms and Conditions, you may not use JobsAtEz. These Terms and Conditions may be updated from time to time, and it is your responsibility to review them periodically for any changes.
          </p>
          </div>
          <div className="btn">
          <Link to={"/"}><button>Cancel</button></Link>
            <Link to={"/register"}><button>Accept</button></Link>
            
          </div>
        </div>
  )
}

export default Terms;