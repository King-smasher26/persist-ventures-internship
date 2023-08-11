import React from 'react'
import "../App.css"
export default function Customcheckbox() {
  function clicked(e){
    const newentry=[e.target.name,e.target.checked]
    console.log(newentry)
    // props.clicked(newentry);
    console.log(newentry  )
}
  return (
    <div>
        <section className="app">
  <i className="fa fa-rocket"></i>
  <article className="feature1">
    <input onClick={clicked} type="checkbox" id="feature1" name='walking' />
    <div>
      <span>
        Walking
      </span>
    </div>
  </article>
  
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
  
  
</section>

    </div>
  )
}
