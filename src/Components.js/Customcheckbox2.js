import React from "react";
import "../App.css";

export default function Customcheckbox2() {
    function clicked(e){
        if (e.target.name == "Errands")
      e.target.checked ? document.querySelector(".Errands-options").style.display = "flex" : document.querySelector(".Errands-options").style.display = "none"; 
        if (e.target.name == "Childcare")
      e.target.checked ? document.querySelector(".Childcare-options").style.display = "flex" : document.querySelector(".Childcare-options").style.display = "none"; 
        if (e.target.name == "Eldercare")
      e.target.checked ? document.querySelector(".Eldercare-options").style.display = "flex" : document.querySelector(".Eldercare-options").style.display = "none"; 
        if (e.target.name == "Petcare")
      e.target.checked ? document.querySelector(".Petcare-options").style.display = "flex" : document.querySelector(".Petcare-options").style.display = "none"; 
       
    }
  return (
    <div>
        <section>
        <div className="custom-checkbox-section1">
            <div className="expand-checkbox">

        <h1>Favours I can do:</h1>
        <i className="fa fa-rocket"></i>
          <article className="feature16">
            <input onClick={clicked} type="checkbox" id="feature16" name='Errands' />
            <div>
              <span>
                Errands
              </span>
            </div>
          </article>
          <div className='Errands-options'>
            <div className='options-text'>Choose how freequently you would be able to contribute:</div>
            <div className='Errands-options-inside'>

            <article className="feature16">
              <input onClick={clicked} type="checkbox" id="feature16" name='Errands_emergencies' />
              <div>
                <span>
                  Emergencies
                </span>
              </div>
            </article>
            <article className="feature16">
              <input onClick={clicked} type="checkbox" id="feature16" name='Errands_occasional' />
              <div>
                <span>
                  Occasional
                </span>
              </div>
            </article>
            <article className="feature16">
              <input onClick={clicked} type="checkbox" id="feature16" name='Errands_freequently' />
              <div>
                <span>
                  Frequently
                </span>
              </div>
            </article>
            </div>
          </div>
        
            </div>
        </div>
        <div className="custom-checkbox-section2">
            <div className="expand-checkbox">

        <i className="fa fa-rocket"></i>
          <article className="feature17">
            <input onClick={clicked} type="checkbox" id="feature17" name='Childcare' />
            <div>
              <span>
                Childcare
              </span>
            </div>
          </article>
          <div className='Childcare-options'>
            <div className='options-text'>Choose how freequently you would be able to contribute:</div>
            <div className='Childcare-options-inside'>

            <article className="feature17">
              <input onClick={clicked} type="checkbox" id="feature17" name='Childcare_emergencies' />
              <div>
                <span>
                  Emergencies
                </span>
              </div>
            </article>
            <article className="feature17">
              <input onClick={clicked} type="checkbox" id="feature17" name='Childcare_occasional' />
              <div>
                <span>
                  Occasional
                </span>
              </div>
            </article>
            <article className="feature17">
              <input onClick={clicked} type="checkbox" id="feature17" name='Childcare_freequently' />
              <div>
                <span>
                  Frequently
                </span>
              </div>
            </article>
            </div>
          </div>
        
            </div>
        </div>
        <div className="custom-checkbox-section3">
            <div className="expand-checkbox">

        <i className="fa fa-rocket"></i>
          <article className="feature18">
            <input onClick={clicked} type="checkbox" id="feature18" name='Eldercare' />
            <div>
              <span>
                Eldercare
              </span>
            </div>
          </article>
          <div className='Eldercare-options'>
            <div className='options-text'>Choose how freequently you would be able to contribute:</div>
            <div className='Eldercare-options-inside'>

            <article className="feature18">
              <input onClick={clicked} type="checkbox" id="feature18" name='Eldercare_emergencies' />
              <div>
                <span>
                  Emergencies
                </span>
              </div>
            </article>
            <article className="feature18">
              <input onClick={clicked} type="checkbox" id="feature18" name='Eldercare_occasional' />
              <div>
                <span>
                  Occasional
                </span>
              </div>
            </article>
            <article className="feature18">
              <input onClick={clicked} type="checkbox" id="feature18" name='Eldercare_freequently' />
              <div>
                <span>
                  Frequently
                </span>
              </div>
            </article>
            </div>
          </div>
        
            </div>
        </div>
        <div className="custom-checkbox-section4">
            <div className="expand-checkbox">

        <i className="fa fa-rocket"></i>
          <article className="feature19">
            <input onClick={clicked} type="checkbox" id="feature19" name='Petcare' />
            <div>
              <span>
                Petcare
              </span>
            </div>
          </article>
          <div className='Petcare-options'>
            <div className='options-text'>Choose how freequently you would be able to contribute:</div>
            <div className='Petcare-options-inside'>

            <article className="feature19">
              <input onClick={clicked} type="checkbox" id="feature19" name='Petcare_emergencies' />
              <div>
                <span>
                  Emergencies
                </span>
              </div>
            </article>
            <article className="feature19">
              <input onClick={clicked} type="checkbox" id="feature19" name='Petcare_occasional' />
              <div>
                <span>
                  Occasional
                </span>
              </div>
            </article>
            <article className="feature19">
              <input onClick={clicked} type="checkbox" id="feature19" name='Petcare_freequently' />
              <div>
                <span>
                  Frequently
                </span>
              </div>
            </article>
            </div>
          </div>
        
            </div>
        </div>
        </section>
    </div>
  )
}
