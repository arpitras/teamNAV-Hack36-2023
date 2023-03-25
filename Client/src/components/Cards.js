import React from 'react'
import one from '../images/1.png'
import four from '../images/4.png'
import six from '../images/6.png'

import Button from 'react-bootstrap/esm/Button'
const Centre = () => {
  return (
    <div>

<div className='box'>

<div className='box1' id='container'>
<img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png" class="img-thumbnail"/>
<div>
<h1>Card one</h1>
<p>here is card no one which is responsive and made in react js</p>
<button className='btn btn-danger btn-sm'>Read more</button>
</div>
</div>





<div className='box2' id='container'>
<img src={six}/>
<div>
<h1>Card Two</h1>
<p>here is card no Two which is responsive and made in react js</p>
<button className='btn btn-danger btn-sm'>Read more</button>
</div>




</div>
<div className='box3' id='container'>
<img src={four}/>
<div>
<h1>Card Three</h1>
<p>here is card no Three which is responsive and made in react js</p>
<button className='btn btn-danger btn-sm'>Read more</button>
</div>


</div>



<div className='box4' id='container'> 
<img src={four}/>
<div>
<h1>Card Four</h1>
<p>here is card no Four which is responsive and made in react js</p>
<button className='btn btn-danger btn-sm'>Read more</button>
</div>

</div>




<div className='box5' id='container'>
<img src={one}/>
<div>
<h1>Card Five</h1>
<p>here is card no Five which is responsive and made in react js</p>
<button className='btn btn-danger btn-sm'>Read more</button>
</div>
</div>
<div className='box6' id='container'>
<img src={six}/>
<div>
<h1>Card six</h1>
<p>here is card no six which is responsive and made in react js</p>
<button className='btn btn-danger btn-sm'>Read more</button>
</div>

</div>

</div>
    </div>
  )
}
export default Centre;