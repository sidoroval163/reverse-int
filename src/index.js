module.exports = function reverse (n) {
   let z=String (n);
    z = z.split('');
    z = z.reverse();
    z = z.join('');
    
    if (n<0){return z.slice(0,-1);}
    else {return(z);};
}
