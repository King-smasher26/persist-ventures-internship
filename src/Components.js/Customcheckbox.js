import React from 'react'
import "../App.css"
export default function Customcheckbox() {
  function clicked(e) {
    const newentry = [e.target.name, e.target.checked]
    console.log(newentry)
    // props.clicked(newentry);
    console.log(newentry)
    if (e.target.name == "walking")
      e.target.checked ? document.querySelector(".walking-options").style.display = "flex" : document.querySelector(".walking-options").style.display = "none";
    if (e.target.name == "running")
      e.target.checked ? document.querySelector(".running-options").style.display = "flex" : document.querySelector(".running-options").style.display = "none";
    if (e.target.name == "movies")
      e.target.checked ? document.querySelector(".movies-options").style.display = "flex" : document.querySelector(".movies-options").style.display = "none";
    if (e.target.name == "shopping")
      e.target.checked ? document.querySelector(".shopping-options").style.display = "flex" : document.querySelector(".shopping-options").style.display = "none";
  }

  return (
    <div>
      <section className="app">
        <div className='first-section'>

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
            <div className='options-text'>Choose Walking speed</div>
            <div className='walking-options-inside'>

            <article className="feature1">
              <input onClick={clicked} type="checkbox" id="feature3" name='walking_slow' />
              <div>
                <span>
                  Slow
                </span>
              </div>
            </article>
            <article className="feature1">
              <input onClick={clicked} type="checkbox" id="feature3" name='walking_Moderate' />
              <div>
                <span>
                  Moderate
                </span>
              </div>
            </article>
            <article className="feature1">
              <input onClick={clicked} type="checkbox" id="feature3" name='walking_fast' />
              <div>
                <span>
                  Fast
                </span>
              </div>
            </article>
            </div>
          </div>
        </div>
        {/* <article className="feature2">
          <input onClick={clicked} type="checkbox" id="feature2" name='running' />
          <div>
          <span>
          Running
          </span>
          </div>
        </article> */}

<div className='expand-checkbox'>

<i className="fa fa-rocket"></i>
<article className="feature2">
  <input onClick={clicked} type="checkbox" id="feature2" name='running' />
  <div>
    <span>
      Running
    </span>
  </div>
</article>
<div className='running-options'>
  <div className='options-text'>Choose Running speed</div>
  <div className='running-options-inside'>

  <article className="feature2">
    <input onClick={clicked} type="checkbox" id="feature3" name='running_slow' />
    <div>
      <span>
        Slow
      </span>
    </div>
  </article>
  <article className="feature2">
    <input onClick={clicked} type="checkbox" id="feature2" name='runnning_Moderate' />
    <div>
      <span>
        Moderate
      </span>
    </div>
  </article>
  <article className="feature2">
    <input onClick={clicked} type="checkbox" id="feature2" name='running_fast' />
    <div>
      <span>
        Fast
      </span>
    </div>
  </article>
  </div>
</div>
</div>

          </div>
       <div className='second-section'>

        <article className="feature3">
          <input onClick={clicked} type="checkbox" id="feature3" name='bicycling' />
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
        <article className="feature5">
          <input onClick={clicked} type="checkbox" id="feature5" name='dogwalking' />
          <div>
            <span>
              Gardening
            </span>
          </div>
        </article>
        <article className="feature6">
          <input onClick={clicked} type="checkbox" id="feature6" name='dogwalking' />
          <div>
            <span>
              Swimming
            </span>
          </div>
        </article>
       </div>

       <div className='third-section'>

        <article className="feature7">
          <input onClick={clicked} type="checkbox" id="feature7" name='dogwalking' />
          <div>
            <span>
              Drawing/Painting
            </span>
          </div>
        </article>
        <article className="feature8">
          <input onClick={clicked} type="checkbox" id="feature8" name='dogwalking' />
          <div>
            <span>
              Cookouts/BBQ
            </span>
          </div>
        </article>
        <article className="feature9">
          <input onClick={clicked} type="checkbox" id="feature9" name='dogwalking' />
          <div>
            <span>
              Block parties
            </span>
          </div>
        </article>
        <article className="feature10">
          <input onClick={clicked} type="checkbox" id="feature10" name='dogwalking' />
          <div>
            <span>
              Dinner parties
            </span>
          </div>
        </article>
       </div>
       <div className='forth-section'>
        

        <article className="feature11">
          <input onClick={clicked} type="checkbox" id="feature11" name='dogwalking' />
          <div>
            <span>
              Computer games
            </span>
          </div>
        </article>
        <article className="feature12">
          <input onClick={clicked} type="checkbox" id="feature12" name='dogwalking' />
          <div>
            <span>
              Reading Groups
            </span>
          </div>
        </article>
        <article className="feature13">
          <input onClick={clicked} type="checkbox" id="feature13" name='dogwalking' />
          <div>
            <span>
              Restaurants
            </span>
          </div>
        </article>
       </div>
       <div className='fifth-section'>

        {/* <article className="feature14">
          <input onClick={clicked} type="checkbox" id="feature14" name='dogwalking' />
          <div>
            <span>
            movies
            </span>
          </div>
        </article> */}
        <div className='expand-checkbox'>

<i className="fa fa-rocket"></i>
<article className="feature14">
  <input onClick={clicked} type="checkbox" id="feature14" name='movies' />
  <div>
    <span>
      Movies
    </span>
  </div>
</article>
<div className='movies-options'>
  <div className='options-text'>Choose Genres</div>
  <div className='movies-options-inside'>

  <article className="feature14">
    <input onClick={clicked} type="checkbox" id="feature14" name='movies_action' />
    <div>
      <span>
        action
      </span>
    </div>
  </article>
  <article className="feature14">
    <input onClick={clicked} type="checkbox" id="feature14" name='movies_romance' />
    <div>
      <span>
        romance
      </span>
    </div>
  </article>
  <article className="feature14">
    <input onClick={clicked} type="checkbox" id="feature14" name='movies_comedy' />
    <div>
      <span>
        comedy
      </span>
    </div>
  </article>
  <article className="feature14">
    <input onClick={clicked} type="checkbox" id="feature14" name='movies_sciencefiction' />
    <div>
      <span>
        science-fiction
      </span>
    </div>
  </article>
  <article className="feature14">
    <input onClick={clicked} type="checkbox" id="feature14" name='movies_indie' />
    <div>
      <span>
        indie
      </span>
    </div>
  </article>
  </div>
</div>
</div>









        {/* <article className="feature15">
          <input onClick={clicked} type="checkbox" id="feature15" name='dogwalking' />
          <div>
            <span>
              Shopping
            </span>
          </div>
        </article> */}

<div className='expand-checkbox'>

<i className="fa fa-rocket"></i>
<article className="feature15">
  <input onClick={clicked} type="checkbox" id="feature15" name='shopping' />
  <div>
    <span>
      Shopping
    </span>
  </div>
</article>
<div className='shopping-options'>
  <div className='options-text'>Choose :</div>
  <div className='shopping-options-inside'>

  <article className="feature15">
    <input onClick={clicked} type="checkbox" id="feature15" name='shopping_groceries' />
    <div>
      <span>
      groceries
      </span>
    </div>
  </article>
  <article className="feature15">
    <input onClick={clicked} type="checkbox" id="feature15" name='shopping_clothing' />
    <div>
      <span>
        clothing
      </span>
    </div>
  </article>
  <article className="feature15">
    <input onClick={clicked} type="checkbox" id="feature15" name='shopping_books' />
    <div>
      <span>
        books
      </span>
    </div>
  </article>
  </div>
</div>
</div>

       </div>


      {/* <div className='btn-space'>

<button className='next-page-button'>-Next-</button>
      </div> */}
      </section>
    </div>
  )
}
