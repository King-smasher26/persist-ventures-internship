import React from 'react'
import "../App.css"
export default function Customcheckbox() {
  function clicked(e){
    const newentry=[e.target.name,e.target.checked]
    console.log(newentry)
    // props.clicked(newentry);
    console.log(newentry)
    if(e.target.checked==true){
      console.log("now");
      const mystyle = {
        backgroundColor: "DodgerBlue",
      };
      console.log(

        document.querySelector(".walking-options").style.display="flex"
        )
    }
}
  return (
    <div>
        <section className="app">
          <div className='expand-checkbox'>

  <i className="fa fa-rocket"></i>
  <article className="feature1">
    <input onClick={clicked} type="checkbox" id="feature1" name='walking' />
    <div>
      <span>
        Walking
      </span>
    </div>
  </article>
  <div className='walking-options'>
  <article className="feature3">
    <input onClick={clicked} type="checkbox" id="feature3" name='walking_slow'/>
    <div>
      <span>
        Slow
      </span>
    </div>
  </article>
  <article className="feature3">
    <input onClick={clicked} type="checkbox" id="feature3" name='walking_medium'/>
    <div>
      <span>
        Medium
      </span>
    </div>
  </article>
  <article className="feature3">
    <input onClick={clicked} type="checkbox" id="feature3" name='walking_fast'/>
    <div>
      <span>
        Fast
      </span>
    </div>
  </article>
  </div>
          </div>
  <article className="feature2">
    <input onClick={clicked} type="checkbox" id="feature2" name='running' />
    <div>
      <span>
        Running
      </span>
    </div>
  </article>
  
  <article className="feature3">
    <input onClick={clicked} type="checkbox" id="feature3" name='bicycling'/>
    <div>
      <span>
        bicycling
      </span>
    </div>
  </article>
  
  <article className="feature4">
    <input onClick={clicked} type="checkbox" id="feature4" name='dogwalking' />
    <div>
      <span>
        Dogwalking
      </span>
    </div>
  </article>
  <article className="feature4">
    <input onClick={clicked} type="checkbox" id="feature4" name='dogwalking' />
    <div>
      <span>
        Gardening
      </span>
    </div>
  </article>
  <article className="feature4">
    <input onClick={clicked} type="checkbox" id="feature4" name='dogwalking' />
    <div>
      <span>
        Swimming
      </span>
    </div>
  </article>
  
  
</section>

    </div>
  )
}
