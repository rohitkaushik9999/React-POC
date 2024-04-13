import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'

export const changeImage = event => {
    var imageId = event.currentTarget.id;
    var res = document.getElementById("displayImg");
    if(imageId === 'img1')
        res.src = img1;
    else if(imageId === 'img2')
        res.src = img2; 
    else if(imageId === 'img3')
        res.src = img3; 
    else
        res.src = img4;      
};

