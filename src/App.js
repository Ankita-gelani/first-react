import { Fragment } from 'react';
import './css/Page.css'; 
import  Exportstyle1 from './Component/compont style/Head';
import Exportstyle2, { Exportstyle22 }from './Component/compont style/Head2';
import { Exportstyle3, Exportstyle33 }from './Component/compont style/Head3';
import Modualcssstyle from './Component/Modualcssstyle/Modualcssstyle';
import Imagestyel from './Component/Imagestyel/Imagestyel';
import Page1 from './Component/Props/Page1';
import Conditionrendering from './Component/Condition rendering/Conditionrendering';
import data from './Component/Props/Data.json'; // Importing JSON data
import Datapage from './Component/Props/Datapage'; // Importing the Datapage component
// import State, { useState } from './Component/statee/State'; 
import Forms from './Component/Form handling/Forms'; 
import Formscheckbox from './Component/Form handling/Formscheckbox'; 
import Formscheckboxall from './Component/Form handling/Formscheckboxall'; 
import Classcomponent from './Component/class component/Classcomponent';
import Classformhanding from './Component/class component/Classformhanding';
import Functionlifecycle from './Component/functionlife cycle/Functionlifecycle';
import { useState } from 'react'; /* Functionlifecycle line 72 */
// import Classlifecycle from './Component/class life cycle/Classlifecycle';
import Purecomponent from './Component/hook/Purecomponent';
import UseCustomecallback from './Component/hook/UseCustomecallback';








function App() {
  const[show ,setshow] = useState(true)/* Functionlifecycle line 76 */
   const [Value, setvalue] = useState(0)/* purecomponent line no 80 */
  return (
    <Fragment>

      {/*<Exportstyle1/>
      <Exportstyle2/>
      <Exportstyle22/>
      <Exportstyle33/>
      <Exportstyle3/> */}
 
      {/* <Modualcssstyle/> */}
      
      {/* <Imagestyel/> */}

      {/* <div className='props-div'>
      <Page1 img='img/image1.png' haeding='Head01' ftr='Product01'/>
      <Page1 img='img/image2.jpg' haeding='Head02' ftr='Product02'/>
      <Page1 img='img/image3.jpg' haeding='Head03' ftr='Product03'/>
      </div> */}

      {/* <Conditionrendering/> */}

      {/* <div className="props-div">
  {data.map((element, index) => {
     return<Datapage key={index} {...element} />
})}
</div> */}


{/* <State/> */}


{/* <Forms/> */}
{/* <Formscheckbox/> */}
<Formscheckboxall/>


{/* <Classcomponent/> */}
{/* <Classformhanding/> */}

{/* <Classlifecycle/> */}

{/* {show && <Functionlifecycle/>}
<button onClick={() => setshow(false)}>Hide</button>  */}
{/* Functionlifecycle line 72 and69 */}

{/* <h2>{Value}</h2>
<Purecomponent Value={Value}/>
<button onClick={() => setvalue(Value+1)}>click</button> */}

{/* <Usememohook/> */}

{/* <UseCustomecallback/> */}

    </Fragment>
  );
}

export default App;
