import React from 'react'
import "../App.css"
export default function Customcheckbox() {
  return (
    <div>
        <section className="app">
  <i className="fa fa-rocket"></i>
  <h1>It's time to <span className="blue-color">upgrade</span></h1>
  <h3 className="gray-color">Choose the feature that best fit your needs and you'll be good to go!</h3>
  <article className="feature1">
    <input type="checkbox" id="feature1" />
    <div>
      <span>
        20 GB<br/>
        + $15.00
      </span>
    </div>
  </article>
  
  <article className="feature2">
    <input type="checkbox" id="feature2" />
    <div>
      <span>
        10 Emails<br/>
        + $10.00
      </span>
    </div>
  </article>
  
  <article className="feature3">
    <input type="checkbox" id="feature3"/>
    <div>
      <span>
        Support<br/>
        + $65.00
      </span>
    </div>
  </article>
  
  <article className="feature4">
    <input type="checkbox" id="feature4" />
    <div>
      <span>
        Coffee<br/>
        $1.00
      </span>
    </div>
  </article>
  
  <h3>
    <span className="blue-color">50% </span>discount only today!
  </h3>
  
  <a href="#" className="upgrade-btn">Upgrade</a>
  
  <div className="gray-color">terms & conditions apply, the app will never share your private info</div>
</section>

<div className="social">
  <a href="https://www.linkedin.com/in/florin-cornea-b5118057/" target="_blank">
    <i className="fab fa-linkedin"></i>
  </a>
</div>
    </div>
  )
}
