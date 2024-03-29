
import './App.css';

const user = { // this line declares a constant variable and assigns it an object literal
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg', //is set to a string which islikely a URL pointing to an image
imageSize: 90, //represents the desired image size in pixels
};

export default function Profile() { // export default displays the main component in the file
  return( //indicates a function is returning a jsx code
  // user.name -> accesses a property named name from an object likely called user 
    // (<> </>) -> a way to group multiple jsx elements without introducing un neccesary DOM elements
    <> 
    <h1> {user.name} </h1>
    <img 
    classname="avator" 
    src={user.imageUrl} //specifies source of image
    alt={'Photo of ' + user.name} //defines alternative text for the image
    style={{ // assigns an object literal to the style attribute bof the jsx element
      width: user.imageSize, //sets the width of the image
      height:user.imageSize, //sets the height of the image
    }}
    />
    </>
  );
}


