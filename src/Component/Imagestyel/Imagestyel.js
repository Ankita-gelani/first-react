
import img from '../../logo.svg'; 
let Logo = require('../../logo.svg');


const Imagestyel = () => {
    return (
        <>
          
            <img src={img}/>
            <img src={'img/image1.png'}/>
            <img src={require('../../logo.svg').default}/>




            

        </>
    );
};
export default Imagestyel;









