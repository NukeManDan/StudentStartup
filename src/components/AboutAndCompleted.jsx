import React from "react";

const AboutAndCompleted = () => {
  return (
    <div className="aboutandcompleted">
      <div className="listofcompletes">
        <h3><center>What Our Students Have Accomplished</center></h3>
        <ul>
          <li>
            Shepardson needs a way to reduce waste so that we can decrease the
            impact on our community. Partners – Shepardson, PSD, City of Fort
            Collins Recycling Team
          </li>
          <li>
            Choices we make impact our personal health. According to our
            partners, students have daily opportunities to positively impact
            their personal health and wellness. Their choices impact themselves
            and those around them. How can we make a difference in the choices
            they make? Partners – CSU Prevention Research Center, Larimer County
            Sheriff’s office
          </li>
          <li>
            According to our partners, it is often challenging for residents in
            senior living facilities to find continued purpose in their lives.
            How can we help? Partner – Columbine Heath Systems
          </li>
          <li>
            The City of Fort Collins needs to reach 20% renewable energy by
            2020, and we are currently at 16%. They want to increase the use of
            solar energy, but there are challenges and barriers. How can we
            create more use of solar energy under these constraints? Partner –
            City of Fort Collins Utilities
          </li>
        </ul>
      </div>
      <div className="aboutus">
        <h3><center>About Us</center></h3>
        <p>
          We are a connector for students, biuissnesses and educators to make real world impact in projects they care about.
          
          <h2>Students:</h2>
            <ul>
              <li><strong>Choice</strong> of projects to work on and learn about</li>
              <li><strong>Impact</strong> on their community</li>
              <li><strong>Portfolios</strong> to highlight their efforts and skills</li>
            </ul>  

          <h2>Educators:</h2>

            <ul>
              <li><strong>Overhead Reduction</strong> - we facilitate projects to free educators time</li>
              <li><strong>Individualized Learning</strong> - self-directed students</li>
              <li><strong>Engaged Students</strong> - reducing behavioral issues </li>
            </ul>  

          <h2>Businesses:</h2>

            <ul>
              <li><strong>Real Solutions</strong> - valuable products developed by students</li>
              <li><strong>Corporate Social Impact</strong> - strengthen your brand image</li>
              <li><strong>Community Leadership</strong> - highlight your contributions and values</li>

            </ul>  
           {" "}
        </p>
        <img src="http://lacity17.test-cityofla.acsitefactory.com/sites/g/files/wph781/f/styles/tiled_homepage_blog/public/science_day.jpg?itok=DHwooQ1m" />
      </div>
    </div>
  );
};

export default AboutAndCompleted;
